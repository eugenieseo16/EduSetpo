package com.seosam.edusetpo.tutor.entity;

import com.seosam.edusetpo.lessonTag.entity.LessonTag;
import com.seosam.edusetpo.tutor.dto.FindTagDto;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Entity
@Table(name = "tag")
@NoArgsConstructor
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