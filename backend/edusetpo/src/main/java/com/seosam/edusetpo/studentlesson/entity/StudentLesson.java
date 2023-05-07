package com.seosam.edusetpo.studentlesson.entity;

import com.seosam.edusetpo.lesson.entity.Lesson;
import com.seosam.edusetpo.student.entity.Student;
import lombok.*;

import javax.persistence.*;

@Getter
@Entity
@Table(name = "student_lesson")
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class StudentLesson {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "student_lesson_id", nullable = false)
    private Long studentLessonId;

    @Column(name = "student_id", nullable = false)
    private Long studentId;

    @ManyToOne
    @JoinColumn(name = "student_id", updatable = false, insertable = false)
    private Student student;

    @Column(name = "lesson_id", nullable = false)
    private Long lessonId;

    @ManyToOne
    @JoinColumn(name = "lesson_id", updatable = false, insertable = false)
    private Lesson lesson;

    @Column(name = "is_active", nullable = false)
    private Boolean isActive;

    public void toggleStudentLesson(Boolean isActive) {
        this.isActive = isActive;
    }

}