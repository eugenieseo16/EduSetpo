package com.seosam.edusetpo.session.repository;

import forpjt.practice.session.entity.Session;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SessionRepository  extends JpaRepository<Session, Long> {

    
}
