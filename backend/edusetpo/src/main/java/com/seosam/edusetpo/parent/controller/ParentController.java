package com.seosam.edusetpo.parent.controller;


import com.seosam.edusetpo.parent.dto.request.LoginReqDto;
import com.seosam.edusetpo.parent.dto.request.NameUpdateDto;
import com.seosam.edusetpo.parent.dto.request.SignUpReqDto;
import com.seosam.edusetpo.parent.entity.Parent;
import com.seosam.edusetpo.parent.repository.ParentRepository;
import com.seosam.edusetpo.parent.service.ParentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/parent")
public class ParentController {

    private final ParentRepository parentRepository;
    private final ParentService parentService;

    @PostMapping("signup")
    public ResponseEntity<?> signUp(@RequestBody SignUpReqDto signUpReqDto) {
        return parentService.signUpParent(signUpReqDto);
    }

    @PostMapping("login")
    public ResponseEntity<?> login(@RequestBody LoginReqDto loginReqDto) {
        return parentService.login(loginReqDto);
    }

    @PutMapping("changeName")
    public ResponseEntity<?> changeName(Authentication authentication, @RequestBody NameUpdateDto updateDto) {
        Parent parent = (Parent) authentication.getPrincipal();
        return parentService.changeName(parent.getEmail(), updateDto);
    }
}
