package com.seosam.edusetpo.parent.service;


import com.seosam.edusetpo.common.Response;
import com.seosam.edusetpo.config.handler.JwtTokenProvider;
import com.seosam.edusetpo.parent.dto.request.LoginReqDto;
import com.seosam.edusetpo.parent.dto.request.NameUpdateDto;
import com.seosam.edusetpo.parent.dto.request.SignUpReqDto;
import com.seosam.edusetpo.parent.dto.response.LoginResDto;
import com.seosam.edusetpo.parent.dto.response.SignUpResDto;
import com.seosam.edusetpo.parent.entity.Parent;
import com.seosam.edusetpo.parent.repository.ParentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Collections;
import java.util.Optional;

@Service
public class ParentServiceImpl implements ParentService{

    private final ParentRepository parentRepository;
    private final Response response;
    @Autowired
    private PasswordEncoder passwordEncoder;
    private final JwtTokenProvider jwtTokenProvider;

    public ParentServiceImpl(ParentRepository parentRepository,
                             Response response,
                             JwtTokenProvider jwtTokenProvider) {
        this.parentRepository = parentRepository;
        this.response = response;
        this.jwtTokenProvider = jwtTokenProvider;
    }


    @Override
    public ResponseEntity<?> signUpParent(SignUpReqDto signUpReqDto) {
        if (signUpReqDto.getEmail().equals("")) {
            return response.fail("이메일을 입력해주세요.", HttpStatus.BAD_REQUEST);
        }
        if (signUpReqDto.getPassword().equals("")) {
            return response.fail("비밀번호를 입력해주세요.", HttpStatus.BAD_REQUEST);
        }
        if (signUpReqDto.getParentName().equals("")) {
            return response.fail("이름을 입력해주세요", HttpStatus.BAD_REQUEST);
        }
        if (duplicateEmailCheck(signUpReqDto.getEmail())) {
            return response.fail("이미 회원가입된 이메일입니다.", HttpStatus.BAD_REQUEST);
        }

        signUpReqDto.setPassword(passwordEncoder.encode(signUpReqDto.getPassword()));
        Parent parent = Parent.builder()
                .email(signUpReqDto.getEmail())
                .password(signUpReqDto.getPassword())
                .parentName(signUpReqDto.getParentName())
                .createdAt(LocalDate.now())
                .isWithdraw(false)
                .roles(Collections.singletonList("ROLE_USER"))
                .build();
        SignUpResDto signUpResDto = new SignUpResDto(signUpReqDto);
        parentRepository.save(parent);
        return response.success(signUpResDto, "회원가입에 성공했습니다.", HttpStatus.OK);
    };

    @Override
    public boolean duplicateEmailCheck(String email) {
        if (parentRepository.existsByEmail(email)) {
            return true;
        }
        return false;
    };

    @Override
    public ResponseEntity<?> login(LoginReqDto loginReqDto) {
        Optional<Parent> parent = parentRepository.findByEmail(loginReqDto.getEmail());
        if (parent.isEmpty()) {
            return response.fail("가입되지 않은 이메일 입니다.", HttpStatus.BAD_REQUEST);
        }
        if (!passwordEncoder.matches(loginReqDto.getPassword(), parent.get().getPassword())) {
            return response.fail("비밀번호가 틀렸습니다.", HttpStatus.BAD_REQUEST);
        }

        String accessToken = jwtTokenProvider.generateJwtToken(parent.get().getEmail(), parent.get().getRoles());
        LoginResDto loginResDto = new LoginResDto(parent.get(), accessToken);
        return response.success(loginResDto, "로그인 성공", HttpStatus.OK);
    };

    @Override
    public ResponseEntity<?> changeName(String email, NameUpdateDto nameUpdateDto) {
        Optional<Parent> foundParent = parentRepository.findByEmail(email);

        if (foundParent.isEmpty()) {
            return response.fail("존재하지 않은 유저입니다.", HttpStatus.BAD_REQUEST);
        }
        foundParent.get().updateName(nameUpdateDto);
        parentRepository.save(foundParent.get());
        return response.success(nameUpdateDto, "닉네임이 변경되었습니다.", HttpStatus.OK);
    }
//
//    ResponseEntity<?> checkDuplicateEmail(String email);
//
//    ResponseEntity<?> changePassword();
}
