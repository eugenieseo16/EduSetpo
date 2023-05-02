package com.seosam.edusetpo.student.service;

import com.seosam.edusetpo.student.dto.StudentDto;
import com.seosam.edusetpo.student.dto.StudentToggleDto;
import com.seosam.edusetpo.student.dto.StudentUpdateDto;
import com.seosam.edusetpo.student.entity.Student;
import com.seosam.edusetpo.student.repository.StudentRepository;
import com.seosam.edusetpo.tutor.entity.Tutor;
import com.seosam.edusetpo.tutor.repository.TutorRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class StudentServiceImpl implements StudentService {

    private final StudentRepository studentRepository;

    private final TutorRepository tutorRepository;

//    private final ParentRepository parentRepository;

    public StudentServiceImpl(StudentRepository studentRepository, TutorRepository tutorRepository) {
        this.studentRepository = studentRepository;
        this.tutorRepository = tutorRepository;
    }

    @Override
    public Optional<StudentDto> findStudent(Long studentId) {
        Optional<Student> student = studentRepository.findByStudentId(studentId);
        return student.map(this::toResponseDto);
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
    public boolean updateStudent(Long studentId, StudentUpdateDto studentUpdateDto) {
        // 여기도 수정해야함
//        Optional<Student> optionalStudent = studentRepository.findByStudentId(studentDto.getTutorId());
        Optional<Student> optionalStudent = studentRepository.findByStudentId(1L);
        if (optionalStudent.isPresent()) {
            Student student = optionalStudent.get();
            student.updateStudent(studentUpdateDto.getStudentName(), studentUpdateDto.getStudentContact(), studentUpdateDto.getParentContact());
            studentRepository.save(student);
            return true;
        }
        return false;
    }

    @Override
    public boolean toggleStudent(Long studentId, StudentToggleDto studentToggleDto) {
        Optional<Student> optionalStudent = studentRepository.findByStudentId(1L);
        if (optionalStudent.isPresent()) {
            Student student = optionalStudent.get();
            student.toggleStudent(studentToggleDto.getIsActive());
            studentRepository.save(student);
            return true;
        }
        return false;
    }

    @Override
    public List<StudentDto> findAllStudent(Long userId, String who) {
        if (who == "tutor") {
            Optional<Tutor> optionalTutor = tutorRepository.findByTutorId(userId);
            if (optionalTutor.isPresent()) {
                List<Student> studentList = studentRepository.findAll();
                return studentList.stream().map(this::toResponseDto).collect(Collectors.toList());
            }
            return null;
        }

        return null;
    }
}
