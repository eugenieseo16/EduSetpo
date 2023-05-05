package com.seosam.edusetpo.session.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UpdateSessionDto {
    private String memo;
    private LocalDate actualDate;
    private LocalTime startTime;
    private LocalTime endTime;
    private Short duration;
    private Boolean isCompleted;
}
