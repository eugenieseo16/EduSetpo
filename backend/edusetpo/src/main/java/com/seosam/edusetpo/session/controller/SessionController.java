package com.seosam.edusetpo.session.controller;

import com.seosam.edusetpo.model.BaseResponseBody;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController // JSON 형태 결괏값을 반환해줌(@ResponseBody 가 필요없음)
@RequiredArgsConstructor // final 객체를 Constructor Injection 해줌(Autowired 역할)
@RequestMapping("/session")
public class SessionController {

    // create
//    @PostMapping("create")
//    public ResponseEntity<?> createSession(Long studentLessonId) {
//        BaseResponseBody baseResponseBody;
//
//
//
//    }

}
