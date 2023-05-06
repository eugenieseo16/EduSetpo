package com.seosam.edusetpo.session.repository;

import com.seosam.edusetpo.session.entity.SessionLog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SessionLogRepository extends JpaRepository<SessionLog, Long> {
}
