package com.seosam.edusetpo.salary.repository;

import com.seosam.edusetpo.salary.entity.Salary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SalaryRepository extends JpaRepository<Salary, Long> {

    Optional<Salary> findBySalaryId(Long salaryId);
    List<Salary> findAllByStudentLessonId(Long studentLessonId);
    List<Salary> findAllByTutorId(Long tutorId);
}
