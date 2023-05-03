package com.seosam.edusetpo.parent_student.entity;

import com.seosam.edusetpo.parent.entity.Parent;
import com.seosam.edusetpo.student.entity.Student;
import lombok.*;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "parent_student") // "parent_student" 테이블과 매핑되는 Entity

public class ParentStudent {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "parent_student_id", nullable = false)
    private Long parentStudentId;

    @ManyToOne // parent_id를 외래키(FK)로 참조하는 Many-to-One 관계 설정
    @JoinColumn(name = "parent_id", nullable = false) // "parent_id" 칼럼과 매핑되는 외래키 설정
    private Parent parent;

    @ManyToOne // student_id를 외래키(FK)로 참조하는 Many-to-One 관계 설정
    @JoinColumn(name = "student_id", nullable = false) // "student_id" 칼럼과 매핑되는 외래키 설정
    private Student student;

    @Builder
    public ParentStudent(Parent parent, Student student) {
        this.parent = parent;
        this.student = student;
    }
}
