package com.seosam.edusetpo.homework.repository;

import com.seosam.edusetpo.homework.entity.Homework;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface HomeworkRepository extends JpaRepository<Homework, Long> {
    List<Homework> findHomeworkByStudentIdAndSessionId(Long studentId, Long sessionId);
}
