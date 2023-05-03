package com.seosam.edusetpo.tutor.entity;

import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "lesson_tag")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class LessonTag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "lesson_tag_id", nullable = false)
    private Long lessonTagId;

    @Column(name = "tutor_id", nullable = false)
    private Long tutorId;

    @Column(name = "tag", nullable = false)
    private String tag;

    @Builder
    public LessonTag(String tag, Long tutorId) {
        this.tag = tag;
        this.tutorId = tutorId;
    }

}