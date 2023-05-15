package com.seosam.edusetpo.session.service;


import com.seosam.edusetpo.lesson.repository.LessonRepository;
import com.seosam.edusetpo.session.dto.*;
import com.seosam.edusetpo.session.entity.Session;
import com.seosam.edusetpo.session.repository.SessionRepository;
import com.seosam.edusetpo.studentlesson.entity.StudentLesson;
import com.seosam.edusetpo.studentlesson.repository.StudentLessonRepository;
import com.seosam.edusetpo.tutor.entity.Tutor;
import com.seosam.edusetpo.tutor.repository.TutorRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Month;
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

    public SessionServiceImpl(SessionRepository sessionRepository, TutorRepository tutorRepository, SessionLogService sessionLogService, LessonRepository lessonRepository, StudentLessonRepository studentLessonRepository) {
        this.sessionRepository = sessionRepository;
        this.tutorRepository = tutorRepository;
        this.sessionLogService = sessionLogService;
        this.lessonRepository = lessonRepository;
        this.studentLessonRepository = studentLessonRepository;
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
        if (optionalSession.isEmpty()) {
            return Optional.empty();
        }
        return optionalSession.map(this::toResponseDto);
    }

    @Override
    public List<SessionResponseDto> findAllSessionByLessonId(Long lessonId) {
        List<Session> sessionList = sessionRepository.findAllByLessonId(lessonId);
        return sessionList.stream().map(this::toResponseDto).collect(Collectors.toList());
    }

    @Override
    public List<SessionResponseDto> findAllSessionByActualDate(Long tutorId, LocalDate actualDate) {
        List<Session> sessionList = sessionRepository.findAllByTutorIdAndActualDate(tutorId, actualDate);
        return sessionList.stream().map(this::toResponseDto).collect(Collectors.toList());
    }

    @Override
    public List<SessionResponseDto> findAllSessionByTutorId(Long tutorId) {
        List<Session> sessionList = sessionRepository.findAllByTutorId(tutorId);
        return sessionList.stream().map(this::toResponseDto).collect(Collectors.toList());
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
                    toggleSessionDto.getIsCompleted()
            );
            sessionRepository.save(session);
            return true;
        }
        return false;
    }

}
