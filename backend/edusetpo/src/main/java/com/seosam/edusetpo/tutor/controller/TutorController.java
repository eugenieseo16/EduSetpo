package com.seosam.edusetpo.tutor.controller;

import com.seosam.edusetpo.common.TokenUtils;
import com.seosam.edusetpo.tutor.dto.LoginReqDto;
import com.seosam.edusetpo.tutor.dto.NicknameUpdateDto;
import com.seosam.edusetpo.tutor.dto.SignUpDto;
import com.seosam.edusetpo.tutor.entity.Tutor;
import com.seosam.edusetpo.tutor.repository.TutorRepository;
import com.seosam.edusetpo.tutor.service.TutorService;
import io.jsonwebtoken.Claims;
import org.springframework.http.ResponseEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;


import java.util.List;


@RestController // JSON 형태 결괏값을 반환해줌(@ResponseBody 가 필요없음)
@RequiredArgsConstructor // final 객체를 Constructor Injection 해줌(Autowired 역할)
@RequestMapping("/tutor")
public class TutorController {

    private final TutorRepository tutorRepository;
    private final TutorService tutorService;

    @GetMapping("tutorList")
    public List<Tutor> findAllTutor() {
        return tutorRepository.findAll();
    }


    @PostMapping("signup")
    public ResponseEntity<?> signUp(@RequestBody SignUpDto signUpDto) {
        return tutorService.signUpTutor(signUpDto);
    }

    @PostMapping("login")
    public ResponseEntity<?> logIn(@RequestBody LoginReqDto loginReqDto) {
        return tutorService.login(loginReqDto);
    }

    @PutMapping("changeNickname")
    public ResponseEntity<?> changeNickname(Authentication authentication, @RequestBody NicknameUpdateDto updateDto) {
        System.out.println(authentication);
//        Claims claims = (Claims) authentication.getPrincipal();
        Tutor tutor = (Tutor) authentication.getPrincipal();
        System.out.println(tutor.getEmail());
//        String tutorEmail = TokenUtils.getTutorEmailFromToken(claims);
        return tutorService.updateNickname(tutor.getEmail(), updateDto);
    }

}
