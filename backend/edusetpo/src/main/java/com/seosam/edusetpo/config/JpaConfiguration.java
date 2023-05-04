package com.seosam.edusetpo.config;

import com.seosam.edusetpo.children.repository.ChildrenRepository;
import com.seosam.edusetpo.children.service.ChildrenServiceImpl;
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


    @Bean
    public StudentService studentService() {
        return new StudentServiceImpl(studentRepository, tutorRepository);
    }
    @Bean
    public ChildrenServiceImpl childrenService() {
        return new ChildrenServiceImpl(childrenRepository);
    }
}