package com.seosam.edusetpo.schedule.controller;

import com.seosam.edusetpo.model.BaseResponseBody;
import com.seosam.edusetpo.schedule.dto.CreateScheduleDto;
import com.seosam.edusetpo.schedule.service.ScheduleService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/schedule")
public class ScheduleController {

    private final ScheduleService scheduleService;

    // @Valid : 이거 쓰면 내부 내용에 대해 형식 검증 같은 거 가능
    @ApiOperation(value = "", notes = "")
    @PostMapping
    public ResponseEntity<?> scheduleAdd(@RequestBody CreateScheduleDto createScheduleDto) {
//        Long tutorId = request.getHeader() // Jwt 토큰 설정 시 변경될 예정
        Long tutorId = new Long(6);

        BaseResponseBody baseResponseBody;

        return null;
    }
}
