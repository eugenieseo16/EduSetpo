package com.seosam.edusetpo.config.handler;


import com.seosam.edusetpo.tutor.entity.Tutor;
import io.jsonwebtoken.*;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;

import javax.xml.bind.DatatypeConverter;
import java.util.*;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Component
public class JwtTokenProvider {

    private static String secretKey = "exampleSecretKey";
    private static final String AUTHORITIES_KEY = "auth";
    private static final String BEARER_TYPE = "Bearer";

    // 토큰 유효 시간 30분
    private static long ACCESS_TOKEN_EXPIRE_TIME = 30 * 60 * 1000L; // 30min
    private static long REFRESH_TOKEN_EXPIRE_TIME = 7 * 24 * 60 * 60 * 1000l; // 7days

    private final UserDetailsService userDetailsService;

    // 객체 초기화, secretKey를 인코딩
    protected void init() {
        secretKey = Base64.getEncoder().encodeToString(secretKey.getBytes());
    }

    // JWT 토큰 생성하기
    public static String generateJwtToken(Authentication authentication) {
        String authorities = authentication.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.joining(","));
//        Map<String, Object> claim = createClaims(tutor);
//        claim.put("roles", tutor.getRoles());
//        Claims claims = Jwts.claims(claim).setSubject(tutor.getEmail()); // JWT payload에 저장되는 정보
        Date now = new Date();
        return Jwts.builder()
                .setSubject(authentication.getName())
                .claim(AUTHORITIES_KEY, authorities)
                .setIssuedAt(now)
                .setExpiration(new Date(now.getTime() + ACCESS_TOKEN_EXPIRE_TIME))
                .signWith(SignatureAlgorithm.HS256, secretKey)
                .compact();
    }

    public static String generateRefreshToken(String email) {

        long now = (new Date()).getTime();

        String refreshToken = Jwts.builder()
                .setSubject(email)
                .setExpiration(new Date(now + REFRESH_TOKEN_EXPIRE_TIME)) // 만료시간
                .setIssuedAt(new Date(now)) // 토큰 발행 시간 정보
                .signWith(SignatureAlgorithm.HS256, secretKey)
                .compact();

        return refreshToken;
    }

    public static Map<String, Object> createHeader() {
        Map<String, Object> header = new HashMap<>();

        header.put("typ", "JWT");
        header.put("alg", "HS256");
        header.put("regDate", System.currentTimeMillis());
        return header;
    }

    public static Map<String, Object> createClaims(Tutor tutor) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("tutorId", tutor.getTutorId());
        claims.put("name", tutor.getName());
        return claims;
    }

    public boolean validateToken(String token) {
        try {
            Jwts.parserBuilder().setSigningKey(secretKey).build().parseClaimsJws(token);
            return true;
        } catch (io.jsonwebtoken.security.SecurityException | MalformedJwtException e) {
            System.out.println("Invalid JWT Token" +  e);
        } catch (ExpiredJwtException e) {
            System.out.println("Expired JWT Token" + e);
        } catch (UnsupportedJwtException e) {
            System.out.println("Unsupported JWT Token" + e);
        } catch (IllegalArgumentException e) {
            System.out.println("JWT claims string is empty" + e);
        }
        return false;
    }

    public Authentication getAuthentication(String accessToken) {
        Claims claims = parseClaims(accessToken);

        if (claims.get(AUTHORITIES_KEY) == null) {
            throw new RuntimeException("권한 정보가 없는 토큰입니다.");
        }

        Collection<? extends GrantedAuthority> authorities =
                Arrays.stream(claims.get(AUTHORITIES_KEY).toString().split(","))
                        .map(SimpleGrantedAuthority::new)
                        .collect(Collectors.toList());

        UserDetails principal = new User(claims.getSubject(), "", authorities);
        return new UsernamePasswordAuthenticationToken(principal, "", authorities);
    }

    private Claims parseClaims(String accessToken) {
        try {
            return Jwts.parserBuilder().setSigningKey(DatatypeConverter.parseBase64Binary(secretKey)).build()
                    .parseClaimsJws(accessToken).getBody();
        }
        catch (ExpiredJwtException e) {
            return e.getClaims();
        }
    }
}
