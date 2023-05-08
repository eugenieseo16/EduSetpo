package com.seosam.edusetpo.lesson.repository;

import com.seosam.edusetpo.lesson.entity.Lesson;
import com.seosam.edusetpo.schedule.entity.Schedule;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface LessonRepository extends JpaRepository<Lesson, Long> {

//    날짜
//    요일
//    List<Lesson> findAllBy
}
