package com.seosam.edusetpo.session.dto;

import com.seosam.edusetpo.lesson.entity.Lesson;
import com.seosam.edusetpo.lessonTag.dto.FindTagsDto;
import com.seosam.edusetpo.lessonTag.entity.LessonTag;
import com.seosam.edusetpo.student.entity.Student;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

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

    // 학생, 태그
    private List<Student> studentList;
    private List<FindTagsDto> findTagsDtoList;

}
