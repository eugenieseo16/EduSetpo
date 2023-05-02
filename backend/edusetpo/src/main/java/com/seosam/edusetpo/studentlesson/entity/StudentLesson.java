package com.seosam.edusetpo.studentlesson.entity;

import com.seosam.edusetpo.student.entity.Student;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "student_class")
public class StudentLesson {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "student_lesson_id", nullable = false)
    private Long studentLessonId;

//    @ManyToOne
//    @Column(name = "student_id", nullable = false)
//    private Student student;

//    @ManyToOne
//    @Column(name = "lesson_id", nullable = false)
//    private Lesson lesson;

}