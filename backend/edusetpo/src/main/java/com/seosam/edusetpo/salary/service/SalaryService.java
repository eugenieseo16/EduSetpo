package com.seosam.edusetpo.salary.service;

import com.seosam.edusetpo.salary.dto.SalaryDto;
import com.seosam.edusetpo.salary.entity.Salary;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface SalaryService {

    // create
    Optional<Long> addSalary(Long tutorId, Long studentLessonId, SalaryDto salaryDto);

    // read
    List<SalaryDto> findAllSalaryByStudentLesson(Long studentLessonId);
    List<SalaryDto> findAllSalary(Long tutorId);

    // update
    boolean toggleSalary(Long tutorId, Long salaryId, Boolean isPaid);

    // DB -> 서버
    default SalaryDto toResponseDto(Salary salary) {
        return SalaryDto.builder()
                .studentLessonId(salary.getStudentLessonId())
                .salary(salary.getSalary())
                .sumTime(salary.getSumTime())
                .isPaid(salary.getIsPaid())
                .build();
    }

    // 서버 -> DB
    default  Salary toEntity(Long tutorId, SalaryDto salaryDto) {
        return Salary.builder()
                .studentLessonId(salaryDto.getStudentLessonId())
                .tutorId(tutorId)
                .salary(salaryDto.getSalary())
                .sumTime(salaryDto.getSumTime())
                .isPaid(salaryDto.getIsPaid())
                .createdAt(LocalDateTime.now())
                .build();
    }
}
