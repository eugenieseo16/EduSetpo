package com.seosam.edusetpo.tutor.controller;

import com.seosam.edusetpo.tutor.entity.Tutor;
import com.seosam.edusetpo.tutor.repository.TutorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.ui.Model;
import lombok.RequiredArgsConstructor;
import org.springframework.validation.Errors;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController // JSON 형태 결괏값을 반환해줌(@ResponseBody 가 필요없음)
@RequiredArgsConstructor // final 객체를 Constructor Injection 해줌(Autowired 역할)
@RequestMapping("/tutor")
public class TutorController {

    private final TutorRepository tutorRepository;
    private final SignUpFormValidator signUpFormValidator;
    private final PasswordEncoder passwordEncoder;

    @InitBinder("signUpForm")
    public void initBinder(WebDataBinder webDataBinder) {
        webDataBinder.addValidators(signUpFormValidator);
    }

    @GetMapping("tutorList")
    public List<Tutor> findAllTutor() {
        return tutorRepository.findAll();
    }

    @PostMapping("signup")
    public Tutor signUpSubmit(@Valid SignUpForm signUpForm, Errors errors) {
        if (errors.hasErrors()) {
            System.out.println("errors!!!!!!!!!!!!!!!!!!");
            System.out.println(errors);
            return null;
        }

        String newPassword = passwordEncoder.encode(signUpForm.getPassword());

        String nickName = signUpForm.getNickname();

        // 닉네임을 입력하지 않은 경우 : 이름과 동일하게 만들어주기
        if (nickName.equals("")) {
            nickName = signUpForm.getName();
        }


        Tutor tutor = Tutor.builder()
                .email(signUpForm.getEmail())
                .name(signUpForm.getName())
                .password(newPassword)
                .nickname(nickName)
                .profileUrl("https://www.url.com")
                .isWithdraw(false)
                .themeIndex((short) 1)
                .createdAt(LocalDate.now())
                .isAuthenticated(false)
                .build();



        return tutorRepository.save(tutor);
    }

}
