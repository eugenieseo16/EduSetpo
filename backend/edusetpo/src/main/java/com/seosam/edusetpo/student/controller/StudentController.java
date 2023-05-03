package com.seosam.edusetpo.student.controller;

import com.seosam.edusetpo.model.BaseResponseBody;
import com.seosam.edusetpo.student.dto.StudentDto;
import com.seosam.edusetpo.student.dto.StudentToggleDto;
import com.seosam.edusetpo.student.dto.StudentUpdateDto;
import com.seosam.edusetpo.student.repository.StudentRepository;
import com.seosam.edusetpo.student.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.Servlet;
import javax.servlet.ServletRequest;
import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/student")
public class StudentController {
    private final StudentService studentService;

    @GetMapping("{studentId}")
    public ResponseEntity<?> findStudent(@PathVariable("studentId") Long studentId) {
        BaseResponseBody baseResponseBody;

        // 마찬가지로 토큰으로넘어온 값과 비교해야함
        Optional<StudentDto> optionalStudentDto = studentService.findStudent(studentId);
        if (optionalStudentDto.isEmpty()) {
            baseResponseBody = BaseResponseBody.builder().message("fail").statusCode(400).build();
            return ResponseEntity.status(400).body(baseResponseBody);
        }
        baseResponseBody = BaseResponseBody.builder().message("success").statusCode(200).responseData(optionalStudentDto.get()).build();
        return ResponseEntity.status(200).body(baseResponseBody);
    }

    @GetMapping("studentList/tutor/{tutorId}")
    public ResponseEntity<?> findAllStudentByTutor(@PathVariable("tutorId") Long tutorId) {
        BaseResponseBody baseResponseBody;

        String who = "tutor";
        List<StudentDto> studentDtoList = studentService.findAllStudent(tutorId, who);
        if (studentDtoList.isEmpty()) {
            baseResponseBody = BaseResponseBody.builder().message("fail").statusCode(400).build();
            return ResponseEntity.status(400).body(baseResponseBody);
        }
        baseResponseBody = BaseResponseBody.builder().message("success").statusCode(200).responseData(studentDtoList.listIterator()).build();
        return ResponseEntity.status(200).body(baseResponseBody);
    }

//    @GetMapping("studentList/parent")
//    public ResponseEntity<?> findAllStudentByParent(HttpServletRequest request, StudentDto studentDto) {
//
//        return null;
//    }

    @PostMapping("create")
    public ResponseEntity<?> createStudent(@RequestBody StudentDto studentDto) {
//        Long tutorId = request.getHeader() // Jwt 토큰 설정 시 변경될 예정
        BaseResponseBody baseResponseBody;
        Long tutorId = new Long(6);

        Optional<Long> optionalCreateDiary = studentService.createStudent(tutorId, studentDto);
        if (optionalCreateDiary.isEmpty()) {
            baseResponseBody = BaseResponseBody.builder().message("fail").statusCode(400).build();
            return ResponseEntity.status(400).body(baseResponseBody);
        }
        baseResponseBody = BaseResponseBody.builder().message("success").statusCode(200).responseData(studentDto).build();
        return ResponseEntity.status(200).body(baseResponseBody);
    }

    @PutMapping("{studentId}")
    public ResponseEntity<?> updateStudent(@PathVariable("studentId") Long studentId, StudentUpdateDto studentUpdateDto) {
        // 토큰 바탕으로 튜터 id 추출해서 타겟Id랑 비교하는 조건문 추가해야함
        Long targetId = studentUpdateDto.getTutorId();
        BaseResponseBody baseResponseBody;

        if (studentService.updateStudent(studentId, studentUpdateDto)) {
            baseResponseBody = BaseResponseBody.builder().message("success").statusCode(200).responseData(studentUpdateDto).build();
            return  ResponseEntity.status(200).body(baseResponseBody);
        }
        baseResponseBody = BaseResponseBody.builder().message("fail").statusCode(400).build();
        return ResponseEntity.status(400).body(baseResponseBody);
    }

    @PutMapping("toggle/{studentId}")
    public ResponseEntity<?> toggleStudent(@PathVariable Long studentId, StudentToggleDto studentToggleDto) {
        // 토큰 바탕으로 튜터 id 추출해서 타겟Id랑 비교하는 조건문 추가해야함
        Long targetId = studentToggleDto.getTutorId();
        BaseResponseBody baseResponseBody;

        if (studentService.toggleStudent(studentId, studentToggleDto)) {
            baseResponseBody = BaseResponseBody.builder().message("success").statusCode(200).responseData(studentToggleDto).build();
            return  ResponseEntity.status(200).body(baseResponseBody);
        }
        baseResponseBody = BaseResponseBody.builder().message("fail").statusCode(400).build();
        return ResponseEntity.status(400).body(baseResponseBody);
    }
}
