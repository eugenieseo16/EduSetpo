package com.seosam.edusetpo.schedule.service;

import com.seosam.edusetpo.schedule.dto.CreateScheduleDto;

public interface ScheduleService {
    Long addSchedule(CreateScheduleDto createScheduleDto);
}
