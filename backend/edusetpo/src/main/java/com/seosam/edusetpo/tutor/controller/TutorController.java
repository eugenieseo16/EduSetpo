package com.seosam.edusetpo.tutor.controller;

import com.seosam.edusetpo.tutor.entity.Tutor;
import com.seosam.edusetpo.tutor.repository.TutorRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.List;

@RestController // JSON 형태 결괏값을 반환해줌(@ResponseBody 가 필요없음)
@RequiredArgsConstructor // final 객체를 Constructor Injection 해줌(Autowired 역할)
public class TutorController {

    private final TutorRepository tutorRepository;

    @GetMapping("/tutorList")
    public List<Tutor> findAllTutor() {
        return tutorRepository.findAll();
    }

    @PostMapping("/signUp")
    public Tutor signUp() {
        final Tutor tutor = Tutor.builder()
                .email("sodjf1@gngn.12")
                .password("1111")
                .name("SHY")
                .nickname("jack")
                .profileUrl("path")
                .isWithdraw(false)
                .themeIndex((short) 1)
                .createdAt(LocalDate.now())
                .build();
        return tutorRepository.save(tutor);

    }
}
