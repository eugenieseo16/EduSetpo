package com.seosam.edusetpo.gradeCategory.controller;

import com.seosam.edusetpo.gradeCategory.dto.GradeCategoryAddDto;
import com.seosam.edusetpo.gradeCategory.dto.GradeCategoryDto;
import com.seosam.edusetpo.gradeCategory.entity.GradeCategory;
import com.seosam.edusetpo.gradeCategory.service.GradeCategoryService;
import com.seosam.edusetpo.model.BaseResponseBody;
import com.seosam.edusetpo.tutor.entity.Tutor;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("grade/category")
public class GradeCategoryController {
    private final GradeCategoryService gradeCategoryService;


    @PostMapping("")
    public ResponseEntity<?> createGradeCategory(GradeCategoryAddDto gradeCategoryAddDto, Authentication authentication) {
        BaseResponseBody baseResponseBody;

        Tutor tutor = (Tutor) authentication.getPrincipal();
        Long tutorId = tutor.getTutorId();

        Optional<Long> optionalGradeCategory = gradeCategoryService.createGradeCategory(gradeCategoryAddDto, tutorId);
        if (optionalGradeCategory.isEmpty()) {
            baseResponseBody = BaseResponseBody.builder().message("fail").statusCode(400).build();
            return ResponseEntity.status(400).body(baseResponseBody);
        }
        baseResponseBody = BaseResponseBody.builder().message("success").statusCode(200).responseData(optionalGradeCategory).build();
        return ResponseEntity.status(200).body(baseResponseBody);
    }

    @GetMapping("")
    public ResponseEntity<?> findGradeCategoryByTutorId( Authentication authentication) {
        BaseResponseBody baseResponseBody;

        Tutor tutor = (Tutor) authentication.getPrincipal();
        Long tutorId = tutor.getTutorId();

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
