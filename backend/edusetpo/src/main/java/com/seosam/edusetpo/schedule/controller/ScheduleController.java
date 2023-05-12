package com.seosam.edusetpo.schedule.controller;

import com.seosam.edusetpo.model.BaseResponseBody;
import com.seosam.edusetpo.schedule.dto.WeeklyScheduleDto;
import com.seosam.edusetpo.schedule.service.ScheduleService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/schedule")
public class ScheduleController {

    private final ScheduleService scheduleService;

    @ApiOperation(value="정기일정 조회", notes="강사id로 일주일 정기일정 조회")
    @GetMapping("/{tutorId}")
    public ResponseEntity<?> scheduleFind(@PathVariable Long tutorId) {
        BaseResponseBody baseResponseBody;

        Map<String, List<WeeklyScheduleDto>> findSchedules = scheduleService.findScheduleByTutorId(tutorId);

        baseResponseBody = BaseResponseBody.builder()
                .message("success").statusCode(200)
                .responseData(findSchedules).build();

        return ResponseEntity.status(200).body(baseResponseBody);
    }


}
