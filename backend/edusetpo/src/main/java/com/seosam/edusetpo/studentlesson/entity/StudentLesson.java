package com.seosam.edusetpo.studentlesson.entity;

import com.seosam.edusetpo.lesson.entity.Lesson;
import com.seosam.edusetpo.student.entity.Student;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "student_lesson")
public class StudentLesson {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "student_lesson_id", nullable = false)
    private Long studentLessonId;

    @ManyToOne
    @JoinColumn(name = "student_id", nullable = false, updatable = false, insertable = false)
    private Student student;

    @ManyToOne
    @JoinColumn(name = "lesson_id", nullable = false, updatable = false, insertable = false)
    private Lesson lesson;

}