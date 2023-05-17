package com.seosam.edusetpo.session.service;

import com.seosam.edusetpo.lessonTag.dto.FindTagsDto;
import com.seosam.edusetpo.lessonTag.entity.LessonTag;
import com.seosam.edusetpo.session.dto.SessionDto;
import com.seosam.edusetpo.session.dto.SessionResponseDto;
import com.seosam.edusetpo.session.dto.ToggleSessionDto;
import com.seosam.edusetpo.session.dto.UpdateSessionDto;
import com.seosam.edusetpo.session.entity.Session;
import com.seosam.edusetpo.student.entity.Student;
import com.seosam.edusetpo.studentlesson.entity.StudentLesson;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.Month;
import java.util.List;
import java.util.Optional;

public interface SessionService {

    // create
    Optional<Long> addSession(Long tutorId, SessionDto sessionDto);
    Optional<Long> addSessionAutomatically(Long tutorId, List<Month> monthList);

    // read
    Optional<SessionResponseDto> findSession(Long sessionId);
    List<SessionResponseDto> findAllSessionByLessonId(Long lessonId);
    List<SessionResponseDto> findAllSessionByActualDate(Long tutorId, LocalDate actualDate);
    List<SessionResponseDto> findAllSessionByTutorId(Long tutorId);
    List<SessionResponseDto> findAllSessionByTutorIdAndLessonId(Long tutorId, Long lessonId);


    // update
    boolean updateSession(Long tutorId, Long sessionId, UpdateSessionDto updateSessionDto);
    boolean toggleSession(Long tutorId, Long sessionId, ToggleSessionDto toggleSessionDto);

    // delete
    boolean deleteSession(Long tutorId, LocalDate currentDate);

    // DB -> 서버
    default SessionResponseDto toResponseDto(Session session, List<Student> studentList, List<FindTagsDto> findTagsDtoList) {
        return SessionResponseDto.builder()
                .sessionId(session.getSessionId())
                .lesson(session.getLesson())
                .isCompleted(session.getIsCompleted())
                .memo(session.getMemo())
                .actualDate(session.getActualDate())
                .startTime(session.getStartTime())
                .endTime(session.getEndTime())
                .duration(session.getDuration())
                .studentList(studentList)
                .findTagsDtoList(findTagsDtoList)
                .build();
    }

    // 서버 -> DB
    default Session toEntity(Long tutorId, SessionDto sessionDto) {
        return Session.builder()
                .tutorId(tutorId)
                .lessonId(sessionDto.getLessonId())
                .isCompleted(sessionDto.getIsCompleted())
                .memo(sessionDto.getMemo())
                .defaultDate(sessionDto.getDefaultDate())
                .actualDate(sessionDto.getActualDate())
                .startTime(sessionDto.getStartTime())
                .endTime(sessionDto.getEndTime())
                .duration(sessionDto.getDuration())
                .createdAt(LocalDateTime.now())
                .build();
    }

}
