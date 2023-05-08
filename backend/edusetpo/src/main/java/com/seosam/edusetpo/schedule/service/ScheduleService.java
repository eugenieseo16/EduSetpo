package com.seosam.edusetpo.schedule.service;

import com.seosam.edusetpo.lesson.dto.CreateLessonDto;
import com.seosam.edusetpo.schedule.dto.CreateScheduleDto;
import com.seosam.edusetpo.schedule.dto.ScheduleDto;
import com.seosam.edusetpo.schedule.entity.Schedule;
import com.seosam.edusetpo.student.dto.StudentDto;
import com.seosam.edusetpo.student.entity.Student;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface ScheduleService {
    Long addSchedule(CreateScheduleDto createScheduleDto);

    // create
    public Object addSchedule(List<List<String>> schedule, Long lessonId);

    // update
    Schedule modifySchedule(List<List<String>> schedules, Long lessonId);

}
