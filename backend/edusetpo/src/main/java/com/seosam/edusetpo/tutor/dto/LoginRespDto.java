package com.seosam.edusetpo.tutor.dto;


import com.seosam.edusetpo.tutor.dto.TutorDto;
import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
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
    private String refreshToken;
    private Long refreshTokenExpirationTime;
    @Builder
    public LoginRespDto(TutorDto tutorDto, String accessToken, String refreshToken, Long refreshTokenExpirationTime) {
        this.email = tutorDto.getEmail();
        this.name = tutorDto.getName();
        this.nickname = tutorDto.getNickname();
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
        this.refreshTokenExpirationTime = refreshTokenExpirationTime;
    }
}
