package com.seosam.edusetpo.session.service;


import com.seosam.edusetpo.lesson.repository.LessonRepository;
import com.seosam.edusetpo.lessonTag.dto.FindTagsDto;
import com.seosam.edusetpo.lessonTag.entity.LessonTag;
import com.seosam.edusetpo.lessonTag.service.LessonTagService;
import com.seosam.edusetpo.session.dto.*;
import com.seosam.edusetpo.session.entity.Session;
import com.seosam.edusetpo.session.repository.SessionRepository;
import com.seosam.edusetpo.student.entity.Student;
import com.seosam.edusetpo.studentlesson.repository.StudentLessonRepository;
import com.seosam.edusetpo.studentlesson.service.StudentLessonService;
import com.seosam.edusetpo.tutor.entity.Tutor;
import com.seosam.edusetpo.tutor.repository.TutorRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Month;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class SessionServiceImpl implements SessionService{

    private final SessionRepository sessionRepository;
    private final TutorRepository tutorRepository;
    private final SessionLogService sessionLogService;
    private final LessonRepository lessonRepository;
    private final StudentLessonRepository studentLessonRepository;
    private final StudentLessonService studentLessonService;
    private final LessonTagService lessonTagService;

    public SessionServiceImpl(SessionRepository sessionRepository, TutorRepository tutorRepository, SessionLogService sessionLogService, LessonRepository lessonRepository, StudentLessonRepository studentLessonRepository, StudentLessonService studentLessonService, LessonTagService lessonTagService) {
        this.sessionRepository = sessionRepository;
        this.tutorRepository = tutorRepository;
        this.sessionLogService = sessionLogService;
        this.lessonRepository = lessonRepository;
        this.studentLessonRepository = studentLessonRepository;
        this.studentLessonService = studentLessonService;
        this.lessonTagService = lessonTagService;
    }

    public List<SessionResponseDto> sessionResponseDtoList(List<Session> sessionList) {
        List<SessionResponseDto> sessionResponseDtoList = new ArrayList<>();
        for (Session session : sessionList) {
            Long lessonId = session.getLessonId();
            List<Student> studentList = studentLessonService.findAllStudentByLesson(lessonId);
            List<FindTagsDto> findTagsDtoList = lessonTagService.findTags(lessonId);

            SessionResponseDto sessionResponseDto = toResponseDto(session, studentList, findTagsDtoList);
            sessionResponseDtoList.add(sessionResponseDto);
        }

        return sessionResponseDtoList;
    }

    @Override
    public Optional<Long> addSession(Long tutorId, SessionDto sessionDto) {
        Optional<Tutor> optionalTutor = tutorRepository.findByTutorId(tutorId);
        if (optionalTutor.isEmpty()) {
            return Optional.empty();
        }

        Tutor tutor = optionalTutor.get();
        Session session = toEntity(tutorId, sessionDto);
        sessionRepository.save(session);
        return Optional.of(session.getSessionId());
    }

    @Override
    public Optional<Long> addSessionAutomatically(Long tutorId, List<Month> monthList) {
//        List<StudentLesson> studentLessonList = studentLessonRepository.
        for (Month month : monthList) {

        }
        return Optional.empty();
    }

    @Override
    public Optional<SessionResponseDto> findSession(Long sessionId) {
        Optional<Session> optionalSession = sessionRepository.findBySessionId(sessionId);
        List<Session> sessionList = new ArrayList<>();
        if (optionalSession.isEmpty()) {
            return Optional.empty();
        }
        sessionList.add(optionalSession.get());
        List<SessionResponseDto> sessionResponseDtoList = sessionResponseDtoList(sessionList);

        Optional<SessionResponseDto> optional = sessionResponseDtoList.stream().findFirst();

        return optional;
    }

    @Override
    public List<SessionResponseDto> findAllSessionByLessonId(Long lessonId) {
        List<Session> sessionList = sessionRepository.findAllByLessonIdOrderByStartTime(lessonId);
        return sessionResponseDtoList(sessionList);
    }

    @Override
    public List<SessionResponseDto> findAllSessionByActualDate(Long tutorId, LocalDate actualDate) {
        List<Session> sessionList = sessionRepository.findAllByTutorIdAndActualDateOrderByStartTime(tutorId, actualDate);
//        return sessionList.stream().map(this::toResponseDto).collect(Collectors.toList());
            return sessionResponseDtoList(sessionList);
    }

    @Override
    public List<SessionResponseDto> findAllSessionByTutorId(Long tutorId) {
        List<Session> sessionList = sessionRepository.findAllByTutorIdOrderByStartTime(tutorId);
//        return sessionList.stream().map(this::toResponseDto).collect(Collectors.toList());
        return sessionResponseDtoList(sessionList);
    }

    @Override
    public List<SessionResponseDto> findAllSessionByTutorIdAndLessonId(Long tutorId, Long lessonId) {
        List<Session> sessionList = sessionRepository.findAllByTutorIdAndLessonIdOrderByStartTime(tutorId, lessonId);
        return sessionResponseDtoList(sessionList);
    }


    @Override
    public boolean updateSession(Long tutorId, Long sessionId, UpdateSessionDto updateSessionDto) {
        Optional<Session> optionalSession = sessionRepository.findBySessionId(sessionId);
        if(!tutorId.equals(optionalSession.get().getTutorId())) {
            return false;
        }
        if (optionalSession.isPresent()) {
            
            // 날짜가 변경되면 로그 입력
            if (!updateSessionDto.getActualDate().equals(optionalSession.get().getActualDate())) {
                SessionLogDto sessionLogDto = SessionLogDto.builder()
                        .beforeDate(optionalSession.get().getActualDate())
                        .afterDate(updateSessionDto.getActualDate())
                        .build();
                // 해결한거인듯?
                sessionLogService.addSessionLog(sessionId, sessionLogDto);
            }
            Session session = optionalSession.get();
            session.updateSession(
                    updateSessionDto.getMemo(),
                    updateSessionDto.getActualDate(),
                    updateSessionDto.getStartTime(),
                    updateSessionDto.getEndTime(),
                    updateSessionDto.getDuration(),
                    updateSessionDto.getIsCompleted()
            );
            sessionRepository.save(session);
            return true;
        }
        return false;
    }

    @Override
    public boolean toggleSession(Long tutorId, Long sessionId, ToggleSessionDto toggleSessionDto) {
        Optional<Session> optionalSession = sessionRepository.findBySessionId(sessionId);
        if(!tutorId.equals(optionalSession.get().getTutorId())) {
            return false;

        }        if (optionalSession.isPresent()) {
            Session session = optionalSession.get();
            session.toggleSession(
                    !session.getIsCompleted()
            );
            sessionRepository.save(session);
            return true;
        }
        return false;
    }

    @Override
    public boolean deleteSession(Long tutorId, LocalDate currentDate) {
        List<Session> sessionList = sessionRepository.findAllByActualDateAfterAndTutorId(currentDate, tutorId);
        sessionRepository.deleteAll(sessionList);

        return true;
    }

}
