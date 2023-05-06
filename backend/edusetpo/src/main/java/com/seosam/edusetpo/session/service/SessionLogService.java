package com.seosam.edusetpo.session.service;

import com.seosam.edusetpo.session.dto.SessionLogDto;
import com.seosam.edusetpo.session.entity.SessionLog;

import java.time.LocalDateTime;
import java.util.Optional;

public interface SessionLogService {
    Optional<Long> addSessionLog(Long sessionId, SessionLogDto sessionLogDto);

    // 서버 -> DB
    default SessionLog toEntity(Long sessionId, SessionLogDto sessionLogDto) {
        return SessionLog.builder()
                .sessionId(sessionId)
                .beforeDate(sessionLogDto.getBeforeDate())
                .afterDate(sessionLogDto.getAfterDate())
                .createdAt(LocalDateTime.now())
                .build();

    }
}
