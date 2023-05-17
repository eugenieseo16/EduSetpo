package com.seosam.edusetpo.student.controller;

import com.seosam.edusetpo.model.BaseResponseBody;
import com.seosam.edusetpo.student.dto.StudentDto;
import com.seosam.edusetpo.student.dto.StudentResponseDto;
import com.seosam.edusetpo.student.dto.StudentToggleDto;
import com.seosam.edusetpo.student.dto.StudentUpdateDto;
import com.seosam.edusetpo.student.repository.StudentRepository;
import com.seosam.edusetpo.student.service.StudentService;
import com.seosam.edusetpo.tutor.entity.Tutor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
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

    @PostMapping("create")
    public ResponseEntity<?> createStudent(@RequestBody StudentDto studentDto, Authentication authentication) {
        BaseResponseBody baseResponseBody;
        Tutor tutor = (Tutor) authentication.getPrincipal();
        Long tutorId = tutor.getTutorId();

        Optional<Long> optionalCreateDiary = studentService.createStudent(tutorId, studentDto);
        if (optionalCreateDiary.isEmpty()) {
            baseResponseBody = BaseResponseBody.builder().message("fail").statusCode(400).build();
            return ResponseEntity.status(400).body(baseResponseBody);
        }
        baseResponseBody = BaseResponseBody.builder().message("success").statusCode(200).responseData(studentDto).build();
        return ResponseEntity.status(200).body(baseResponseBody);
    }

    @GetMapping("{studentId}")
    public ResponseEntity<?> findStudent(@PathVariable("studentId") Long studentId) {
        BaseResponseBody baseResponseBody;

        Optional<StudentResponseDto> optionalStudentDto = studentService.findStudent(studentId);
        if (optionalStudentDto.isPresent()) {
            baseResponseBody = BaseResponseBody.builder().message("success").statusCode(200).responseData(optionalStudentDto.get()).build();
            return ResponseEntity.status(200).body(baseResponseBody);
        }
        baseResponseBody = BaseResponseBody.builder().message("fail").statusCode(400).build();
        return ResponseEntity.status(400).body(baseResponseBody);

    }

    @GetMapping("student-list/tutor")
    public ResponseEntity<?> findAllStudentByTutor(Authentication authentication) {
        BaseResponseBody baseResponseBody;
        Tutor tutor = (Tutor) authentication.getPrincipal();
        Long tutorId = tutor.getTutorId();

        String who = "tutor";
        List<StudentResponseDto> studentDtoList = studentService.findAllStudent(tutorId, who);
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



    @PutMapping("{studentId}")
    public ResponseEntity<?> updateStudent(@PathVariable("studentId") Long studentId,@RequestBody StudentUpdateDto studentUpdateDto, Authentication authentication) {
        Tutor tutor = (Tutor) authentication.getPrincipal();
        Long tutorId = tutor.getTutorId();
        Long targetId = studentUpdateDto.getTutorId();
        BaseResponseBody baseResponseBody;

        if (studentService.updateStudent(studentId, studentUpdateDto) && tutorId.equals(targetId)) {
            baseResponseBody = BaseResponseBody.builder().message("success").statusCode(200).responseData(studentUpdateDto).build();
            return  ResponseEntity.status(200).body(baseResponseBody);
        }
        baseResponseBody = BaseResponseBody.builder().message("fail").statusCode(400).build();
        return ResponseEntity.status(400).body(baseResponseBody);
    }

    @PutMapping("toggle/{studentId}")
    public ResponseEntity<?> toggleStudent(@PathVariable Long studentId, StudentToggleDto studentToggleDto, Authentication authentication
    ) {
        Tutor tutor = (Tutor) authentication.getPrincipal();
        Long tutorId = tutor.getTutorId();
        Long targetId = studentToggleDto.getTutorId();
        BaseResponseBody baseResponseBody;

        if (studentService.toggleStudent(studentId, studentToggleDto) && tutorId.equals(targetId)) {
            baseResponseBody = BaseResponseBody.builder().message("success").statusCode(200).responseData(studentToggleDto).build();
            return  ResponseEntity.status(200).body(baseResponseBody);
        }
        baseResponseBody = BaseResponseBody.builder().message("fail").statusCode(400).build();
        return ResponseEntity.status(400).body(baseResponseBody);
    }

}
