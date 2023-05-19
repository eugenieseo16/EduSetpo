package com.seosam.edusetpo.lesson.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CreateLessonDto {
    private Long tutorId;
    private String lessonName;
    private List<List<String>> schedule;
    private List<Long> tags;
    private int numOfSession;
    private LocalDate startDate;
    private List<Long> students;
    private String memo;
}