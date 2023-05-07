package com.seosam.edusetpo.tutor.service;


import com.seosam.edusetpo.common.TokenUtils;
import com.seosam.edusetpo.config.handler.JwtTokenProvider;
import com.seosam.edusetpo.tutor.dto.LoginReqDto;
import com.seosam.edusetpo.tutor.dto.LoginRespDto;
import com.seosam.edusetpo.tutor.dto.SignUpDto;
import com.seosam.edusetpo.tutor.dto.TutorDto;
import com.seosam.edusetpo.tutor.dto.Response;
import com.seosam.edusetpo.tutor.entity.Tutor;
import com.seosam.edusetpo.tutor.repository.TutorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class TutorServiceImpl implements TutorService {

    private final TutorRepository tutorRepository;
    private final Response response;
    private final AuthenticationManagerBuilder authenticationManagerBuilder;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public TutorServiceImpl(TutorRepository tutorRepository, Response response, AuthenticationManagerBuilder authenticationManagerBuilder) {
        this.tutorRepository = tutorRepository;
        this.response = response;
        this.authenticationManagerBuilder = authenticationManagerBuilder;
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
            return response.fail("이미 회원가입된 이메일입니다.", HttpStatus.BAD_REQUEST);
        }

        // 비밀번호 암호화하고 저장
        signUpDto.setPassword(passwordEncoder.encode(signUpDto.getPassword()));
        String refreshToken = JwtTokenProvider.generateRefreshToken(signUpDto.getEmail());
        Tutor tutor = toEntity(signUpDto, refreshToken);
        tutorRepository.save(tutor);

        return response.success(signUpDto, "회원가입에 성공했습니다.", HttpStatus.OK);
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

        Optional<Tutor> optionalTutor = tutorRepository.findByEmail(loginReqDto.getEmail());
        if (optionalTutor.isPresent()) {
            if (passwordEncoder.matches(loginReqDto.getPassword(), optionalTutor.get().getPassword())) {
                TutorDto loginedTutor = this.toResponseDto(optionalTutor.get());
                String accessToken = JwtTokenProvider.generateJwtToken(optionalTutor.get());
//                String refreshToken = JwtTokenProvider.generateRefreshToken(loginReqDto.getEmail());
                String refreshToken = loginedTutor.getRefreshToken();

                // Login email/PW를 기반으로 Authentication 객체를 생성
                // 이때 authentication은 인증 여부를 확인하는 authenticated 값이 false
                UsernamePasswordAuthenticationToken authenticationToken = loginReqDto.toAuthentication();
                System.out.println(authenticationToken);
                System.out.println("????????????????????????????????????");
                Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);
                System.out.println(authentication);
                SecurityContextHolder.getContext().setAuthentication(authentication);


                // 인증 정보를 기반으로 토큰을 생성

                LoginRespDto loginRespDto = LoginRespDto.builder()
                        .tutorDto(loginedTutor)
                        .accessToken(accessToken)
                        .refreshToken(refreshToken)
                        .refreshTokenExpirationTime(7 * 24 * 60 * 60 * 1000l)
                        .build();
                return response.success(loginRespDto, "로그인에 성공하였습니다.", HttpStatus.OK);
            } else {
                return response.fail("비밀번호가 틀렸습니다.", HttpStatus.BAD_REQUEST);
            }
        } else {
            return response.fail("존재하지 않은 유저입니다.", HttpStatus.BAD_REQUEST);
        }
    }
}
