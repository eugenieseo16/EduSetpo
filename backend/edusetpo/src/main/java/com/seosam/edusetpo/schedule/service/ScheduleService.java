package com.seosam.edusetpo.schedule.service;

import com.seosam.edusetpo.schedule.dto.CreateScheduleDto;
import com.seosam.edusetpo.schedule.entity.Schedule;

import java.util.List;
import java.util.Map;

public interface ScheduleService {
    Long addSchedule(CreateScheduleDto createScheduleDto);

    // create
    Object addSchedule(List<List<String>> schedule, Long lessonId);

    // read

    Map<String, List<Object>> findSchedule(Long tutorId);

    // update
    Schedule modifySchedule(List<List<String>> schedules, Long lessonId);

}
