package com.seosam.edusetpo.studentlesson.service;

import com.seosam.edusetpo.lesson.entity.Lesson;
import com.seosam.edusetpo.student.entity.Student;
import com.seosam.edusetpo.studentlesson.entity.StudentLesson;
import org.hibernate.cfg.annotations.reflection.internal.XMLContext;

import java.util.List;
import java.util.Optional;

public interface StudentLessonService {

    // create
    Optional<Long> addStudentLesson(Long studentId, Long lessonId);

    // read
    List<Student> findAllStudentByLesson(Long lessonId);
    List<Lesson> findAllLessonByStudent(Long studentId);

    // update
    boolean toggleStudentLesson(Long studentId, Long lessonId, Boolean isActive);
}
