package com.seosam.edusetpo.lesson.repository;

import com.seosam.edusetpo.lesson.entity.Lesson;
import com.seosam.edusetpo.schedule.entity.Schedule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface LessonRepository extends JpaRepository<Lesson, Long> {

    Optional<Lesson> findByTutorIdAndAndLessonId(Long tutorId, Long lessonId);

    List<Lesson> findAllByTutorId(Long tutorId);

//    날짜
//    요일
//    List<Lesson> findAllBy
}
