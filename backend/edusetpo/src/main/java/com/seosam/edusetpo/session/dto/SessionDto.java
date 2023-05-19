package com.seosam.edusetpo.session.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.*;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalTime;

/**
 * A DTO for the {@link com.seosam.edusetpo.session.entity.Session} entity
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SessionDto {

//    private Long sessionId;
    private Long lessonId;
    private Boolean isCompleted;
    private String memo;
    private LocalDate defaultDate;
    private LocalDate actualDate;
    private LocalTime startTime;
    private LocalTime endTime;
    private Short duration;
}