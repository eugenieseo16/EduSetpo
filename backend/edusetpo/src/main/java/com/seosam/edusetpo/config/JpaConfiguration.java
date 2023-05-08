package com.seosam.edusetpo.config;

import com.seosam.edusetpo.children.repository.ChildrenRepository;
import com.seosam.edusetpo.children.service.ChildrenServiceImpl;
import com.seosam.edusetpo.grade.repository.GradeRepository;
import com.seosam.edusetpo.grade.service.GradeServiceImpl;
import com.seosam.edusetpo.gradeCategory.repository.GradeCategoryRepository;
import com.seosam.edusetpo.gradeCategory.service.GradeCategoryServiceImpl;
import com.seosam.edusetpo.homework.repository.HomeworkRepository;
import com.seosam.edusetpo.homework.service.HomeworkServiceImpl;
import com.seosam.edusetpo.session.repository.SessionRepository;
import com.seosam.edusetpo.student.repository.StudentRepository;
import com.seosam.edusetpo.student.service.StudentService;
import com.seosam.edusetpo.student.service.StudentServiceImpl;
import com.seosam.edusetpo.tutor.repository.TutorRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@RequiredArgsConstructor
public class JpaConfiguration {

    private final StudentRepository studentRepository;
    private final TutorRepository tutorRepository;
    private final SessionRepository sessionRepository;
    private final ChildrenRepository childrenRepository;
    private final HomeworkRepository homeworkRepository;
    private final GradeRepository gradeRepository;
    private final GradeCategoryRepository gradeCategoryRepository;


    @Bean
    public StudentService studentService() {
        return new StudentServiceImpl(studentRepository, tutorRepository);
    }
    @Bean
    public ChildrenServiceImpl childrenService() {
        return new ChildrenServiceImpl(childrenRepository);
    }
    @Bean
    public HomeworkServiceImpl homeworkService() {
        return new HomeworkServiceImpl(homeworkRepository);}
    @Bean
    public GradeServiceImpl gradeService() {
        return new GradeServiceImpl(gradeRepository);
    }
    @Bean
    public GradeCategoryServiceImpl gradeCategoryService() {
        return new GradeCategoryServiceImpl(gradeCategoryRepository);
    }
}
