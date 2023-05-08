package com.seosam.edusetpo.schedule.dto;

import lombok.Data;

import java.util.List;

@Data
public class CreateScheduleDto {
    private Long tutorId;
    private String classTitle;
    private List<ScheduleDto> schedule;
    private List<Integer> tags;
    private Integer sessionNum;
    private String startDay;
    private List<Integer> students;
    private Long lessonId;
}
