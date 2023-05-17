package com.seosam.edusetpo.session.repository;

import com.seosam.edusetpo.session.entity.Session;
import com.seosam.edusetpo.studentlesson.entity.StudentLesson;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface SessionRepository extends JpaRepository<Session, Long> {

    Optional<Session> findBySessionId(Long sessionId);
    List<Session> findAllByTutorIdAndActualDateOrderByStartTime(Long tutorId, LocalDate actualDate);
    List<Session> findAllByLessonIdOrderByStartTime(Long lessonId);
    List<Session> findAllByTutorIdOrderByStartTime(Long tutorId);
    List<Session> findAllByTutorIdAndLessonIdOrderByStartTime(Long tutorId, Long lessonId);
    List<Session> findAllByActualDateAfterAndTutorId(LocalDate currentDate, Long tutorId);

    void deleteAllByActualDateAfterAndTutorId(LocalDate currentDate, Long tutorId);
}
