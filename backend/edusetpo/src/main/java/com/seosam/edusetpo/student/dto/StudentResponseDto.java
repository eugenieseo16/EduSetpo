package com.seosam.edusetpo.student.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class StudentResponseDto {
    private Long studentId;
    private Long tutorId;
    private String studentName;
    private String studentContact;
    private String parentContact;
    private Boolean isActive;
}
