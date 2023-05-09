package com.seosam.edusetpo.gradeCategory.controller;

import com.seosam.edusetpo.gradeCategory.dto.GradeCategoryDto;
import com.seosam.edusetpo.gradeCategory.entity.GradeCategory;
import com.seosam.edusetpo.gradeCategory.service.GradeCategoryService;
import com.seosam.edusetpo.model.BaseResponseBody;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("grade/category")
public class GradeCategoryController {
    private final GradeCategoryService gradeCategoryService;

    @PostMapping("")
    public ResponseEntity<?> createGradeCategory(GradeCategoryDto gradeCategoryDto) {
        BaseResponseBody baseResponseBody;

        Optional<Long> optionalGradeCategory = gradeCategoryService.createGradeCategory(gradeCategoryDto);
        if (optionalGradeCategory.isEmpty()) {
            baseResponseBody = BaseResponseBody.builder().message("fail").statusCode(400).build();
            return ResponseEntity.status(400).body(baseResponseBody);
        }
        baseResponseBody = BaseResponseBody.builder().message("success").statusCode(200).responseData(optionalGradeCategory).build();
        return ResponseEntity.status(200).body(baseResponseBody);
    }

    @GetMapping("")
    public ResponseEntity<?> findGradeCategoryByTutorId() {
        BaseResponseBody baseResponseBody;

        // token에서 튜터 아이디 받아오기
        Long tutorId = 1L;
        List<GradeCategoryDto> optionalGradeCategory = gradeCategoryService.findGradeCategoryByTutorId(tutorId);
        if (optionalGradeCategory.isEmpty()) {
            baseResponseBody = BaseResponseBody.builder().message("fail").statusCode(400).build();
            return ResponseEntity.status(400).body(baseResponseBody);
        }
        baseResponseBody = BaseResponseBody.builder().message("success").statusCode(200).responseData(optionalGradeCategory).build();
        return ResponseEntity.status(200).body(baseResponseBody);
    }

    @DeleteMapping("/{gradeCategoryId}")
    public void deleteGradeCategory(@PathVariable("gradeCategoryId") Long gradeCategoryId) {
        gradeCategoryService.deleteGradeCategory(gradeCategoryId);
    }

}
