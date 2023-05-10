package com.seosam.edusetpo.tutor.service;


import com.seosam.edusetpo.common.Response;
import com.seosam.edusetpo.config.handler.JwtTokenProvider;
import com.seosam.edusetpo.tutor.dto.request.*;
import com.seosam.edusetpo.tutor.dto.response.LoginRespDto;
import com.seosam.edusetpo.tutor.dto.response.SignUpRespDto;
import com.seosam.edusetpo.tutor.dto.response.TutorInfoRespDto;
import com.seosam.edusetpo.tutor.entity.Tutor;
import com.seosam.edusetpo.tutor.repository.TutorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Collections;
import java.util.List;
import java.util.Optional;


@Service
public class TutorServiceImpl implements TutorService {

    private final TutorRepository tutorRepository;
    private final Response response;
    private final AuthenticationManagerBuilder authenticationManagerBuilder;
    @Autowired
    private PasswordEncoder passwordEncoder;
    private final JwtTokenProvider jwtTokenProvider;

    public TutorServiceImpl(TutorRepository tutorRepository,
                            Response response,
                            AuthenticationManagerBuilder authenticationManagerBuilder,
                            JwtTokenProvider jwtTokenProvider) {
        this.tutorRepository = tutorRepository;
        this.response = response;
        this.authenticationManagerBuilder = authenticationManagerBuilder;
        this.jwtTokenProvider = jwtTokenProvider;
    }

    @Override
    public ResponseEntity<?> signUpTutor(SignUpDto signUpDto) {
        if (signUpDto.getEmail().equals("")) {
            return response.fail("이메일을 입력해주세요.", HttpStatus.BAD_REQUEST);
        }
        if (signUpDto.getPassword().equals("")) {
            return response.fail("비밀번호를 입력해주세요.", HttpStatus.BAD_REQUEST);
        }
        if (signUpDto.getName().equals("")) {
            return response.fail("이름을 입력해주세요.", HttpStatus.BAD_REQUEST);
        }
        if (signUpDto.getNickname().equals("")) {
            return response.fail("닉네임을 입력해주세요.", HttpStatus.BAD_REQUEST);
        }
        if (duplicateEmailCheck(signUpDto.getEmail())) {
            List<Tutor> forCheckTutors = tutorRepository.findTutorsByEmail(signUpDto.getEmail());
            for (Tutor tutor : forCheckTutors) {
                if (!tutor.getIsWithdraw()) {
                    return response.fail("이미 회원가입된 이메일입니다.", HttpStatus.BAD_REQUEST);
                }
            }
        }

        // 비밀번호 암호화하고 저장
        signUpDto.setPassword(passwordEncoder.encode(signUpDto.getPassword()));
        Tutor tutor = Tutor.builder()
                .email(signUpDto.getEmail())
                .password(signUpDto.getPassword())
                .name(signUpDto.getName())
                .nickname(signUpDto.getNickname())
                .profileUrl("default_url")
                .isWithdraw(false)
                .themeIndex((short) 1)
                .createdAt(LocalDate.now())
                .isAuthenticated(false)
                .refreshToken("refreshToken")
                .roles(Collections.singletonList("ROLE_USER"))
                .build();
//        Tutor tutor = toEntity(signUpDto, refreshToken);
        SignUpRespDto signUpRespDto = new SignUpRespDto(signUpDto);
        tutorRepository.save(tutor);

        return response.success(signUpRespDto, "회원가입에 성공했습니다.", HttpStatus.OK);
    }

    @Override
    public boolean duplicateEmailCheck(String email) {
        if (tutorRepository.existsByEmail(email)) {
            return true;
        } else {
            return false;
        }
    }

    @Override
    public ResponseEntity<?> login(LoginReqDto loginReqDto) {
        Tutor tutor = tutorRepository.findByEmail(loginReqDto.getEmail())
                .orElseThrow(() -> new IllegalArgumentException("가입되지 않은 이메일 입니다."));
        if (!passwordEncoder.matches(loginReqDto.getPassword(), tutor.getPassword())) {
            throw new IllegalArgumentException("잘못된 비밀번호 입니다");
        }

        if (tutor.getIsWithdraw()) {
            return response.fail("가입되지 않은 계정입니다.", HttpStatus.BAD_REQUEST);
        }

        String accessToken = jwtTokenProvider.generateJwtToken(tutor.getEmail(), tutor.getRoles());
        LoginRespDto loginRespDto = new LoginRespDto(tutor, accessToken);

        return response.success(loginRespDto, "로그인 성공", HttpStatus.OK);
    }

