package com.seosam.edusetpo.tutor.dto.response;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TutorInfoRespDto {
    private Long tutorId;
    private String email;
    private String name;
    private String nickname;
    private String profileUrl;
    private Short themeIndex;
}
