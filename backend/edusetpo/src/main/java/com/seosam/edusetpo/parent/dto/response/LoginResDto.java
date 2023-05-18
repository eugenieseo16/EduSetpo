package com.seosam.edusetpo.parent.dto.response;


import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.seosam.edusetpo.parent.entity.Parent;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
@NoArgsConstructor
public class LoginResDto {

    private Long parentId;
    private String email;
    private String accessToken;

    @Builder
    public LoginResDto(Parent parent, String accessToken) {
        this.parentId = parent.getParentId();
        this.email = parent.getEmail();
        this.accessToken = accessToken;
    }
}
