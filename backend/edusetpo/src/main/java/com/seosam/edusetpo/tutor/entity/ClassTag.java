package com.seosam.edusetpo.tutor.entity;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "class_tag")
@NoArgsConstructor (access = AccessLevel.PROTECTED)
public class ClassTag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "class_tag_id", nullable = false)
    private Long classTagId;

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
        return classTagId;
    }

    public void setId(Long id) {
        this.classTagId = id;
    }

    @Builder
    public ClassTag(String tag, Long tutorId) {
        this.tag = tag;
        this.tutorId = tutorId;
    }

}