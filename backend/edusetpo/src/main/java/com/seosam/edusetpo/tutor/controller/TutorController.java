package com.seosam.edusetpo.tutor.controller;

import com.seosam.edusetpo.common.TokenUtils;
import com.seosam.edusetpo.model.BaseResponseBody;
import com.seosam.edusetpo.tutor.dto.LoginReqDto;
import com.seosam.edusetpo.tutor.dto.LoginRespDto;
import com.seosam.edusetpo.tutor.dto.SignUpDto;
import com.seosam.edusetpo.tutor.entity.Tutor;
import com.seosam.edusetpo.tutor.repository.TutorRepository;
import com.seosam.edusetpo.tutor.service.TutorService;
import io.jsonwebtoken.Claims;
import org.springframework.security.core.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.ui.Model;
import lombok.RequiredArgsConstructor;
import org.springframework.validation.Errors;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController // JSON 형태 결괏값을 반환해줌(@ResponseBody 가 필요없음)
@RequiredArgsConstructor // final 객체를 Constructor Injection 해줌(Autowired 역할)
@RequestMapping("/tutor")
public class TutorController {

    private final TutorRepository tutorRepository;
    private final SignUpFormValidator signUpFormValidator;
    private final PasswordEncoder passwordEncoder;
    private final TutorService tutorService;

    @InitBinder("signUpForm")
    public void initBinder(WebDataBinder webDataBinder) {
        webDataBinder.addValidators(signUpFormValidator);
    }

    @GetMapping("tutorList")
    public List<Tutor> findAllTutor() {
        return tutorRepository.findAll();
    }

//        String newPassword = passwordEncoder.encode(signUpForm.getPassword());
//
//        String nickName = signUpForm.getNickname();
//
//        // 닉네임을 입력하지 않은 경우 : 이름과 동일하게 만들어주기
//        if (nickName.equals("")) {
//            nickName = signUpForm.getName();
//        }


    @PostMapping("signup")
    public ResponseEntity<?> signUp(@RequestBody SignUpDto signUpDto) {
        BaseResponseBody baseResponseBody;

        Optional<Long> optionalTutor = tutorService.signUpTutor(signUpDto);

        // 중복된 이메일인 경우 에러 발생
        if (optionalTutor.equals(Optional.of(-1L))) {
            baseResponseBody = BaseResponseBody.builder().message("same email").statusCode(400).build();
            return ResponseEntity.status(400).body(baseResponseBody);
        }

        // 값이 생성되지 않은 경우 에러 발생
        if (optionalTutor.isEmpty()) {
            baseResponseBody = BaseResponseBody.builder().message("fail").statusCode(400).build();
            return ResponseEntity.status(400).body(baseResponseBody);
        }

        baseResponseBody = BaseResponseBody.builder().message("success").statusCode(200).responseData(signUpDto).build();
        return ResponseEntity.status(200).body(baseResponseBody);
    }

    @PostMapping("login")
    public ResponseEntity<?> logIn(@RequestBody LoginReqDto loginReqDto) {
        BaseResponseBody baseResponseBody;

        Optional<LoginRespDto> optionalTutor = tutorService.login(loginReqDto);

        if (optionalTutor.equals(Optional.empty())) {
            baseResponseBody = BaseResponseBody.builder().message("fail to login").statusCode(400).build();
            return ResponseEntity.status(400).body(baseResponseBody);
        }

        baseResponseBody = BaseResponseBody.builder().message("success").statusCode(200).responseData(optionalTutor).build();
        return ResponseEntity.status(200).body(baseResponseBody);
    }
}
