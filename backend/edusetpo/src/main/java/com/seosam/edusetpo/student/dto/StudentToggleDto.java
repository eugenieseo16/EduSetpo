package com.seosam.edusetpo.student.dto;

import lombok.*;

/**
 * A DTO for the {@link com.seosam.edusetpo.student.entity.Student} entity
 */
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class StudentToggleDto {
    private Long tutorId;
    private Boolean isActive;
}