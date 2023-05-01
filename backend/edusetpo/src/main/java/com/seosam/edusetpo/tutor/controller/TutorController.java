package com.seosam.edusetpo.tutor.controller;

import com.seosam.edusetpo.tutor.entity.Tutor;
import com.seosam.edusetpo.tutor.repository.TutorRepository;
import org.springframework.ui.Model;
import lombok.RequiredArgsConstructor;
import org.springframework.validation.Errors;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.time.LocalDate;
import java.util.List;

@RestController // JSON 형태 결괏값을 반환해줌(@ResponseBody 가 필요없음)
@RequiredArgsConstructor // final 객체를 Constructor Injection 해줌(Autowired 역할)
@RequestMapping("/tutor")
public class TutorController {

    private final TutorRepository tutorRepository;

    private final SignUpFormValidator signUpFormValidator;

    @InitBinder("signUpForm")
    public void initBinder(WebDataBinder webDataBinder) {
        webDataBinder.addValidators(signUpFormValidator);
    }

    @GetMapping("tutorList")
    public List<Tutor> findAllTutor() {
        return tutorRepository.findAll();
    }

    @PostMapping("/signup")
//    public Tutor signUp() {
//        final Tutor tutor = Tutor.builder()
//                .email("sodjf1@gngn.12")
//                .password("1111")
//                .name("SHY")
//                .nickname("jack")
//                .profileUrl("path")
//                .isWithdraw(false)
//                .themeIndex((short) 1)
//                .createdAt(LocalDate.now())
//                .build();
//        return tutorRepository.save(tutor);
//    }
    public Tutor signUpSubmit(@Valid SignUpForm signUpForm, Errors errors) {
        if (errors.hasErrors()) {
            return null;
        }

        Tutor tutor = Tutor.builder()
                .email(signUpForm.getEmail())
                .name(signUpForm.getName())
                .password(signUpForm.getPassword())
                .nickname("빽짱")
                .profileUrl("https://www.url.com")
                .isWithdraw(false)
                .themeIndex((short) 1)
                .createdAt(LocalDate.now())
                .build();

//        Tutor newTutor = tutorRepository.save(tutor);

        return tutorRepository.save(tutor);
    }

    @GetMapping("/signuptest")
    public String signUpForm(Model model) {
        return "account/sign-up";
    }

}
