package com.seosam.edusetpo.gradeCategory.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "grade_category")
public class GradeCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "grade_category_id")
    private Long gradeCategoryId;

    @Column(name = "tutor_id")
    private Long tutorId;

    @Column(name = "category")
    private String category;
}
