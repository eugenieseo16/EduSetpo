package com.seosam.edusetpo.student.entity;

import lombok.*;

import javax.persistence.*;

@AllArgsConstructor // 파라미터가 없는 기본 생성자 생성
@NoArgsConstructor // 모든 필드값을 파라미터로 받는 생성자 생성
@Getter
@Setter
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

    @Column(name = "student_name", nullable = false, length = 10)
    private String studentName;

    @Column(name = "student_contact", length = 20)
    private String studentContact;

    @Column(name = "parent_contact", length = 20)
    private String parentContact;

    @Column(name = "is_active", nullable = false)
    private Boolean isActive = false;

    public void updateIsActive(boolean isActive) {
        this.isActive = isActive;
    }

    public void updateContact(String studentContact, String parentContact) {
        this.studentContact = studentContact;
        this.parentContact = parentContact;
    }

}