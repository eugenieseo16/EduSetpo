package com.seosam.edusetpo.studentlesson.controller;

import com.seosam.edusetpo.model.BaseResponseBody;
import com.seosam.edusetpo.session.dto.SessionDto;
import com.seosam.edusetpo.studentlesson.entity.StudentLesson;
import com.seosam.edusetpo.studentlesson.service.StudentLessonService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/studentLesson")
public class StudentLessonController {

    private final StudentLessonService studentLessonService;

    // read
    @GetMapping("{studentLessonId}")
    public ResponseEntity<?> findStudentLesson(@PathVariable("studentLessonId") Long studentLessonId) {
        BaseResponseBody baseResponseBody;

        Optional<StudentLesson> optionalStudentLesson = studentLessonService.findStudentLesson(studentLessonId);
        if (optionalStudentLesson.isEmpty()) {
            baseResponseBody = BaseResponseBody.builder().message("fail").statusCode(400).build();
            return ResponseEntity.status(400).body(baseResponseBody);
        }
        baseResponseBody = BaseResponseBody.builder().message("success").statusCode(200).responseData(optionalStudentLesson.get()).build();
        return ResponseEntity.status(200).body(baseResponseBody);
    }

    // update
    @PutMapping("toggle")
    private ResponseEntity<?> toggleStudentLesson(@RequestBody Long studentId, @RequestBody Long lessonId ,@RequestBody Boolean isActive) {
        BaseResponseBody baseResponseBody;

        if (studentLessonService.toggleStudentLesson(studentId, lessonId, isActive)) {
            baseResponseBody = BaseResponseBody.builder().message("success").statusCode(200).responseData(new String[] {studentId.toString(), lessonId.toString(), isActive.toString()}).build();
            return  ResponseEntity.status(200).body(baseResponseBody);
        }
        baseResponseBody = BaseResponseBody.builder().message("fail").statusCode(400).build();
        return ResponseEntity.status(400).body(baseResponseBody);
    }
}
