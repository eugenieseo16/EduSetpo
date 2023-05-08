package com.seosam.edusetpo.schedule.service;

import com.seosam.edusetpo.lesson.dto.CreateLessonDto;
import com.seosam.edusetpo.schedule.dto.CreateScheduleDto;
import com.seosam.edusetpo.schedule.entity.Schedule;
import com.seosam.edusetpo.schedule.repository.ScheduleRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;

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
    public Schedule addSchedule(List<List<String>> schedules, Long lessonId) {

        if (schedules.get(0).get(0).contains("DAY")) {

            for (List<String> schedule : schedules) {

                int startTime = (Integer.parseInt(schedule.get(1).substring(0, 2)) * 60) + Integer.parseInt(schedule.get(1).substring(3, 5));
                int endTime = (Integer.parseInt(schedule.get(2).substring(0, 2)) * 60) + Integer.parseInt(schedule.get(2).substring(3, 5));

                Schedule newSchedule = new Schedule();

                newSchedule = Schedule.builder()
                        .createdAt(LocalDateTime.now())
                        .duration(endTime - startTime)
                        .endTime(LocalTime.parse(schedule.get(2)))
                        .lessonDay(schedule.get(0))
                        .startTime(LocalTime.parse(schedule.get(1)))
                        .lessonId(lessonId)
                        .build();

                scheduleRepository.save(newSchedule);

            }

            return null;

        } else {

            return null;

        }
    }

    @Override
    @Transactional
    public Schedule modifySchedule(List<List<String>> schedules, Long lessonId){
        scheduleRepository.deleteByLessonId(lessonId);

        if (schedules.get(0).get(0).contains("DAY")) {

            for (List<String> schedule : schedules) {

                int startTime = (Integer.parseInt(schedule.get(1).substring(0, 2)) * 60) + Integer.parseInt(schedule.get(1).substring(3, 5));
                int endTime = (Integer.parseInt(schedule.get(2).substring(0, 2)) * 60) + Integer.parseInt(schedule.get(2).substring(3, 5));

                Schedule newSchedule = new Schedule();

                newSchedule = Schedule.builder()
                        .createdAt(LocalDateTime.now())
                        .duration(endTime - startTime)
                        .endTime(LocalTime.parse(schedule.get(2)))
                        .lessonDay(schedule.get(0))
                        .startTime(LocalTime.parse(schedule.get(1)))
                        .lessonId(lessonId)
                        .build();

                scheduleRepository.save(newSchedule);

            }

            return null;

        } else {

            return null;

        }

    }

}
