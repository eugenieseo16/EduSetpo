package com.seosam.edusetpo.config;

import com.seosam.edusetpo.salary.repository.SalaryRepository;
import com.seosam.edusetpo.salary.service.SalaryService;
import com.seosam.edusetpo.salary.service.SalaryServiceImpl;
import com.seosam.edusetpo.session.repository.SessionLogRepository;
import com.seosam.edusetpo.children.repository.ChildrenRepository;
import com.seosam.edusetpo.children.service.ChildrenServiceImpl;
import com.seosam.edusetpo.session.repository.SessionRepository;
import com.seosam.edusetpo.session.service.SessionLogService;
import com.seosam.edusetpo.session.service.SessionLogServiceImpl;
import com.seosam.edusetpo.session.service.SessionService;
import com.seosam.edusetpo.session.service.SessionServiceImpl;
import com.seosam.edusetpo.student.repository.StudentRepository;
import com.seosam.edusetpo.student.service.StudentService;
import com.seosam.edusetpo.student.service.StudentServiceImpl;
import com.seosam.edusetpo.studentlesson.repository.StudentLessonRepository;
import com.seosam.edusetpo.tutor.repository.TagRepository;
import com.seosam.edusetpo.tutor.repository.TutorRepository;
import com.seosam.edusetpo.tutor.service.TagService;
import com.seosam.edusetpo.tutor.service.TagServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@RequiredArgsConstructor
public class JpaConfiguration {

    private final StudentRepository studentRepository;
    private final TutorRepository tutorRepository;
    private final SessionRepository sessionRepository;
    private final SalaryRepository salaryRepository;
    private final StudentLessonRepository studentLessonRepository;
    private final SessionLogRepository sessionLogRepository;
    private final ChildrenRepository childrenRepository;
    private final TagRepository tagRepository;


    @Bean
    public StudentService studentService() {
        return new StudentServiceImpl(studentRepository, tutorRepository);
    }
    @Bean
    public SessionService sessionService() {
        return new SessionServiceImpl(sessionRepository, tutorRepository, sessionLogService());
    }
    @Bean
    public SessionLogService sessionLogService() {
        return new SessionLogServiceImpl(sessionLogRepository);
    }
    @Bean
    public SalaryService salaryService() {
        return new SalaryServiceImpl(salaryRepository, tutorRepository, studentLessonRepository);
    }

    @Bean
    public ChildrenServiceImpl childrenService() {
        return new ChildrenServiceImpl(childrenRepository);
    }
    @Bean
    public TagServiceImpl tagService() { return new TagServiceImpl(tagRepository); }
}
