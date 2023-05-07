package com.seosam.edusetpo.common;

import com.seosam.edusetpo.tutor.entity.Tutor;
import io.jsonwebtoken.*;
//import io.jsonwebtoken.Jwts;
//import io.jsonwebtoken.SignatureAlgorithm;

import javax.crypto.spec.SecretKeySpec;
import javax.xml.bind.DatatypeConverter;
import java.security.Key;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

public class TokenUtils {

    private static final String jwtSecretKey = "exampleSecretKey";


    // JWT 토큰을 생성
    public static String generateJwtToken(Tutor tutor) {
        JwtBuilder builder = Jwts.builder()
                .setHeader(createHeader())
                .setClaims(createClaims(tutor))
                .setSubject(String.valueOf(tutor.getEmail()))
                .signWith(SignatureAlgorithm.HS256, createSignature())
                .setExpiration(createExpiredDate());

        return builder.compact();
    }

    // JWT 토큰 Header 생성
    public static Map<String, Object> createHeader() {
        Map<String, Object> header = new HashMap<>();

        header.put("typ", "JWT");
        header.put("alg", "HS256");
        header.put("regDate", System.currentTimeMillis());
        return header;
    }


    // JWT 토큰 Claims 생성
    private static Map<String, Object> createClaims(Tutor tutor) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("email", tutor.getEmail());
        claims.put("tutorId", tutor.getTutorId());
        claims.put("nickname", tutor.getNickname());

        return claims;
    }


    // JWT 토큰의 서명 생성
    private static Key createSignature() {
        byte[] apiKeySecretBytes = DatatypeConverter.parseBase64Binary(jwtSecretKey);
        return new SecretKeySpec(apiKeySecretBytes, SignatureAlgorithm.HS256.getJcaName());
    }


    // 만료 기간 설정인데 아직 쓸 수 있을지는...?
    public static Date createExpiredDate() {
        Calendar calendar = Calendar.getInstance();
        calendar.add(Calendar.DATE, 1); // 1일의 유효기간
        return calendar.getTime();
    }


    // 토큰의 유효성 검사
    public static boolean isValidToken(String token) {
        try {
            Claims claims = getClaimsFromToken(token);

            return true;
        } catch (ExpiredJwtException exception) {
            return false;
        } catch (JwtException exception) {
            return false;
        } catch (NullPointerException exception) {
            return false;
        }
    }


    // 토큰 정보를 기반으로 claims 정보를 반환
    public static Claims getClaimsFromToken(String token) {
        return Jwts.parser().setSigningKey(DatatypeConverter.parseBase64Binary(jwtSecretKey))
                .parseClaimsJws(token).getBody();
    }


    // 토큰을 기반으로 사용자 정보를 반환(tutorId)
    public static Long getTutorIdFromToken(Claims claims) {
        return Long.parseLong(claims.get("tutorId").toString());
    }


    // 토큰을 기반으로 사용자 정보 반환 (사용자 이메일)
    public static String getTutorEmailFromToken(Claims claims) {
        return claims.get("email").toString();
    }


    // 토큰을 기반으로 사용자 정보 반환 (사용자 닉네임)
    public static String getTutorNicknameFromToken(Claims claims) {
        return claims.get("nickname").toString();
    }


    // 유효성 검사
    public static boolean checkExistenceOfEmail(Claims claims) {
        String email = claims.get("email").toString();
        if (email == null || email.equalsIgnoreCase("")) {
            return false;
        }
        return true;
    }

    public static String getTokenFromHeader(String header) {
        if (header != null && header.startsWith(AuthConstants.TOKEN_TYPE)) {
            return header.split(" ")[1];
        } else {
            return null;
        }
    }
}
