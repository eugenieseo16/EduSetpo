package com.seosam.edusetpo.student.service;

import com.seosam.edusetpo.student.dto.StudentDto;
import com.seosam.edusetpo.student.entity.Student;
import com.seosam.edusetpo.student.repository.StudentRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class StudentServiceImpl implements StudentService {

    private final StudentRepository studentRepository;

    public StudentServiceImpl(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    @Override
    public Optional<Long> createStudent(Long tutorId, StudentDto studentDto) {
        // 새로운 학생 객체를 생성하고 저장합니다.
        Student student = toEntity(studentDto);
        studentRepository.save(student);

        // 저장된 학생 객체의 ID를 반환합니다.
        return Optional.of(student.getStudentId());
    }

    @Override
    public boolean updateStudent(Long studentId, StudentDto studentDto) {
        // 여기도 수정해야함
//        Optional<Student> optionalStudent = studentRepository.findByStudentId(studentDto.getTutorId());
        Optional<Student> optionalStudent = studentRepository.findByStudentId(1L);
        if (optionalStudent.isPresent()) {
            Student student = optionalStudent.get();
            student.updateStudent(studentDto.getStudentName(), studentDto.getStudentContact(), studentDto.getParentContact());
            studentRepository.save(student);
            return true;
        }
        return false;
    }
}
