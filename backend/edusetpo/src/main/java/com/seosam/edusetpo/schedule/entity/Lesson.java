package com.seosam.edusetpo.schedule.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.seosam.edusetpo.tutor.entity.Tutor;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@ToString
@Table(name = "lesson")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Lesson {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ToString.Exclude
    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="tutor_id", nullable = false) // foreignKey = @ForeignKey(ConstraintMode.NO_CONSTRAINT) // 물리적인 관계 X
    private Tutor tutor;

    private LocalDate startDate;
}
