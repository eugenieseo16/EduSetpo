package com.seosam.edusetpo.student.entity;

import com.seosam.edusetpo.lesson.entity.Lesson;
import com.seosam.edusetpo.tutor.entity.Tutor;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@AllArgsConstructor // 파라미터가 없는 기본 생성자 생성
@NoArgsConstructor // 모든 필드값을 파라미터로 받는 생성자 생성
@Getter
@Entity
@Builder
@Table(name = "student")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "student_id", nullable = false)
    private Long studentId;

    @Column(name = "tutor_id", nullable = false)
    private Long tutorId;

    // FIXME manytoone 관계 막 설정했는데 이거떄매 디비 문제생길 수 있음
    @ManyToOne
    @JoinColumn(name = "tutor_id", insertable = false, updatable = false)
    private Tutor tutor;

    @Column(name = "student_name", nullable = false, length = 10)
    private String studentName;

    @Column(name = "student_contact", length = 20)
    private String studentContact;

    @Column(name = "parent_contact", length = 20)
    private String parentContact;

    @Column(name = "is_active", nullable = false)
    private Boolean isActive;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;

    public void toggleStudent(boolean isActive) {
        this.isActive = isActive;
    }

    public void updateStudent(String studentName, String studentContact, String parentContact) {
        this.studentName = studentName;
        this.studentContact = studentContact;
        this.parentContact = parentContact;
    }

}