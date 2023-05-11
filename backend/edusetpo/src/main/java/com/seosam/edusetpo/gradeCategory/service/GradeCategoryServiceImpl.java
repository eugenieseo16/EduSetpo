package com.seosam.edusetpo.gradeCategory.service;

import com.seosam.edusetpo.grade.repository.GradeRepository;
import com.seosam.edusetpo.gradeCategory.dto.GradeCategoryDto;
import com.seosam.edusetpo.gradeCategory.entity.GradeCategory;
import com.seosam.edusetpo.gradeCategory.repository.GradeCategoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class GradeCategoryServiceImpl implements GradeCategoryService {
    private final GradeCategoryRepository gradeCategoryRepository;

    public GradeCategoryServiceImpl(GradeCategoryRepository gradeCategoryRepository) {
        this.gradeCategoryRepository = gradeCategoryRepository;
    }

    @Override
    public Optional<Long> createGradeCategory(GradeCategoryDto gradeCategoryDto) {
        GradeCategory gradeCategory = toEntity(gradeCategoryDto);
        gradeCategoryRepository.save(gradeCategory);
        return Optional.of(gradeCategory.getGradeCategoryId());
    }

    @Override
    public List<GradeCategoryDto> findGradeCategoryByTutorId(Long tutorId) {
        List<GradeCategory> gradeCategoryList = gradeCategoryRepository.findGradeCategoryByTutorId(tutorId);
        return gradeCategoryList.stream().map(this::toResponseDto).collect(Collectors.toList());

    }

    @Override
    public void deleteGradeCategory(Long gradeCategoryId) {
        gradeCategoryRepository.deleteById(gradeCategoryId);
    }

}
