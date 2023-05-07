package com.seosam.edusetpo.session.controller;

import com.seosam.edusetpo.model.BaseResponseBody;
import com.seosam.edusetpo.session.dto.SessionDto;
import com.seosam.edusetpo.session.dto.ToggleSessionDto;
import com.seosam.edusetpo.session.dto.UpdateSessionDto;
import com.seosam.edusetpo.session.entity.Session;
import com.seosam.edusetpo.session.service.SessionService;
import com.seosam.edusetpo.tutor.entity.Tutor;
import com.seosam.edusetpo.tutor.repository.TutorRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletRequest;
import javax.servlet.http.HttpServletRequest;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

@RestController // JSON 형태 결괏값을 반환해줌(@ResponseBody 가 필요없음)
@RequiredArgsConstructor // final 객체를 Constructor Injection 해줌(Autowired 역할)
@RequestMapping("/session")
public class SessionController {

    private final SessionService sessionService;

    // create
    @PostMapping("create")
    public ResponseEntity<?> addSession(@RequestBody SessionDto sessionDto, ServletRequest request) {
        BaseResponseBody baseResponseBody;
        Long tutorId = 1L;
        Long studentLessonId = 1L;
        System.out.println("@@@@" + sessionDto);
        Optional<Long> optionalSessionId = sessionService.addSession(tutorId, studentLessonId, sessionDto);
        if (optionalSessionId.isEmpty()) {
            baseResponseBody = BaseResponseBody.builder().message("fail").statusCode(400).build();
            return ResponseEntity.status(400).body(baseResponseBody);
        }
        baseResponseBody = BaseResponseBody.builder().message("success").statusCode(200).responseData(sessionDto).build();
        return ResponseEntity.status(200).body(baseResponseBody);

    }

    // read
    @GetMapping("detail/{sessionId}")
    public ResponseEntity<?> findSession(@PathVariable("sessionId") Long sessionId, ServletRequest request) {
        Long tutorId = 1L;
        Long studentLessonId = 1L;

        BaseResponseBody baseResponseBody;

        Optional<SessionDto> optionalSession = sessionService.findSession(sessionId);
        if (optionalSession.isEmpty()) {
            baseResponseBody = BaseResponseBody.builder().message("fail").statusCode(400).build();
            return ResponseEntity.status(400).body(baseResponseBody);
        }
        baseResponseBody = BaseResponseBody.builder().message("success").statusCode(200).responseData(optionalSession.get()).build();
        return ResponseEntity.status(200).body(baseResponseBody);
    }

    @GetMapping("list/studentLessonId/{studentLessonId}")
    public ResponseEntity<?> findAllSessionByStudentLesson(@PathVariable("studentLessonId") Long studentLessonId) {
        BaseResponseBody baseResponseBody;
        List<SessionDto> sessionList = sessionService.findAllSessionByStudentLesson(studentLessonId);
        if (sessionList.isEmpty()) {
            baseResponseBody = BaseResponseBody.builder().message("fail").statusCode(400).build();
            return ResponseEntity.status(400).body(baseResponseBody);
        }
        baseResponseBody = BaseResponseBody.builder().message("success").statusCode(200).responseData(sessionList.listIterator()).build();
        return ResponseEntity.status(200).body(baseResponseBody);
    }

    @GetMapping("list/actualDate/{actualDate}")
    public ResponseEntity<?> findAllSessionByActualDate(@PathVariable("actualDate") String input) {
        BaseResponseBody baseResponseBody;
        LocalDate actualDate = LocalDate.parse(input, DateTimeFormatter.ISO_DATE);
        Long tutorId = 1L;
        List<SessionDto> sessionList = sessionService.findAllSessionByActualDate(tutorId, actualDate);
        if (sessionList.isEmpty()) {
            baseResponseBody = BaseResponseBody.builder().message("fail").statusCode(400).build();
            return ResponseEntity.status(400).body(baseResponseBody);
        }
        baseResponseBody = BaseResponseBody.builder().message("success").statusCode(200).responseData(sessionList.listIterator()).build();
        return ResponseEntity.status(200).body(baseResponseBody);
    }
    // update
    @PutMapping("detail/{sessionId}")
    public ResponseEntity<?> updateSession(@PathVariable("sessionId") Long sessionId, @RequestBody UpdateSessionDto updateSessionDto) {
        BaseResponseBody baseResponseBody;
        if (sessionService.updateSession(sessionId, updateSessionDto)) {
            baseResponseBody = BaseResponseBody.builder().message("success").statusCode(200).responseData(updateSessionDto).build();
            return  ResponseEntity.status(200).body(baseResponseBody);
        }
        baseResponseBody = BaseResponseBody.builder().message("fail").statusCode(400).build();
        return ResponseEntity.status(400).body(baseResponseBody);
    }

    @PutMapping("detail/toggle/{sessionId}")
    public ResponseEntity<?> toggleSession(@PathVariable("sessionId") Long sessionId, @RequestBody ToggleSessionDto toggleSessionDto) {
        BaseResponseBody baseResponseBody;

        if (sessionService.toggleSession(sessionId, toggleSessionDto)) {
            baseResponseBody = BaseResponseBody.builder().message("success").statusCode(200).responseData(toggleSessionDto).build();
            return  ResponseEntity.status(200).body(baseResponseBody);
        }
        baseResponseBody = BaseResponseBody.builder().message("fail").statusCode(400).build();
        return ResponseEntity.status(400).body(baseResponseBody);
    }
}
