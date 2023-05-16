package com.seosam.edusetpo.grade.service;

import com.seosam.edusetpo.grade.dto.GradeDto;
import com.seosam.edusetpo.grade.dto.GradeUpdateDto;
import com.seosam.edusetpo.grade.entity.Grade;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface GradeService {
    // Create
    Optional<Long> createGrade(GradeDto gradeDto);

    //Read
    List<GradeDto> findGradeByCategory(Long categoryId);

    List<GradeDto> findGradeByStudentLessonId(Long studentLessonId);

    // Update
    boolean updateGrade(Long gradeId, GradeUpdateDto gradeUpdateDto);

    // Delete
    void deleteGrade(Long gradeId);

    default Grade toEntity(GradeDto gradeDto) {
        return Grade.builder()
                .categoryId(gradeDto.getCategoryId())
                .studentLessonId(gradeDto.getStudentLessonId())
                .examTitle(gradeDto.getExamTitle())
                .score(gradeDto.getScore())
                .examDate(gradeDto.getExamDate())
                .createdAt(LocalDateTime.now())
                .build();
    }

    default GradeDto toResponseDto(Grade grade) {
        return GradeDto.builder()
                .score(grade.getScore())
                .categoryId(grade.getCategoryId())
                .examTitle(grade.getExamTitle())
                .examDate(grade.getExamDate())
                .studentLessonId(grade.getStudentLessonId())
                .build();
    }
}
