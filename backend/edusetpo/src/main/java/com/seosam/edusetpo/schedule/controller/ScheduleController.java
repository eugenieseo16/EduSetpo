package com.seosam.edusetpo.schedule.controller;

import com.seosam.edusetpo.schedule.dto.CreateScheduleDto;
import com.seosam.edusetpo.schedule.service.ScheduleService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/schedule")
public class ScheduleController {

    private final ScheduleService scheduleService;

    // @Valid : 이거 쓰면 내부 내용에 대해 형식 검증 같은 거 가능
    @PostMapping
    public ResponseEntity<?> scheduleAdd(@RequestBody CreateScheduleDto createScheduleDto) {
        return null;
    }
}
