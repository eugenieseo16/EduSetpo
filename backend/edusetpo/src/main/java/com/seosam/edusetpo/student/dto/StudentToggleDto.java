package com.seosam.edusetpo.student.dto;

import lombok.Data;

/**
 * A DTO for the {@link com.seosam.edusetpo.student.entity.Student} entity
 */
@Data
public class StudentToggleDto {
    private final Long tutorId;
    private final Boolean isActive;
}