package com.seosam.edusetpo.grade.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class GradeDto {
    private Long gradeId;
    private Long categoryId;
    private Long studentLessonId;
    private String examTitle;
    private Long score;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate examDate;
    private LocalDateTime createdAt;

}
