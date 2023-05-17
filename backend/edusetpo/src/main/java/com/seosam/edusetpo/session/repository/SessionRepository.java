package com.seosam.edusetpo.session.repository;

import com.seosam.edusetpo.session.entity.Session;
import com.seosam.edusetpo.studentlesson.entity.StudentLesson;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface SessionRepository extends JpaRepository<Session, Long> {

    Optional<Session> findBySessionId(Long sessionId);
    List<Session> findAllByTutorIdAndActualDate(Long tutorId, LocalDate actualDate);
    List<Session> findAllByLessonId(Long lessonId);
    List<Session> findAllByTutorId(Long tutorId);
    List<Session> findAllByTutorIdAndLessonId(Long tutorId, Long lessonId);
    List<Session> findAllByActualDateAfterAndTutorId(Long tutorId, LocalDate currentDate);


}
