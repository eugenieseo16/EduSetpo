package com.seosam.edusetpo.session.controller;

import com.seosam.edusetpo.model.BaseResponseBody;
import com.seosam.edusetpo.session.dto.SessionDto;
import com.seosam.edusetpo.session.dto.SessionLogDto;
import com.seosam.edusetpo.session.entity.SessionLog;
import com.seosam.edusetpo.session.service.SessionLogService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RequiredArgsConstructor
@RestController
@RequestMapping("/session")
public class SessionLogController {

    private final SessionLogService sessionLogService;

    public ResponseEntity<?> addSessionLog(Long sessionId, @RequestBody SessionLogDto sessionLogDto) {
        BaseResponseBody baseResponseBody;

        Optional<Long> optionalSessionLog = sessionLogService.addSessionLog(sessionId, sessionLogDto);
        if (optionalSessionLog.isEmpty()) {
            baseResponseBody = BaseResponseBody.builder().message("fail").statusCode(400).build();
            return ResponseEntity.status(400).body(baseResponseBody);
        }
        baseResponseBody = BaseResponseBody.builder().message("success").statusCode(200).responseData(sessionLogDto).build();
        return ResponseEntity.status(200).body(baseResponseBody);
    }
}
