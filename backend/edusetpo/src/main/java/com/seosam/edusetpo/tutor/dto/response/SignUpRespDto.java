package com.seosam.edusetpo.tutor.dto.response;


import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.seosam.edusetpo.tutor.dto.request.SignUpDto;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
@NoArgsConstructor
public class SignUpRespDto {

    private String email;
    private String name;
    private String nickname;

    @Builder
    public SignUpRespDto(SignUpDto signUpDto) {
        this.email = signUpDto.getEmail();
        this.name = signUpDto.getName();
        this.nickname = signUpDto.getNickname();
    }
}
