package com.seosam.edusetpo.tutor.service;


import com.seosam.edusetpo.tutor.dto.*;
import com.seosam.edusetpo.tutor.entity.Tutor;
import org.springframework.http.ResponseEntity;

import java.time.LocalDate;
import java.util.Optional;

public interface TutorService {

    ResponseEntity<?> signUpTutor(SignUpDto signUpDto);

    boolean duplicateEmailCheck(String email);

    ResponseEntity<?> login(LoginReqDto loginReqDto);

    ResponseEntity<?> updateNickname(String email, NicknameUpdateDto updateDto);

    default Tutor toEntity(SignUpDto signUpDto, String refreshToken) {
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
                .refreshToken(refreshToken)
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
                .refreshToken(tutor.getRefreshToken())
                .build();
    }
}
