package com.seosam.edusetpo.parent.dto.request;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ChangePwdReqDto {
    private Long parentId;
    private String oldPassword;
    private String newPassword;
}
