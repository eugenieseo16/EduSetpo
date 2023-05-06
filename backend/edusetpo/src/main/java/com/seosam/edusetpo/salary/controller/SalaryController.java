package com.seosam.edusetpo.salary.controller;

import com.seosam.edusetpo.model.BaseResponseBody;
import com.seosam.edusetpo.salary.dto.SalaryDto;
import com.seosam.edusetpo.salary.service.SalaryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletRequest;
import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/salary")
public class SalaryController {

    private final SalaryService salaryService;

    // create
    @PostMapping("create/{studentLessonId}")
    public ResponseEntity<?> addSalary(@PathVariable("studentLessonId") Long studentLessonId, @RequestBody SalaryDto salaryDto, ServletRequest request) {
        BaseResponseBody baseResponseBody;
        Long tutorId = 1L;

        Optional<Long> optionalSalaryDto = salaryService.addSalary(tutorId, studentLessonId, salaryDto);
        if (optionalSalaryDto.isEmpty()) {
            baseResponseBody = BaseResponseBody.builder().message("fail").statusCode(400).build();
            return ResponseEntity.status(400).body(baseResponseBody);
        }
        baseResponseBody = BaseResponseBody.builder().message("success").statusCode(200).responseData(salaryDto).build();
        return ResponseEntity.status(200).body(baseResponseBody);
    }

    // read
    @GetMapping("my/{tutorId}")
    public ResponseEntity<?> findAllSalary(@PathVariable("tutorId") Long tutorId ,ServletRequest request) {
        BaseResponseBody baseResponseBody;

        List<SalaryDto> salaryDtoList = salaryService.findAllSalary(tutorId);
        if (salaryDtoList.isEmpty()) {
            baseResponseBody = BaseResponseBody.builder().message("fail").statusCode(400).build();
            return ResponseEntity.status(400).body(baseResponseBody);
        }
        baseResponseBody = BaseResponseBody.builder().message("success").statusCode(200).responseData(salaryDtoList.listIterator()).build();
        return ResponseEntity.status(200).body(baseResponseBody);
    }

    @GetMapping("lesson/{studentLessonId}")
    public ResponseEntity<?> findAllSalaryByStudentLesson(@PathVariable("studentLessonId") Long studentLessonId) {
        BaseResponseBody baseResponseBody;

        List<SalaryDto> salaryDtoList = salaryService.findAllSalaryByStudentLesson(studentLessonId);
        if (salaryDtoList.isEmpty()) {
            baseResponseBody = BaseResponseBody.builder().message("fail").statusCode(400).build();
            return ResponseEntity.status(400).body(baseResponseBody);
        }
        baseResponseBody = BaseResponseBody.builder().message("success").statusCode(200).responseData(salaryDtoList.listIterator()).build();
        return ResponseEntity.status(200).body(baseResponseBody);
    }

    // update
    @PutMapping("toggle/{salaryId}")
    public ResponseEntity<?> toggleSalary(@PathVariable("salaryId") Long salaryId, @RequestBody Boolean isPaid, ServletRequest request) {
        BaseResponseBody baseResponseBody;
        Long tutorId = 1L;

        if (salaryService.toggleSalary(tutorId, salaryId, isPaid)) {
            baseResponseBody = BaseResponseBody.builder().message("success").statusCode(200).responseData(isPaid).build();
            return  ResponseEntity.status(200).body(baseResponseBody);
        }
        baseResponseBody = BaseResponseBody.builder().message("fail").statusCode(400).build();
        return ResponseEntity.status(400).body(baseResponseBody);
    }
}
