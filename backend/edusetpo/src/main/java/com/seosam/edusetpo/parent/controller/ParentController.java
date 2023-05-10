package com.seosam.edusetpo.parent.controller;


import com.seosam.edusetpo.parent.dto.request.ChangePwdReqDto;
import com.seosam.edusetpo.parent.dto.request.LoginReqDto;
import com.seosam.edusetpo.parent.dto.request.SignUpReqDto;
import com.seosam.edusetpo.parent.repository.ParentRepository;
import com.seosam.edusetpo.parent.service.ParentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
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

    @GetMapping("email")
    public ResponseEntity<?> checkDuplicateEmail(@RequestParam String email) {
        return parentService.checkDuplicateEmail(email);
    }

    @PutMapping("withdraw")
    public ResponseEntity<?> withdrawParent(@RequestHeader("Authorization") String accessToken) {
        String tokenData = accessToken.split(" ")[1];
        return parentService.withdrawParent(tokenData);
    }

    @PutMapping("changePassword")
    public ResponseEntity<?> changePassword(@RequestHeader("Authorization") String accessToken,
                                            @RequestBody ChangePwdReqDto reqDto) {
        String tokenData = accessToken.split(" ")[1];
        return parentService.changePassword(tokenData, reqDto);
    }

    @GetMapping
    public ResponseEntity<?> getParentInfo(@RequestHeader("Authorization") String accessToken) {
        String tokenData = accessToken.split(" ")[1];
        return parentService.getParentInfo(tokenData);
    }
}
