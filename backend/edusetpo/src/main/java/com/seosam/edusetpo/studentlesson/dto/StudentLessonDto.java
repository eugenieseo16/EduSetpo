package com.seosam.edusetpo.studentlesson.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class StudentLessonDto {
    private Long studentLessonId;
    private String lessonName;
}
