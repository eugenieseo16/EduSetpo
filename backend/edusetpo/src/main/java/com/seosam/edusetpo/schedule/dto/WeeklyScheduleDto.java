package com.seosam.edusetpo.schedule.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Time;
import java.time.LocalTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class WeeklyScheduleDto {

    private Long lessonId;
    private String lessonName;
    private LocalTime startTime;
    private LocalTime endTime;

}
