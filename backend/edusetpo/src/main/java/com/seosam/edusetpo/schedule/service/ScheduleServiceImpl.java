package com.seosam.edusetpo.schedule.service;

import com.seosam.edusetpo.lesson.dto.CreateLessonDto;
import com.seosam.edusetpo.schedule.dto.CreateScheduleDto;
import com.seosam.edusetpo.schedule.dto.ScheduleDto;
import com.seosam.edusetpo.schedule.entity.Schedule;
import com.seosam.edusetpo.schedule.repository.ScheduleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
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
    public Schedule addSchedule(CreateLessonDto lessonDto) {

        Schedule schedule = new Schedule();

        // implementation logic goes here
        // set properties of the schedule object using values from the scheduleDto

//        for (List<List> session : lessonDto.getSchedule()) {
//
//            schedule = Schedule.builder()
//                    .lessonId()
//                    .lessonDay(session.get(0))
//                    .startTime(session.get(1))
//                    .endTime(session.get(2))
//                    .build();
//
//            scheduleRepository.save(schedule);
//        }


        return null;
    }
}
