package com.seosam.edusetpo.homework.entity;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Getter
@Setter
@Builder
@Table(name = "homework")

public class Homework {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="homework_id", nullable = false)
    private Long homeworkId;

    @Column(name = "student_id", nullable = false)
    private Long studentId;

    @Column(name = "session_id", nullable = false)
    private Long sessionId;

    @Column(name = "content", nullable = false)
    private String content;

    @Column(name = "is_completed", nullable = false)
    private Boolean isCompleted;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;


    public void completeHomework(boolean isCompleted) {
        this.isCompleted = !isCompleted;
    }

    public void updateHomework(String content, Long sessionId) {
        this.content = content;
        this.sessionId = sessionId;
    }

}
