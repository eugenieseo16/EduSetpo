package com.seosam.edusetpo.student.repository;

import com.seosam.edusetpo.student.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {

    Optional<Student> findByStudentId(Long studentId);
    Optional<Student> findByStudentName(String studentName);

    Optional<Student> findByStudentContact(String studentContact);

    Optional<Student> findByParentContact(String parentContact);
}
