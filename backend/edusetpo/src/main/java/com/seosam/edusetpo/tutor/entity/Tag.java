package com.seosam.edusetpo.tutor.entity;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@Entity
@Table(name = "tag")
@NoArgsConstructor
//        (access = AccessLevel.PROTECTED)
public class Tag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "tag_id", nullable = false)
    private Long tagId;

    @Column(name = "tutor_id", nullable = false)
    private Long tutorId;

    @Column(name = "tag", nullable = false)
    private String tag;


    @Builder
    public Tag(String tag, Long tutorId) {
        this.tag = tag;
        this.tutorId = tutorId;
    }

}