package com.seosam.edusetpo.session.entity;

import com.seosam.edusetpo.studentlesson.entity.StudentLesson;
import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

@Getter
@Setter
@Entity
@Table(name = "session")
public class Session {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "session_id", nullable = false)
    private Long sessionId;

    // 식별관계?(안의 모든 값을 사용할 경우)
//    @ManyToOne
//    @JoinColumn(name = "student_lesson_id", insertable = false, updatable = false)
//    private StudentLesson studentLesson;
    @Column(name = "student_lesson_id", nullable = false)
    private Long studentLessonId;

    @Column(name = "tutor_id", nullable = false)
    private Long tutorId;

    @Column(name = "is_completed", nullable = false)
    private Boolean isCompleted = false;

    @Column(name = "memo")
    private String memo;

    @Column(name = "default_date", nullable = false)
    private LocalDate defaultDate;

    @Column(name = "actual_date", nullable = false)
    private LocalDate actualDate;

    @Column(name = "lesson_day", nullable = false)
    private Byte lessonDay;

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


    public void updateSession(String memo, LocalDate actualDate, byte classDay, LocalTime startTime, LocalTime endTime, short duration) {
        this.memo = memo;
        this.actualDate = actualDate;
        this.lessonDay = lessonDay;
        this.startTime = startTime;
        this.endTime = endTime;
        this.duration = duration;
    }

    public void toggleSession(boolean isCompleted) {
        this.isCompleted = isCompleted;
    }

    public void addTimeLapse(String timeLapse) {
        this.timeLapse = timeLapse;
    }
}