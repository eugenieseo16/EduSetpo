package com.seosam.edusetpo.session.dto;

import com.seosam.edusetpo.lesson.entity.Lesson;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SessionResponseDto {

    private Long sessionId;
    private Lesson lesson;
    private Boolean isCompleted;
    private String memo;
    private LocalDate actualDate;
    private LocalTime startTime;
    private LocalTime endTime;
    private Short duration;

}
