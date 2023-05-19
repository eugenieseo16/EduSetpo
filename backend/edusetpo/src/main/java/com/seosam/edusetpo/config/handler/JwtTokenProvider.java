package com.seosam.edusetpo.config.handler;



//import com.seosam.edusetpo.parent.service.CustomParentDetailService;
//import com.seosam.edusetpo.tutor.service.CustomTutorDetailService;
import io.jsonwebtoken.*;
import lombok.RequiredArgsConstructor;
//import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;
import java.util.*;

@RequiredArgsConstructor
@Component
public class JwtTokenProvider {

    private String secretKey = "exampleSecretKey";
    private static final String AUTHORIZATION_HEADER = "Authorization";
    private static final String BEARER_TYPE = "Bearer";

    private long ACCESS_TOKEN_EXPIRE_TIME = 7 * 24 * 60 * 60 * 1000L; // 30 min 30 * 60 * 1000L

//    private final CustomTutorDetailService customTutorDetailService;
//
//    private final CustomParentDetailService customParentDetailService;
//
//    // secretKey Base64로 인코딩
//
//    public JwtTokenProvider(@Qualifier("customTutorDetailService") CustomTutorDetailService customTutorDetailService,
//                            @Qualifier("customParentDetailService") CustomParentDetailService customParentDetailService) {
//        this.customTutorDetailService = customTutorDetailService;
//        this.customParentDetailService = customParentDetailService;
//    }

    private final UserDetailsService userDetailsService;
    @PostConstruct
    protected void init() {
        secretKey = Base64.getEncoder().encodeToString(secretKey.getBytes());
    }

    // JWT 토큰 생성하기
    public String generateJwtToken(String email, List<String> roles, Long tutorId) {
        Claims claims = Jwts.claims().setSubject(email);
        claims.put("roles", roles);
        claims.put("tutorId", tutorId);
        Date now = new Date();
        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(now)
                .setExpiration(new Date(now.getTime() + ACCESS_TOKEN_EXPIRE_TIME))
                .signWith(SignatureAlgorithm.HS256, secretKey)
                .compact();
    }

    // parent 계정을 위한 토큰 만들기
    public String generateJwtTokenForParent(String email, Long parentId) {
        Claims claims = Jwts.claims().setSubject(email);
        claims.put("parentId", parentId);
        Date now = new Date();
        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(now)
                .setExpiration(new Date(now.getTime() + ACCESS_TOKEN_EXPIRE_TIME))
                .signWith(SignatureAlgorithm.HS256, secretKey)
                .compact();
    }

    // Jwt 토큰에서 인증 정보 조회
    public Authentication getAuthentication(String token) {
        UserDetails userDetails = userDetailsService.loadUserByUsername(this.getEmail(token));
        return new UsernamePasswordAuthenticationToken(userDetails, "", userDetails.getAuthorities());
    }

    // 토큰에서 회원 정보 추출
    public String getEmail(String token) {
        return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody().getSubject();
    }

    // 토큰에서 강사 회원 pk 값 추출
    public Long getTutorId(String token) {
        Claims claims = Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody();
        return Long.parseLong(claims.get("tutorId").toString());
    }


    // 토큰에서 학부모 회원 pk 값 추출
    public Long getParentId(String token) {
        Claims claims = Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody();
        return Long.parseLong(claims.get("parentId").toString());
    }

    // Request의 헤더에서 토큰값 가져오기
    public String resolveToken(HttpServletRequest request) {
        String bearerToken = request.getHeader(AUTHORIZATION_HEADER);
        if (StringUtils.hasText(bearerToken) && bearerToken.startsWith(BEARER_TYPE)) {
            return bearerToken.substring(7);
        }
        return null;
    }

    // 토큰 유효성 & 만료일자 확인
    public boolean validateToken(String token) {
        try {
            Jws<Claims> claims = Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token);
            return !claims.getBody().getExpiration().before(new Date());
        } catch (Exception e) {
            return false;
        }
    }
}