    @Override
    public ResponseEntity<?> updateNickname(String email, NicknameUpdateDto updateDto) {
        Optional<Tutor> foundTutor = tutorRepository.findByEmail(email);

        if (foundTutor.isEmpty()) {
            return response.fail("존재하지 않은 유저입니다.", HttpStatus.BAD_REQUEST);
        }
        foundTutor.get().updateNickname(updateDto);
        tutorRepository.save(foundTutor.get());
        return response.success(updateDto, "닉네임이 변경되었습니다.", HttpStatus.OK);
    }

    @Override
    public ResponseEntity<?> checkDuplicateEmail(String email) {
        if (tutorRepository.existsByEmail(email)) {
            List<Tutor> forCheckTutor = tutorRepository.findTutorsByEmail(email);
            for (Tutor tutor : forCheckTutor) {
                if (!tutor.getIsWithdraw()) {
                    return response.fail("이미 사용중인 이메일입니다.", HttpStatus.BAD_REQUEST);
                }
            }
        }
        return response.success(email,"사용 가능한 이메일입니다.", HttpStatus.OK);
    }

    @Override
    public ResponseEntity<?> withdrawTutor(String email) {
        Optional<Tutor> foundTutor = tutorRepository.findByEmail(email);

        if (foundTutor.isEmpty()) {
            return response.fail("존재하지 않는 유저입니다.", HttpStatus.BAD_REQUEST);
        }
        if (foundTutor.get().getIsWithdraw()) {
            return response.fail("이미 회원 탈퇴한 유저입니다.", HttpStatus.BAD_REQUEST);
        }
        foundTutor.get().withdrawTutor();
        tutorRepository.save(foundTutor.get());
        return response.success("회원탈퇴가 완료되었습니다.");
    }

    @Override
    public ResponseEntity<?> changePassword(Tutor tutor, ChangePwdReqDto changePwdReqDto) {
        if (passwordEncoder.matches(changePwdReqDto.getOldPassword(), tutor.getPassword())) {
            String encodedPassword = passwordEncoder.encode(changePwdReqDto.getNewPassword());
            tutor.changePassword(encodedPassword);
            tutorRepository.save(tutor);
            return response.success("비밀번호가 변경되었습니다.");
        } else {
            return response.fail("비밀번호가 틀렸습니다.", HttpStatus.BAD_REQUEST);
        }
    }

    @Override
    public ResponseEntity<?> checkDuplicateNickname(String nickname) {
        if (tutorRepository.existsByNickname(nickname)) {
            return response.fail("이미 존재하는 닉네임입니다.", HttpStatus.BAD_REQUEST);
        } else {
            return response.success(nickname, "사용가능한 닉네임입니다.", HttpStatus.OK);
        }
    }

    // TODO : 중복되는 이메일인데 탈퇴한 친구들 구분하기
    @Override
    public ResponseEntity<?> getTutorInfo(Tutor tutor) {
        TutorInfoRespDto respDto = TutorInfoRespDto.builder()
                .email(tutor.getEmail())
                .name(tutor.getName())
                .nickname(tutor.getNickname())
                .profileUrl(tutor.getProfileUrl())
                .themeIndex(tutor.getThemeIndex())
                .build();

        return response.success(respDto, "성공", HttpStatus.OK);
    }

    @Override
    public ResponseEntity<?> changeProfileUrl(Tutor tutor, ChangeProfileReqDto reqDto) {
        tutor.changeProfileUrl(reqDto.getProfileUrl());
        tutorRepository.save(tutor);
        return response.success(reqDto, "성공", HttpStatus.OK);
    }

    @Override
    public ResponseEntity<?> changeThemeColor(Tutor tutor, ChangeThemeReqDto reqDto) {
        tutor.changeThemeColor(reqDto.getThemeIndex());
        tutorRepository.save(tutor);
        return response.success(reqDto, "성공", HttpStatus.OK);
    }
}
