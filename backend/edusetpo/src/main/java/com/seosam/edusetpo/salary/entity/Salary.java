package com.seosam.edusetpo.salary.entity;

import com.seosam.edusetpo.studentlesson.entity.StudentLesson;
import com.seosam.edusetpo.tutor.entity.Tutor;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Builder
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "salary")
public class Salary {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "salary_id", nullable = false)
    private Long salaryId;

    @Column(name = "student_lesson_id", nullable = false)
    private Long studentLessonId;

    @ManyToOne
    @JoinColumn(name = "student_lesson_id", insertable = false, updatable = false)
    private StudentLesson studentLesson;

    @Column(name = "tutor_id", nullable = false)
    private Long tutorId;

    @ManyToOne
    @JoinColumn(name = "tutor_id", insertable = false, updatable = false)
    private Tutor tutor;

    @Column(name = "salary", nullable = false)
    private Integer salary;

    @Column(name = "sum_time", nullable = false)
    private Short sumTime;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;

    @Column(name = "is_paid", nullable = false)
    private Boolean isPaid;

    public void toggleSalary(boolean isPaid) {
        this.isPaid = isPaid;
    }

}
