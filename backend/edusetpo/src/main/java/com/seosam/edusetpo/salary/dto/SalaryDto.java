package com.seosam.edusetpo.salary.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SalaryDto {
    private Long studentLessonId;
    private Integer salary;
    private Short sumTime;
    private Boolean isPaid;
}
