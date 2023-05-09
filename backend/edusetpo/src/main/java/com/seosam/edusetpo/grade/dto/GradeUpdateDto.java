package com.seosam.edusetpo.grade.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class GradeUpdateDto {
    private Long categoryId;
    private String examTitle;
    private Long score;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate examDate;
}
