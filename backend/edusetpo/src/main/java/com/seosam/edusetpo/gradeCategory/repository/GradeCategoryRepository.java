package com.seosam.edusetpo.gradeCategory.repository;

import com.seosam.edusetpo.gradeCategory.entity.GradeCategory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GradeCategoryRepository extends JpaRepository<GradeCategory, Long> {
    List<GradeCategory> findGradeCategoryByTutorId(Long tutorId);
}
