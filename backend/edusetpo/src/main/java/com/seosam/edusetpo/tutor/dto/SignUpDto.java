package com.seosam.edusetpo.tutor.dto;


import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
@NoArgsConstructor
public class SignUpDto {

    private String email;
    private String password;
    private String name;
    private String nickname;

    public void setPassword(String password) {
        this.password = password;
    }
}
