package com.seosam.edusetpo.schedule.repository;

import com.seosam.edusetpo.schedule.entity.Schedule;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ScheduleRepository extends JpaRepository<Schedule, Long> {

    List<Schedule> findAllByLesson_TutorId(Long tutorId);
    List<Schedule> findAllByLessonId(Long lessonId);

    void deleteByLessonId(long lessonId);
}
