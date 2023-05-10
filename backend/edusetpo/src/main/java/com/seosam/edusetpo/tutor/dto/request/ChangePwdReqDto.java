package com.seosam.edusetpo.tutor.dto.request;


import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ChangePwdReqDto {
    private String oldPassword;
    private String newPassword;
}
