package com.seosam.edusetpo.lesson.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.seosam.edusetpo.tutor.entity.Tutor;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Entity
@ToString
@Table(name = "lesson")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
public class Lesson {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "lesson_id", nullable = false)
    private Long lessonId;

    @ToString.Exclude
    @JsonIgnore
    @Column(name = "tutor_id", nullable = false)
    private Long tutorId;

    @Column(name = "start_date", nullable = false)
    private LocalDate startDate;

    @Column(name = "end_date")
    private LocalDate endDate;

    @Column(name = "lesson_name", nullable = false)
    private String lessonName;

    @Column(name = "memo")
    private String memo;

    @Column(name = "total_time", nullable = false)
    private Integer totalTime;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;

    @Column(name = "is_ended", nullable = false)
    private boolean isEnded;

//    public Lesson(Long lessonId, Long tutorId, LocalDate startDate, LocalDate endDate, String lessonName, String memo, Integer totalTime, LocalDateTime createdAt, boolean isEnded) {
//        this.lessonId = lessonId;
//        this.tutorId = tutorId;
//        this.startDate = startDate;
//        this.endDate = endDate;
//        this.lessonName = lessonName;
//        this.memo = memo;
//        this.totalTime = totalTime;
//        this.createdAt = createdAt;
//        this.isEnded = isEnded;
//    }
}
