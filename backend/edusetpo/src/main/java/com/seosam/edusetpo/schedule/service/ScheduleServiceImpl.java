package com.seosam.edusetpo.schedule.service;

import com.seosam.edusetpo.schedule.dto.CreateScheduleDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ScheduleServiceImpl implements ScheduleService {


    @Override
    public Long addSchedule(CreateScheduleDto createScheduleDto) {
        // 스케줄 엔티티 만들어서 DB에 저장

        // 수업-

        return null;
    }
}
