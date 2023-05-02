package com.seosam.edusetpo.student.dto;

import lombok.Data;

import java.io.Serializable;

/**
 * A DTO for the {@link com.seosam.edusetpo.student.entity.Student} entity
 */
@Data
public class StudentDto {
    private final Long tutorId;
    private final String studentName;
    private final String studentContact;
    private final String parentContact;
    private final Boolean isActive;
}