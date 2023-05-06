package com.seosam.edusetpo.studentlesson.repository;

import com.seosam.edusetpo.studentlesson.entity.StudentLesson;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface StudentLessonRepository extends JpaRepository<StudentLesson, Long> {

    Optional<StudentLesson> findByStudentLessonId(Long studentLessonId);

}
