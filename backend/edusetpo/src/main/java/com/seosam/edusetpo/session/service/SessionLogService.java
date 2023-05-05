package com.seosam.edusetpo.session.service;

import com.seosam.edusetpo.session.dto.SessionLogDto;

import java.util.Optional;

public interface SessionLogService {
    Optional<Long> addSessionLog(Long sessionId, SessionLogDto sessionLogDto);
}
