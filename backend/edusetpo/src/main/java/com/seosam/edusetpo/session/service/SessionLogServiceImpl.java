package com.seosam.edusetpo.session.service;

import com.seosam.edusetpo.session.dto.SessionLogDto;
import com.seosam.edusetpo.session.entity.Session;
import com.seosam.edusetpo.session.entity.SessionLog;

import java.time.LocalDateTime;
import java.util.Optional;

public class SessionLogServiceImpl implements SessionLogService{
    @Override
    public Optional<Long> addSessionLog(Long sessionId, SessionLogDto sessionLogDto) {
        Optional<SessionLog> optionalSessionLog = Optional.ofNullable(SessionLog.builder()
                .sessionId(sessionId)
                .beforeDate(sessionLogDto.getBeforeDate())
                .afterDate(sessionLogDto.getAfterDate())
                .createdAt(LocalDateTime.now())
                .build());
        if (optionalSessionLog.isEmpty()) {
            return Optional.empty();
        }
        return Optional.of(optionalSessionLog.get().getSessionLogId());
    }
}
