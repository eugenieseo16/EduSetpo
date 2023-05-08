package com.seosam.edusetpo.lesson.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.seosam.edusetpo.schedule.entity.Schedule;
import com.seosam.edusetpo.tutor.entity.Tutor;
import lombok.*;

import javax.persistence.*;
import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Getter
@Entity
@Table(name = "lesson")
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Lesson {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "lesson_id", nullable = false)
    private Long lessonId;

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

    public void deactivateLesson() { this.isEnded = true; }

    public void modifyLesson(String lessonName, String memo, int totalTime) {
        this.lessonName = lessonName;
        this.memo = memo;
        this.totalTime = totalTime;
    }

    // 4주차 기준 총 수업 시간 계산
    public int calculateTotalTime(List<List<String>> schedule, int numOfSession) {
        int totalTime = 0;

        // 1주치 계산
        if (schedule.get(0).get(0).contains("DAY")) {

            for (List<String> session: schedule) {

                int startTime = (Integer.parseInt(session.get(1).substring(0, 2)) * 60) + Integer.parseInt(session.get(1).substring(3, 5));
                int endTime = (Integer.parseInt(session.get(2).substring(0, 2)) * 60) + Integer.parseInt(session.get(2).substring(3, 5));

                 totalTime += endTime - startTime;
            }

            // 4주치 계산
            return totalTime * 4;
        } else {
            return 0;
        }
    }

}
