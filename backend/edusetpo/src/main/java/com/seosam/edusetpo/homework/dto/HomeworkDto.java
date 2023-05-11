package com.seosam.edusetpo.homework.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class HomeworkDto {
    private Long homeworkId;
    private Long studentId;
    private Long sessionId;
    private String content;
    private Boolean isCompleted;
}
