package com.seosam.edusetpo.grade.controller;

import com.seosam.edusetpo.grade.dto.GradeDto;
import com.seosam.edusetpo.grade.dto.GradeUpdateDto;
import com.seosam.edusetpo.grade.entity.Grade;
import com.seosam.edusetpo.grade.service.GradeService;
import com.seosam.edusetpo.model.BaseResponseBody;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("grade")
public class GradeController {
    private final GradeService gradeService;

    @PostMapping("")
    public ResponseEntity<?> createGrade(@RequestBody GradeDto gradeDto) {
        BaseResponseBody baseResponseBody;

        Optional<Long> optionalCreateGrade = gradeService.createGrade(gradeDto);
        if (optionalCreateGrade.isEmpty()) {
            baseResponseBody = BaseResponseBody.builder().message("fail").statusCode(400).build();
            return ResponseEntity.status(400).body(baseResponseBody);
        }

        baseResponseBody = BaseResponseBody.builder().message("success").statusCode(200).responseData(gradeDto).build();
        return ResponseEntity.status(200).body(baseResponseBody);
    }

    @GetMapping("category/{categoryId}")
    public ResponseEntity<?> findGradeByCategory(@PathVariable("categoryId") Long categoryId) {
        BaseResponseBody baseResponseBody;

        List<GradeDto> gradeDtoList = gradeService.findGradeByCategory(categoryId);
        if (gradeDtoList.isEmpty()) {
            baseResponseBody = BaseResponseBody.builder().message("fail").statusCode(400).build();
            return ResponseEntity.status(400).body(baseResponseBody);
        }
        baseResponseBody = BaseResponseBody.builder().message("success").statusCode(200).responseData(gradeDtoList).build();
        return ResponseEntity.status(200).body(baseResponseBody);
    }

    @GetMapping("/{studentClassId}")
    public ResponseEntity<?> findGradeByStudentClassId(@PathVariable("studentClassId") Long studentClassId) {
        BaseResponseBody baseResponseBody;

        List<GradeDto> gradeDtoList = gradeService.findGradeByStudentClassId(studentClassId);
        if (gradeDtoList.isEmpty()) {
            baseResponseBody = BaseResponseBody.builder().message("fail").statusCode(400).build();
            return ResponseEntity.status(400).body(baseResponseBody);
        }
        baseResponseBody = BaseResponseBody.builder().message("success").statusCode(200).responseData(gradeDtoList).build();
        return ResponseEntity.status(200).body(baseResponseBody);
    }

    @DeleteMapping("/{gradeId}")
    public void deleteGrade(@PathVariable("gradeId") Long gradeId) {
        gradeService.deleteGrade(gradeId);
    }

    @PutMapping("{gradeId}")
    public ResponseEntity<?> updateGrade(@PathVariable("gradeId") Long gradeId, GradeUpdateDto gradeUpdateDto) {
        BaseResponseBody baseResponseBody;

        if (gradeService.updateGrade(gradeId, gradeUpdateDto)) {
            baseResponseBody = BaseResponseBody.builder().message("success").statusCode(200).responseData(gradeUpdateDto).build();
            return ResponseEntity.status(200).body(baseResponseBody);
        }
        baseResponseBody = BaseResponseBody.builder().message("fail").statusCode(400).build();
        return ResponseEntity.status(400).body(baseResponseBody);
    }
}
