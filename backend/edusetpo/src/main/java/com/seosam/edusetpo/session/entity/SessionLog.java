package com.seosam.edusetpo.session.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "session_log")
public class SessionLog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "session_log_id", nullable = false)
    private Long sessionLogId;

    @Column(name = "session_id", nullable = false)
    private Long sessionId;

    @ManyToOne
    @JoinColumn(name = "session_id", insertable = false, updatable = false)
    private Session session;

    @Column(name = "before_date", nullable = false)
    private LocalDate beforeDate;

    @Column(name = "after_date", updatable = false)
    private LocalDate afterDate;

    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

}
