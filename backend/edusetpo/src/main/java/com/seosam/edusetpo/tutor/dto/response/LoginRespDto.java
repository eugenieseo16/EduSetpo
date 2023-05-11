package com.seosam.edusetpo.tutor.dto.response;


import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.seosam.edusetpo.tutor.entity.Tutor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
@NoArgsConstructor
public class LoginRespDto {

    private String email;
    private String name;
    private String nickname;
    private String accessToken;

    @Builder
    public LoginRespDto(Tutor tutor, String accessToken) {
        this.email = tutor.getEmail();
        this.name = tutor.getName();
        this.nickname = tutor.getNickname();
        this.accessToken = accessToken;
    }
//    private String refreshToken;
//    private Long refreshTokenExpirationTime;
//        this.refreshToken = refreshToken;
//        this.refreshTokenExpirationTime = refreshTokenExpirationTime;
//    }
}
