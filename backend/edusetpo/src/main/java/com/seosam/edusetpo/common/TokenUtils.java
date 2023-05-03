package com.seosam.edusetpo.common;

import com.seosam.edusetpo.tutor.entity.Tutor;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import javax.crypto.spec.SecretKeySpec;
import javax.xml.bind.DatatypeConverter;
import java.security.Key;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

public class TokenUtils {

    private static final String jwtSecretKey = "exampleSecretKey";

    public static String generateJwtToken(Tutor tutor) {
        JwtBuilder builder = Jwts.builder()
                .setHeader(createHeader())
                .setClaims(createClaims(tutor))
                .setSubject(String.valueOf(tutor.getEmail()))
                .signWith(SignatureAlgorithm.HS256, createSignature())
                .setExpiration(createExpiredDate());

        return builder.compact();
    }

    public static Map<String, Object> createHeader() {
        Map<String, Object> header = new HashMap<>();

        header.put("typ", "JWT");
        header.put("alg", "HS256");
        header.put("regDate", System.currentTimeMillis());
        return header;
    }

    private static Map<String, Object> createClaims(Tutor tutor) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("email", tutor.getEmail());
        claims.put("tutorId", tutor.getTutorId());
        claims.put("nickname", tutor.getNickname());

        return claims;
    }

    private static Key createSignature() {
        byte[] apiKeySecretBytes = DatatypeConverter.parseBase64Binary(jwtSecretKey);
        return new SecretKeySpec(apiKeySecretBytes, SignatureAlgorithm.HS256.getJcaName());
    }

    public static Date createExpiredDate() {
        Calendar calendar = Calendar.getInstance();
        calendar.add(Calendar.DATE, 1); // 1일의 유효기간
        return calendar.getTime();
    }
}
