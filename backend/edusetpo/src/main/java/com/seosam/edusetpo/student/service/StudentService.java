package com.seosam.edusetpo.student.service;

import com.seosam.edusetpo.student.dto.StudentDto;
import com.seosam.edusetpo.student.dto.StudentToggleDto;
import com.seosam.edusetpo.student.dto.StudentUpdateDto;
import com.seosam.edusetpo.student.entity.Student;

import java.util.List;
import java.util.Optional;

public interface StudentService {

    // create
    Optional<Long> createStudent(Long tutorId, StudentDto studentDto);

    // read
    List<StudentDto> findAllStudent(Long userId, String who);

    // update
    boolean updateStudent(Long studentId, StudentUpdateDto studentUpdateDto);
    boolean toggleStudent(Long studentId, StudentToggleDto studentToggleDto);


    // delete


    // DB -> 서버
    default StudentDto toResponseDto(Student student) {
        return StudentDto.builder()
                .tutorId(student.getTutorId())
                .studentName(student.getStudentName())
                .studentContact(student.getStudentContact())
                .parentContact(student.getParentContact())
                .isActive(student.getIsActive())
                .build();
    }

    // 서버 -> DB
    default Student toEntity(StudentDto studentDto) {
        return Student.builder()
//                .tutorId(studentDto.getTutorId())
//                .studentName(studentDto.getStudentName())
//                .studentContact(studentDto.getStudentContact())
                .tutorId(1L)
                .studentName("깜찎쓰")
                .parentContact("01049358274")
                .isActive(true)
                .build();
    }

}
