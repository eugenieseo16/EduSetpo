package com.seosam.edusetpo.tutor.dto;


import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TutorDto {

    private String email;
    private String password;
    private String name;
    private String nickname;
    private String profileUrl;
    private boolean isWithdraw;
    private Short themeIndex;
    private boolean isAuthenticated;
}
