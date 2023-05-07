package com.seosam.edusetpo.studentlesson.service;

import com.seosam.edusetpo.lesson.entity.Lesson;
import com.seosam.edusetpo.student.entity.Student;
import com.seosam.edusetpo.studentlesson.entity.StudentLesson;
import com.seosam.edusetpo.studentlesson.repository.StudentLessonRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class StudentLessonServiceImpl implements StudentLessonService {

    private final StudentLessonRepository studentLessonRepository;

    public StudentLessonServiceImpl(StudentLessonRepository studentLessonRepository) {
        this.studentLessonRepository = studentLessonRepository;
    }

    @Override
    public Optional<Long> addStudentLesson(Long studentId, Long lessonId) {
        Optional<StudentLesson> optionalStudentLesson = studentLessonRepository.findByStudentIdAndLessonId(studentId, lessonId);
        // 똑같은 학생과 수업에 대한 데이터가 이미 있을 경우 만들어지면 안됨
        if (optionalStudentLesson.isPresent()) {
            return Optional.empty();
        }
        StudentLesson studentLesson = StudentLesson.builder()
                .studentId(studentId)
                .hexId(Long.toHexString(studentId))
                .lessonId(lessonId)
                .isActive(true)
                .build();
        studentLessonRepository.save(studentLesson);
        return Optional.of(studentLesson.getStudentLessonId());
    }

    @Override
    public Optional<StudentLesson> findStudentLesson(Long studentLessonId) {
        Optional<StudentLesson> optionalStudentLesson = studentLessonRepository.findByStudentLessonId(studentLessonId);
        if (optionalStudentLesson.isEmpty()) {
            return Optional.empty();
        }
        return optionalStudentLesson;
    }

    @Override
    public List<Student> findAllStudentByLesson(Long lessonId) {
        List<StudentLesson> studentLessonList = studentLessonRepository.findAllByLessonId(lessonId);
        List<Long> studentList = studentLessonList.stream().map(StudentLesson::getLessonId).collect(Collectors.toList());
        // 객체 상태로 추출가능한가? 테스트해봐야함
        List<Student> test = studentLessonList.stream().map(StudentLesson::getStudent).collect(Collectors.toList());
//        return studentList;
        return test;
    }

    @Override
    public List<Lesson> findAllLessonByStudent(Long studentId) {
        List<StudentLesson> studentLessonList = studentLessonRepository.findAllByStudentId(studentId);
        List<Long> lessonList = studentLessonList.stream().map(StudentLesson::getStudentId).collect(Collectors.toList());
        // 객체 상태로 추출 가능한지 테스트 해봐야함
        List<Lesson> test = studentLessonList.stream().map(StudentLesson::getLesson).collect(Collectors.toList());
//        return lessonList;
        return test;
    }

    @Override
    public boolean toggleStudentLesson(Long studentId, Long lessonId, Boolean isActive) {
        Optional<StudentLesson> optionalStudentLesson = studentLessonRepository.findByStudentIdAndLessonId(studentId, lessonId);
        if (optionalStudentLesson.isPresent()) {
            StudentLesson studentLesson = optionalStudentLesson.get();
            studentLesson.toggleStudentLesson(isActive);
            studentLessonRepository.save(studentLesson);
            return true;
        }
        return false;
    }
}
