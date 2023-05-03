package com.seosam.edusetpo.tutor.service;


import com.seosam.edusetpo.tutor.dto.LoginReqDto;
import com.seosam.edusetpo.tutor.dto.SignUpDto;
import com.seosam.edusetpo.tutor.dto.TutorDto;
import com.seosam.edusetpo.tutor.entity.Tutor;

import java.time.LocalDate;
import java.util.Optional;

public interface TutorService {

    Optional<Long> signUpTutor(SignUpDto signUpDto);

    boolean duplicateEmailCheck(String email);

    Optional<Long> login(LoginReqDto loginReqDto);

    default Tutor toEntity(SignUpDto signUpDto) {
        return Tutor.builder()
                .email(signUpDto.getEmail())
                .password(signUpDto.getPassword())
                .name(signUpDto.getName())
                .nickname(signUpDto.getNickname())
                .profileUrl("defaultUrl")
                .isWithdraw(false)
                .themeIndex((short) 1)
                .createdAt(LocalDate.now())
                .isAuthenticated(false)
                .build();
    }

    default TutorDto toResponseDto(Tutor tutor) {
        return TutorDto.builder()
                .email(tutor.getEmail())
                .password(tutor.getPassword())
                .name(tutor.getName())
                .nickname(tutor.getNickname())
                .profileUrl(tutor.getProfileUrl())
                .isWithdraw(tutor.getIsWithdraw())
                .themeIndex(tutor.getThemeIndex())
                .isAuthenticated(tutor.getIsAuthenticated())
                .build();
    }
}
