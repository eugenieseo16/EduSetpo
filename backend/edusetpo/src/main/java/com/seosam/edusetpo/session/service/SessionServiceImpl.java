package com.seosam.edusetpo.session.service;


import com.seosam.edusetpo.session.dto.SessionDto;
import com.seosam.edusetpo.session.dto.SessionLogDto;
import com.seosam.edusetpo.session.dto.ToggleSessionDto;
import com.seosam.edusetpo.session.dto.UpdateSessionDto;
import com.seosam.edusetpo.session.entity.Session;
import com.seosam.edusetpo.session.repository.SessionRepository;
import com.seosam.edusetpo.tutor.entity.Tutor;
import com.seosam.edusetpo.tutor.repository.TutorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class SessionServiceImpl implements SessionService{

    private final SessionRepository sessionRepository;
    private final TutorRepository tutorRepository;
    private final SessionLogService sessionLogService;

    public SessionServiceImpl(SessionRepository sessionRepository, TutorRepository tutorRepository, SessionLogService sessionLogService) {
        this.sessionRepository = sessionRepository;
        this.tutorRepository = tutorRepository;
        this.sessionLogService = sessionLogService;
    }

    @Override
    public Optional<Long> addSession(Long tutorId, Long studentLessonId, SessionDto sessionDto) {
        Optional<Tutor> optionalTutor = tutorRepository.findByTutorId(tutorId);
        if (optionalTutor.isEmpty()) {
            return Optional.empty();
        }
        Tutor tutor = optionalTutor.get();
        Session session = toEntity(tutorId, studentLessonId, sessionDto);
//        sessionRepository.save(session);
        return Optional.of(session.getSessionId());
    }

    @Override
    public Optional<SessionDto> findSession(Long sessionId) {
        Optional<Session> optionalSession = sessionRepository.findBySessionId(sessionId);
        if (optionalSession.isEmpty()) {
            return Optional.empty();
        }
        return optionalSession.map(this::toResponseDto);
    }

    @Override
    public List<SessionDto> findAllSessionByStudentLesson(Long studentLessonId) {
        List<Session> sessionList = sessionRepository.findAllByStudentLessonId(studentLessonId);
        return sessionList.stream().map(this::toResponseDto).collect(Collectors.toList());
    }

    @Override
    public List<SessionDto> findAllSessionByActualDate(Long tutorId, LocalDate actualDate) {
        List<Session> sessionList = sessionRepository.findAllByTutorIdAndActualDate(tutorId, actualDate);
        return sessionList.stream().map(this::toResponseDto).collect(Collectors.toList());
    }

    @Override
    public boolean updateSession(Long sessionId, UpdateSessionDto updateSessionDto) {
        Optional<Session> optionalSession = sessionRepository.findBySessionId(sessionId);
        if (optionalSession.isPresent()) {
            
            // 날짜가 변경되면 로그 입력
            if (!updateSessionDto.getActualDate().equals(optionalSession.get().getActualDate())) {
                SessionLogDto sessionLogDto = SessionLogDto.builder()
                        .beforeDate(optionalSession.get().getActualDate())
                        .afterDate(updateSessionDto.getActualDate())
                        .build();
                // 다시해야함
//                System.out.println(sessionLogDto.getBeforeDate() + "@@@@");
//                System.out.println(sessionLogService);
//                Optional<Long> optionalAddSessionLog = sessionLogService.addSessionLog(sessionId, sessionLogDto);
//                System.out.println(optionalAddSessionLog.get() + "@@@@@");
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
    public boolean toggleSession(Long sessionId, ToggleSessionDto toggleSessionDto) {
        Optional<Session> optionalSession = sessionRepository.findBySessionId(sessionId);
        if (optionalSession.isPresent()) {
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
