package com.seosam.edusetpo.schedule.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.seosam.edusetpo.lesson.entity.Lesson;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Getter
@Setter
@Entity
@ToString
@Table(name = "schedule")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
public class Schedule {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "schedule_id", nullable = false)
    private Long scheduleId;

    @ToString.Exclude
    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="lesson_id", nullable = false, insertable = false, updatable = false)
    private Lesson lesson;

    @Column(name = "lesson_day", nullable = false)
    private Integer lessonDay;

    @Column(name = "start_time", nullable = false)
    private LocalTime startTime;

    @Column(name = "end_time", nullable = false)
    private LocalTime endTime;

    @Column(name = "duration", nullable = false)
    private Integer duration;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;

//    public Schedule(Lesson lesson, Integer lessonDay, LocalTime startTime, LocalTime endTime, Integer duration, LocalDateTime createdAt) {
//        this.lesson = lesson;
//        this.lessonDay = lessonDay;
//        this.startTime = startTime;
//        this.endTime = endTime;
//        this.duration = duration;
//        this.createdAt = createdAt;
//    }
}
