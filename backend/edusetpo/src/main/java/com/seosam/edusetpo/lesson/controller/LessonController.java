package com.seosam.edusetpo.lesson.controller;

import com.fasterxml.jackson.databind.ser.Serializers;
import com.seosam.edusetpo.lesson.dto.CreateLessonDto;
import com.seosam.edusetpo.lesson.entity.Lesson;
import com.seosam.edusetpo.lesson.service.LessonService;
import com.seosam.edusetpo.model.BaseResponseBody;
import com.seosam.edusetpo.schedule.entity.Schedule;
import com.seosam.edusetpo.schedule.service.ScheduleService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.Option;
import java.util.Optional;

@RestController
@RequestMapping("/api/lesson")
@Slf4j
@RequiredArgsConstructor
public class LessonController {

    private final LessonService lessonService;
    private final ScheduleService scheduleService;

    @ApiOperation(value = "수업 생성", notes = "정보를 입력하여 정기 수업을 생성")
    @PostMapping("")
    public ResponseEntity<?> lessonAdd(@RequestBody CreateLessonDto lessonDto) {
        BaseResponseBody baseResponseBody;

        Lesson lesson = (Lesson) lessonService.addLesson(lessonDto);

        baseResponseBody = BaseResponseBody.builder()
                .message("success").statusCode(200)
                .responseData(lesson).build();

        return ResponseEntity.status(200).body(baseResponseBody);
    }

    @ApiOperation(value="수업 조회", notes="수업 ID로 수업 상세 내용 조회")
    @GetMapping("/{tutorId}/{lessonId}")
    public ResponseEntity<?> lessonFind(@PathVariable Long tutorId, @PathVariable Long lessonId) {
        BaseResponseBody baseResponseBody;

        Optional<Lesson> lesson = (Optional<Lesson>) lessonService.findLesson(tutorId, lessonId);

        baseResponseBody = BaseResponseBody.builder()
                .message("success").statusCode(200)
                .responseData(lesson).build();

        return ResponseEntity.status(200).body(baseResponseBody);
    }

    @ApiOperation(value="수업 비활성화", notes="수업 ID로 수업 비활성화")
    @PutMapping("/deactivate/{tutorId}/{lessonId}")
    public ResponseEntity<?> lessonDeactivate(@PathVariable Long tutorId, @PathVariable Long lessonId) {
        BaseResponseBody baseResponseBody;

        Lesson lesson = (Lesson) lessonService.deactivateLesson(tutorId, lessonId);

        baseResponseBody = BaseResponseBody.builder()
                .message("success").statusCode(200)
                .responseData(lesson.isEnded()).build();

        return ResponseEntity.status(200).body(baseResponseBody);    }
}
