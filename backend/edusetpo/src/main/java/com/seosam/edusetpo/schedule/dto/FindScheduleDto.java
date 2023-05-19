package com.seosam.edusetpo.schedule.dto;

import lombok.Data;

@Data
public class FindScheduleDto {
    private int day;
    private String startTime;
    private String endTime;
    private Long lessonId;
    private String lessonName;
}
