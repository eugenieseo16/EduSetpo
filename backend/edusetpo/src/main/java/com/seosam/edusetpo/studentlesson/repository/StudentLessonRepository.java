package com.seosam.edusetpo.studentlesson.repository;

import com.seosam.edusetpo.studentlesson.entity.StudentLesson;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Repository
public interface StudentLessonRepository extends JpaRepository<StudentLesson, Long> {

    Optional<StudentLesson> findByStudentLessonId(Long studentLessonId);
    Optional<StudentLesson> findByStudentIdAndLessonId(Long studentId, Long lessonId);
    List<StudentLesson> findAllByStudentId(Long studentId);
    List<StudentLesson> findAllByLessonId(Long lessonId);

}
