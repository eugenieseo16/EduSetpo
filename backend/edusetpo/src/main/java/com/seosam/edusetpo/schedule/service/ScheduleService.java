package com.seosam.edusetpo.schedule.service;

import com.seosam.edusetpo.schedule.dto.CreateScheduleDto;
import com.seosam.edusetpo.schedule.dto.ScheduleDto;
import com.seosam.edusetpo.schedule.entity.Schedule;
import com.seosam.edusetpo.student.dto.StudentDto;
import com.seosam.edusetpo.student.entity.Student;

import java.time.LocalDateTime;
import java.util.Optional;

public interface ScheduleService {
    Long addSchedule(CreateScheduleDto createScheduleDto);

    // create
    Optional<Long> addSchedule(Long tutorId, ScheduleDto scheduleDto);

    // 서버 -> DB
    default Schedule toEntity(ScheduleDto scheduleDto) {
        return Schedule.builder()
//                .tutorId(studentDto.getTutorId())
//                .studentName(studentDto.getStudentName())
//                .studentContact(studentDto.getStudentContact())
//                .parentContact(studentDto.getParentContact())
                .createdAt(LocalDateTime.now())
                .build();
    }
}
