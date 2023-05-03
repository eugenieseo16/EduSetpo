package com.seosam.edusetpo.children.entity;

import com.seosam.edusetpo.parent.entity.Parent;
import lombok.*;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "children") // "children" 테이블과 매핑되는 Entity

public class Children {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "child_id", nullable = false)
    private Long childId;

    @Column(name = "parent_id", nullable = false)
    private Long parentId;

    @Column(name = "child_name", nullable = false, length = 16)
    private String childName;

    @Column(name = "student_lesson_id", nullable = false)
    private Long studentLessonId;

    // child_name을 변경하는 메서드
    public void updateChildName(String childName) {
        this.childName = childName;
    }

    // 빌더 패턴을 사용한 생성자
    @Builder
    public Children(Long childId, Long parentId, String childName, Long studentLessonId) {
        this.childId = childId;
        this.parentId = parentId;
        this.childName = childName;
        this.studentLessonId = studentLessonId;
    }
}
