package com.seosam.edusetpo.salary.service;

import com.seosam.edusetpo.salary.dto.SalaryDto;
import com.seosam.edusetpo.salary.entity.Salary;
import com.seosam.edusetpo.salary.repository.SalaryRepository;
import com.seosam.edusetpo.studentlesson.entity.StudentLesson;
import com.seosam.edusetpo.studentlesson.repository.StudentLessonRepository;
import com.seosam.edusetpo.tutor.entity.Tutor;
import com.seosam.edusetpo.tutor.repository.TutorRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@Service
public class SalaryServiceImpl implements SalaryService{

    private final SalaryRepository salaryRepository;
    private final TutorRepository tutorRepository;
    private final StudentLessonRepository studentLessonRepository;

    public SalaryServiceImpl(SalaryRepository salaryRepository, TutorRepository tutorRepository, StudentLessonRepository studentLessonRepository) {
        this.salaryRepository = salaryRepository;
        this.tutorRepository = tutorRepository;
        this.studentLessonRepository = studentLessonRepository;
    }

    @Override
    public Optional<Long> addSalary(Long tutorId, Long studentLessonId, SalaryDto salaryDto) {
        Optional<Tutor> optionalTutor = tutorRepository.findByTutorId(tutorId);
        Optional<StudentLesson> optionalStudentLesson = studentLessonRepository.findByStudentLessonId(studentLessonId);
        if(optionalTutor.isPresent() && optionalStudentLesson.isPresent()) {
            Salary salary = toEntity(tutorId, salaryDto);
            salaryRepository.save(salary);
            return Optional.of(salary.getSalaryId());
        }
        return Optional.empty();
    }

    @Override
    public List<SalaryDto> findAllSalaryByStudentLesson(Long studentLessonId) {
        List<Salary> salaryList = salaryRepository.findAllByStudentLessonId(studentLessonId);
        return salaryList.stream().map(this::toResponseDto).collect(Collectors.toList());
    }

    @Override
    public List<SalaryDto> findAllSalary(Long tutorId) {
        List<Salary> salaryList = salaryRepository.findAllByTutorId(tutorId);
        return salaryList.stream().map(this::toResponseDto).collect(Collectors.toList());
    }

    @Override
    public boolean toggleSalary(Long tutorId, Long salaryId, Boolean isPaid) {
        Optional<Salary> optionalSalary = salaryRepository.findBySalaryId(salaryId);
        if (optionalSalary.isPresent()) {
            Salary salary = optionalSalary.get();
            if (salary.getTutorId().equals(tutorId)) {
                salary.toggleSalary(isPaid);
                salaryRepository.save(salary);
                return true;
            }
            return false;
        }
        return false;
    }
}
