package com.seosam.edusetpo.lesson.dto;

import com.seosam.edusetpo.schedule.dto.ScheduleDto;
import com.seosam.edusetpo.student.dto.FindStudentDto;
import com.seosam.edusetpo.tutor.dto.FindTagDto;
import com.seosam.edusetpo.tutor.entity.Tag;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class LessonDto {
    private Long tutorId;
    private Long lessonId;
    private String lessonName;
    private List<ScheduleDto> schedule;
    private List<FindTagDto> tags;
    private List<FindStudentDto> students;
    private LocalDate startDate;
    private String memo;

    public LessonDto(Long lessonId, Long tutorId, LocalDate startDate, LocalDate endDate, String lessonName, String memo, Integer totalTime, LocalDateTime createdAt, List<Tag> tags) {
    }
}
