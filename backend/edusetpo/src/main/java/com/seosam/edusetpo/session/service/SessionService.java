package com.seosam.edusetpo.session.service;

import com.seosam.edusetpo.session.dto.SessionDto;
import com.seosam.edusetpo.session.dto.ToggleSessionDto;
import com.seosam.edusetpo.session.dto.UpdateSessionDto;
import com.seosam.edusetpo.session.entity.Session;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

public interface SessionService {

    // create
    Optional<Long> addSession(Long tutorId, Long studentLessonId, SessionDto sessionDto);

    // read
    Optional<SessionDto> findSession(Long sessionId);
    List<SessionDto> findAllSessionByStudentLesson(Long studentLessonId);
    List<SessionDto> findAllSessionByActualDate(Long tutorId, LocalDate actualDate);


    // update
    boolean updateSession(Long sessionId, UpdateSessionDto updateSessionDto);
    boolean toggleSession(Long sessionId, ToggleSessionDto toggleSessionDto);

    // DB -> 서버
    default SessionDto toResponseDto(Session session) {
        return SessionDto.builder()
                .isCompleted(session.getIsCompleted())
                .memo(session.getMemo())
                .actualDate(session.getActualDate())
                .startTime(session.getStartTime())
                .endTime(session.getEndTime())
                .duration(session.getDuration())
                .build();
    }

    // 서버 -> DB
    default Session toEntity(Long tutorId, Long studentLessonId, SessionDto sessionDto) {
        return Session.builder()
                .tutorId(tutorId)
                .studentLessonId(studentLessonId)
                .isCompleted(sessionDto.getIsCompleted())
                .memo(sessionDto.getMemo())
                .defaultDate(LocalDate.now())
                .actualDate(sessionDto.getActualDate())
                .startTime(LocalTime.now())
                .endTime(LocalTime.now())
                .duration(sessionDto.getDuration())
                .createdAt(LocalDateTime.now())
                .build();
    }

}
