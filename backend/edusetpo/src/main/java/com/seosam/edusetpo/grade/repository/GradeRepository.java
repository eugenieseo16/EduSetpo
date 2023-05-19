package com.seosam.edusetpo.grade.repository;

import com.seosam.edusetpo.grade.entity.Grade;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GradeRepository extends JpaRepository<Grade, Long> {
    List<Grade> findByCategoryId(Long categoryId);

    List<Grade> findByStudentLessonId(Long studentLessonId);
}
