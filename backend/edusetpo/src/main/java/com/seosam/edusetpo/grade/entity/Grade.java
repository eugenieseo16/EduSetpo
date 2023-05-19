package com.seosam.edusetpo.grade.entity;

import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.text.DateFormat;
import java.time.LocalDate;
import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Getter
@Setter
@Builder
@Table(name = "grade")
public class Grade {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "grade_id", nullable = false)
    private Long gradeId;

    @Column(name = "category_id", nullable = false)
    private Long categoryId;

    @Column(name = "student_lesson_id", nullable = false)
    private Long studentLessonId;

    @Column(name = "exam_title", nullable = false)
    private String examTitle;

    @Column(name = "score", nullable = false)
    private Long score;

    @Column(name = "exam_date", nullable = false)
    private LocalDate examDate;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;

    public void updateGrade(Long categoryId, String examTitle, Long score, LocalDate examDate) {
        this.categoryId = categoryId;
        this.examTitle = examTitle;
        this.score = score;
        this.examDate = examDate;
    }


}
