package com.seosam.edusetpo.student.service;

import com.seosam.edusetpo.student.dto.StudentDto;
import com.seosam.edusetpo.student.entity.Student;

import java.util.Optional;

public interface StudentService {

    // create
    Optional<Long> createStudent(Long tutorId, StudentDto studentDto);

    // read


    // update
    boolean updateStudent(Long studentId, StudentDto studentDto);


    // delete



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
