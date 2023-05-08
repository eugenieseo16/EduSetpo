package com.seosam.edusetpo.schedule.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.seosam.edusetpo.lesson.entity.Lesson;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Getter
@Entity
@ToString
@Table(name = "schedule")
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Schedule {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "schedule_id", nullable = false)
    private Long scheduleId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="lesson_id", insertable = false, updatable = false)
    private Lesson lesson;

    @Column(name = "lesson_id", nullable = false)
    private Long lessonId;

    @Column(name = "lesson_day", nullable = false)
    private String lessonDay;

    @Column(name = "start_time", nullable = false)
    private LocalTime startTime;

    @Column(name = "end_time", nullable = false)
    private LocalTime endTime;

    @Column(name = "duration", nullable = false)
    private Integer duration;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;

}
