package com.seosam.edusetpo.tutor.entity;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "lesson_tag")
@NoArgsConstructor (access = AccessLevel.PROTECTED)
public class LessonTag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "lesson_tag_id", nullable = false)
    private Long lessonTagId;

    @Column(name = "tutor_id", nullable = false)
    private Long tutorId;

    @Column(name = "tag", nullable = false)
    private String tag;

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }

    public Long getTutorId() {
        return tutorId;
    }

    public void setTutorId(Long tutorId) {
        this.tutorId = tutorId;
    }

    public Long getId() {
        return lessonTagId;
    }

    public void setId(Long id) {
        this.lessonTagId = id;
    }

    @Builder
    public LessonTag(String tag, Long tutorId) {
        this.tag = tag;
        this.tutorId = tutorId;
    }

}