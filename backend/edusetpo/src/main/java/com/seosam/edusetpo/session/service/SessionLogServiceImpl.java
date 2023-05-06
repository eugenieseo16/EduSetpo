package com.seosam.edusetpo.session.service;

import com.seosam.edusetpo.session.dto.SessionLogDto;
import com.seosam.edusetpo.session.entity.SessionLog;
import com.seosam.edusetpo.session.repository.SessionLogRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class SessionLogServiceImpl implements SessionLogService{

    private final SessionLogRepository sessionLogRepository;

    public SessionLogServiceImpl(SessionLogRepository sessionLogRepository) {
        this.sessionLogRepository = sessionLogRepository;
    }

    @Override
    public Optional<Long> addSessionLog(Long sessionId, SessionLogDto sessionLogDto) {
        SessionLog sessionLog = toEntity(sessionId, sessionLogDto);
        sessionLogRepository.save(sessionLog);
        return Optional.of(sessionLog.getSessionLogId());
    }
}
