package com.seosam.edusetpo.parent.controller;

import com.seosam.edusetpo.parent.entity.Parent;
import com.seosam.edusetpo.parent.repository.ParentRepository;
import com.seosam.edusetpo.tutor.entity.Tutor;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.List;

@RestController // JSON 형태 결괏값을 반환해줌(@ResponseBody 가 필요없음)
@RequiredArgsConstructor // final 객체를 Constructor Injection 해줌(Autowired 역할)
@RequestMapping("/parent")

public class ParentController {
    private final ParentRepository parentRepository;

    @GetMapping("parentList")
    public List<Parent> findAllParent() {
        return parentRepository.findAll();
    }

    @PostMapping("parent")
    public Parent signUp() {
        final Parent parent = Parent.builder()
                .email("sodjf1@gngn.12")
                .password("1111")
                .parentName("SYJ")
                .isWithdraw(false)
                .createdAt(LocalDate.now())
                .build();
        return parentRepository.save(parent);

    }
}
