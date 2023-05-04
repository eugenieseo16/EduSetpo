package com.seosam.edusetpo.schedule.service;

import com.seosam.edusetpo.schedule.dto.CreateScheduleDto;
import com.seosam.edusetpo.schedule.dto.ScheduleDto;
import com.seosam.edusetpo.schedule.entity.Schedule;
import com.seosam.edusetpo.schedule.repository.ScheduleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
//@RequiredArgsConstructor
public class ScheduleServiceImpl implements ScheduleService {

    private final ScheduleRepository scheduleRepository;

    public ScheduleServiceImpl(ScheduleRepository scheduleRepository) {
        this.scheduleRepository = scheduleRepository;
    }


    @Override
    public Long addSchedule(CreateScheduleDto createScheduleDto) {
        return null;
    }

    @Override
    public Optional<Long> addSchedule(Long userId, ScheduleDto scheduleDto) {
        // implementation logic goes here
        Schedule schedule = toEntity(scheduleDto);
        // set properties of the schedule object using values from the scheduleDto
        scheduleRepository.save(schedule);
        return Optional.of(schedule.getScheduleId());
    }
}
