package com.seosam.edusetpo.studentlesson.controller;

import com.seosam.edusetpo.lesson.entity.Lesson;
import com.seosam.edusetpo.model.BaseResponseBody;
import com.seosam.edusetpo.session.dto.SessionDto;
import com.seosam.edusetpo.student.entity.Student;
import com.seosam.edusetpo.studentlesson.dto.StudentLessonDto;
import com.seosam.edusetpo.studentlesson.entity.StudentLesson;
import com.seosam.edusetpo.studentlesson.service.StudentLessonService;
import com.seosam.edusetpo.tutor.entity.Tutor;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/student-lesson")
public class StudentLessonController {

    private final StudentLessonService studentLessonService;

    // read
    @GetMapping("{studentLessonId}")
    public ResponseEntity<?> findStudentLesson(@PathVariable("studentLessonId") Long studentLessonId) {
        BaseResponseBody baseResponseBody;

        // studentLessonId가 존재하면 200 상태 코드와 "Found" 메시지를, 존재하지 않으면 404 상태 코드와 "Not found" 메시지를 반환으로 변경했습니다
        // children 추가 POST요청 보내기 전에 확인할거라서!
        Optional<StudentLesson> optionalStudentLesson = studentLessonService.findStudentLesson(studentLessonId);
        if (optionalStudentLesson.isEmpty()) {
            baseResponseBody = BaseResponseBody.builder().message("Not found").statusCode(404).build();
            return ResponseEntity.status(404).body(baseResponseBody);
        }
        baseResponseBody = BaseResponseBody.builder().message("Found").statusCode(200).responseData(optionalStudentLesson.get()).build();
        return ResponseEntity.status(200).body(baseResponseBody);
    }

    @GetMapping("list/studentId")
    private ResponseEntity<?> findStudentLessonByStudentId(@RequestParam Long studentId, @RequestParam Boolean isLessonList) {
        BaseResponseBody baseResponseBody;
        if (isLessonList) {
            List<Lesson> studentLessonList = studentLessonService.findAllLessonByStudent(studentId);
            if (studentLessonList.isEmpty()) {
                baseResponseBody = BaseResponseBody.builder().message("fail").statusCode(400).build();
                return ResponseEntity.status(400).body(baseResponseBody);
            }
            baseResponseBody = BaseResponseBody.builder().message("success").statusCode(200).responseData(studentLessonList).build();
            return  ResponseEntity.status(200).body(baseResponseBody);
        } else {
            List<StudentLessonDto> studentLessonDtoList = studentLessonService.findAllDtoByStudentId(studentId);
            if (studentLessonDtoList.isEmpty()) {
                baseResponseBody = BaseResponseBody.builder().message("fail").statusCode(400).build();
                return ResponseEntity.status(400).body(baseResponseBody);
            }
            baseResponseBody = BaseResponseBody.builder().message("success").statusCode(200).responseData(studentLessonDtoList).build();
            return  ResponseEntity.status(200).body(baseResponseBody);
        }
    }
    @GetMapping("list/lessonId")
    private ResponseEntity<?> findStudentLessonByLessonId(@RequestParam Long lessonId) {
        BaseResponseBody baseResponseBody;
        List<Student> studentLessonList = studentLessonService.findAllStudentByLesson(lessonId);
        if (studentLessonList.isEmpty()) {
            baseResponseBody = BaseResponseBody.builder().message("fail").statusCode(400).build();
            return ResponseEntity.status(400).body(baseResponseBody);
        }
        baseResponseBody = BaseResponseBody.builder().message("success").statusCode(200).responseData(studentLessonList).build();
        return  ResponseEntity.status(200).body(baseResponseBody);
    }

    // update
    @PutMapping("toggle")
    private ResponseEntity<?> toggleStudentLesson(@RequestBody Long studentId, @RequestBody Long lessonId ,@RequestBody Boolean isActive, Authentication authentication) {
        BaseResponseBody baseResponseBody;
        Tutor tutor = (Tutor) authentication.getPrincipal();
        Long tutorId = tutor.getTutorId();

        if (studentLessonService.toggleStudentLesson(studentId, lessonId, isActive)) {
            baseResponseBody = BaseResponseBody.builder().message("success").statusCode(200).responseData(new String[] {studentId.toString(), lessonId.toString(), isActive.toString()}).build();
            return  ResponseEntity.status(200).body(baseResponseBody);
        }
        baseResponseBody = BaseResponseBody.builder().message("fail").statusCode(400).build();
        return ResponseEntity.status(400).body(baseResponseBody);
    }
}
