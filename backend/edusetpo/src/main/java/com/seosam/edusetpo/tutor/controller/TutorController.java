package com.seosam.edusetpo.tutor.controller;

import com.seosam.edusetpo.tutor.dto.request.*;
import com.seosam.edusetpo.tutor.entity.Tutor;
import com.seosam.edusetpo.tutor.repository.TutorRepository;
import com.seosam.edusetpo.tutor.service.TutorService;
import org.springframework.http.ResponseEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;


@RestController // JSON 형태 결괏값을 반환해줌(@ResponseBody 가 필요없음)
@RequiredArgsConstructor // final 객체를 Constructor Injection 해줌(Autowired 역할)
@RequestMapping("tutor")
public class TutorController {

    private final TutorRepository tutorRepository;
    private final TutorService tutorService;

    @PostMapping("signup")
    public ResponseEntity<?> signUp(@RequestBody SignUpDto signUpDto) {
        return tutorService.signUpTutor(signUpDto);
    }

    @PostMapping("login")
    public ResponseEntity<?> logIn(@RequestBody LoginReqDto loginReqDto) {
        return tutorService.login(loginReqDto);
    }

    @PutMapping("nickname/update")
    public ResponseEntity<?> changeNickname(Authentication authentication, @RequestBody NicknameUpdateDto updateDto) {
        Tutor tutor = (Tutor) authentication.getPrincipal();
        return tutorService.updateNickname(tutor.getTutorId(), updateDto);
    }

    @GetMapping("email")
    public ResponseEntity<?> checkDuplicateEmail(@RequestParam String email) {
        return tutorService.checkDuplicateEmail(email);
    }

    @PutMapping("withdraw")
    public ResponseEntity<?> withdrawTutor(Authentication authentication) {
        Tutor tutor = (Tutor) authentication.getPrincipal();
        return tutorService.withdrawTutor(tutor.getEmail());
    }

    @PutMapping("password/update")
    public ResponseEntity<?> changePassword(Authentication authentication, @RequestBody ChangePwdReqDto changePwdReqDto) {
        Tutor tutor = (Tutor) authentication.getPrincipal();
        return tutorService.changePassword(tutor, changePwdReqDto);
    }

    @GetMapping("nickname")
    public ResponseEntity<?> checkDuplicateNickname(@RequestParam String nickname) {
        return tutorService.checkDuplicateNickname(nickname);
    }

    @GetMapping
    public ResponseEntity<?> getTutorInfo(Authentication authentication) {
        Tutor tutor = (Tutor) authentication.getPrincipal();
        return tutorService.getTutorInfo(tutor);
    }

    @PutMapping("profile-url")
    public ResponseEntity<?> changeProfileUrl(Authentication authentication, @RequestBody ChangeProfileReqDto reqDto) {
        Tutor tutor = (Tutor) authentication.getPrincipal();
        return tutorService.changeProfileUrl(tutor, reqDto);
    }

    @PutMapping("theme")
    public ResponseEntity<?> changeThemeColor(Authentication authentication, @RequestBody ChangeThemeReqDto reqDto) {
        Tutor tutor = (Tutor) authentication.getPrincipal();
        return tutorService.changeThemeColor(tutor, reqDto);
    }
}
