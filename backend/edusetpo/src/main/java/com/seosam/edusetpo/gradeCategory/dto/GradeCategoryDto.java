package com.seosam.edusetpo.gradeCategory.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class GradeCategoryDto {
    private Long gradeCategoryId;
    private String category;
}
