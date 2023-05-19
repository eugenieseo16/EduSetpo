package com.seosam.edusetpo.parent.dto.response;


import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.seosam.edusetpo.parent.dto.request.SignUpReqDto;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
@NoArgsConstructor
public class SignUpResDto {

    private String email;
    private String parentName;

    @Builder
    public SignUpResDto(SignUpReqDto signUpReqDto) {
        this.email = signUpReqDto.getEmail();
        this.parentName = signUpReqDto.getParentName();
    }
}
