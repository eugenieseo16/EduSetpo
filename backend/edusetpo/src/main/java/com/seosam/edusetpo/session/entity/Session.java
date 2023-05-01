package com.seosam.edusetpo.session.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalTime;

@Getter
@Setter
@Entity
@Table(name = "session")
public class Session {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "student_class_id", nullable = false)
    private Long sessionId;

    @Column(name = "is_completed", nullable = false)
    private Boolean isCompleted = false;

    @Column(name = "memo")
    private String memo;

    @Column(name = "default_date", nullable = false)
    private LocalDate defaultDate;

    @Column(name = "actual_date", nullable = false)
    private LocalDate actualDate;

    @Column(name = "class_day", nullable = false)
    private Byte classDay;

    @Column(name = "start_time", nullable = false)
    private LocalTime startTime;

    @Column(name = "end_time", nullable = false)
    private LocalTime endTime;

    @Column(name = "duration", nullable = false)
    private Short duration;

    @Column(name = "created_at", nullable = false)
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate createdAt;

    @Lob // 대용량
    @Column(name = "time_lapse")
    private String timeLapse;


    public void updateSession(boolean isCompleted, String memo, LocalDate actualDate, byte classDay, LocalTime startTime, LocalTime endTime, short duration, String timeLapse) {
        this.isCompleted = isCompleted;
        this.memo = memo;
        this.actualDate = actualDate;
        this.classDay = classDay;
        this.startTime = startTime;
        this.endTime = endTime;
        this.duration = duration;
        this.timeLapse = timeLapse;
    }
}