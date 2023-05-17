package com.seosam.edusetpo.config;

import com.seosam.edusetpo.config.handler.JwtTokenProvider;
import com.seosam.edusetpo.grade.repository.GradeRepository;
import com.seosam.edusetpo.grade.service.GradeService;
import com.seosam.edusetpo.grade.service.GradeServiceImpl;
import com.seosam.edusetpo.gradeCategory.repository.GradeCategoryRepository;
import com.seosam.edusetpo.gradeCategory.service.GradeCategoryService;
import com.seosam.edusetpo.gradeCategory.service.GradeCategoryServiceImpl;
import com.seosam.edusetpo.homework.repository.HomeworkRepository;
import com.seosam.edusetpo.homework.service.HomeworkService;
import com.seosam.edusetpo.homework.service.HomeworkServiceImpl;
import com.seosam.edusetpo.parent.repository.ParentRepository;
import com.seosam.edusetpo.common.Response;
import com.seosam.edusetpo.parent.service.ParentService;
import com.seosam.edusetpo.parent.service.ParentServiceImpl;
import com.seosam.edusetpo.studentlesson.service.StudentLessonService;
import com.seosam.edusetpo.studentlesson.service.StudentLessonServiceImpl;
import com.seosam.edusetpo.tutor.repository.TutorRepository;
import com.seosam.edusetpo.tutor.service.TutorService;
import com.seosam.edusetpo.tutor.service.TutorServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import com.seosam.edusetpo.children.service.ChildrenService;
import com.seosam.edusetpo.lesson.repository.LessonRepository;
import com.seosam.edusetpo.lesson.service.LessonService;
import com.seosam.edusetpo.lesson.service.LessonServiceImpl;
import com.seosam.edusetpo.lessonTag.repository.LessonTagRepository;
import com.seosam.edusetpo.lessonTag.service.LessonTagService;
import com.seosam.edusetpo.lessonTag.service.LessonTagServiceImpl;
import com.seosam.edusetpo.salary.repository.SalaryRepository;
import com.seosam.edusetpo.salary.service.SalaryService;
import com.seosam.edusetpo.salary.service.SalaryServiceImpl;
import com.seosam.edusetpo.schedule.repository.ScheduleRepository;
import com.seosam.edusetpo.schedule.service.ScheduleService;
import com.seosam.edusetpo.schedule.service.ScheduleServiceImpl;
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
import com.seosam.edusetpo.tutor.service.TagService;
import com.seosam.edusetpo.tutor.service.TagServiceImpl;

@Configuration
@RequiredArgsConstructor
public class JpaConfiguration {

    private final Response response;
    private final AuthenticationManagerBuilder authenticationManagerBuilder;
    private final JwtTokenProvider jwtTokenProvider;
    private final StudentRepository studentRepository;
    private final TutorRepository tutorRepository;
    private final SessionRepository sessionRepository;
    private final SalaryRepository salaryRepository;
    private final StudentLessonRepository studentLessonRepository;
    private final SessionLogRepository sessionLogRepository;
    private final ChildrenRepository childrenRepository;
    private final ParentRepository parentRepository;
    private final TagRepository tagRepository;
    private final LessonRepository lessonRepository;
    private final ScheduleRepository scheduleRepository;
    private final LessonTagRepository lessonTagRepository;
    private final GradeRepository gradeRepository;
    private final GradeCategoryRepository gradeCategoryRepository;
    private final HomeworkRepository homeworkRepository;


    @Bean
    public TutorService tutorService() {
        return new TutorServiceImpl(tutorRepository, response, authenticationManagerBuilder, jwtTokenProvider);
    }

    @Bean
    public ParentService parentService() {
        return new ParentServiceImpl(parentRepository, response, jwtTokenProvider);
    }

    @Bean
    public StudentService studentService() {
        return new StudentServiceImpl(studentRepository, tutorRepository);
    }
    @Bean
    public SessionService sessionService() {
        return new SessionServiceImpl(sessionRepository, tutorRepository, sessionLogService(), lessonRepository, studentLessonRepository, studentLessonService(), lessonTagService());
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
    public ChildrenService childrenService() {
        return new ChildrenServiceImpl(childrenRepository, parentRepository);
    }
    @Bean
    public TagService tagService() { return new TagServiceImpl(tagRepository); }
    @Bean
    public LessonService lessonService() { return new LessonServiceImpl(lessonRepository, tagRepository, studentRepository, scheduleRepository, lessonTagRepository, studentLessonRepository); }
    @Bean
    public ScheduleService scheduleService() {
        return new ScheduleServiceImpl(scheduleRepository);
    }
    @Bean
    public LessonTagService lessonTagService() {  return new LessonTagServiceImpl(lessonTagRepository, tagRepository); }
    @Bean
    public StudentLessonService studentLessonService() {
        return new StudentLessonServiceImpl(studentLessonRepository);
    }

    @Bean
    public GradeCategoryService gradeCategoryService() { return new GradeCategoryServiceImpl(gradeCategoryRepository);}

    @Bean
    public GradeService gradeService() {
        return new GradeServiceImpl(gradeRepository);
    }

    @Bean
    public HomeworkService homeworkService() {
        return new HomeworkServiceImpl(homeworkRepository);
    }

}
