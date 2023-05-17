package com.seosam.edusetpo.session.entity;

import com.seosam.edusetpo.lesson.entity.Lesson;
import com.seosam.edusetpo.studentlesson.entity.StudentLesson;
import com.seosam.edusetpo.tutor.entity.Tutor;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;

@Getter
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "session")
public class Session {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "session_id", nullable = false)
    private Long sessionId;

//    @Column(name = "student_lesson_id", nullable = false)
//    private Long studentLessonId;
//
//    @ManyToOne
//    @JoinColumn(name = "student_lesson_id", insertable = false, updatable = false)
//    private StudentLesson studentLesson;
    @Column(name = "lesson_id", nullable = false)
    private Long lessonId;

    @ManyToOne
    @JoinColumn(name = "lesson_id", insertable = false, updatable = false)
    private Lesson lesson;

    @Column(name = "tutor_id", nullable = false)
    private Long tutorId;

    @ManyToOne
    @JoinColumn(name = "tutor_id", insertable = false, updatable = false)
    private Tutor tutor;

    @Column(name = "is_completed", nullable = false)
    private Boolean isCompleted;

    @Column(name = "memo")
    private String memo;

    @Column(name = "default_date", nullable = false)
    private LocalDate defaultDate;

    @Column(name = "actual_date", nullable = false)
    private LocalDate actualDate;

//    @Column(name = "lesson_day", nullable = false)
//    private Byte lessonDay;

    @Column(name = "start_time", nullable = false)
    private LocalTime startTime;

    @Column(name = "end_time", nullable = false)
    private LocalTime endTime;

    @Column(name = "duration", nullable = false)
    private Short duration;

    @Column(name = "created_at", nullable = false)
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDateTime createdAt;

    @Lob // 대용량
    @Column(name = "time_lapse")
    private String timeLapse;

    // TODO one to many 관계 설정(테스트 필요)
    @OneToMany(mappedBy = "session", cascade = CascadeType.REMOVE)
    private List<SessionLog> sessionLogs;


    public void updateSession(String memo,
                              LocalDate actualDate,
                              LocalTime startTime,
                              LocalTime endTime,
                              short duration,
                              Boolean isCompleted
                              ) {
        this.memo = memo;
        this.actualDate = actualDate;
        this.startTime = startTime;
        this.endTime = endTime;
        this.duration = duration;
        this.isCompleted = isCompleted;
    }

    public void toggleSession(Boolean isCompleted) {
        this.isCompleted = isCompleted;
    }

    public void addTimeLapse(String timeLapse) {
        this.timeLapse = timeLapse;
    }
}