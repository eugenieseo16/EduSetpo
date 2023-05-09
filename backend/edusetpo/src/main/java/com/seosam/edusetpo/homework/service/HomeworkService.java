package com.seosam.edusetpo.homework.service;


import com.seosam.edusetpo.homework.dto.HomeworkCompleteDto;
import com.seosam.edusetpo.homework.dto.HomeworkDto;
import com.seosam.edusetpo.homework.dto.HomeworkUpdateDto;
import com.seosam.edusetpo.homework.entity.Homework;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface HomeworkService {
    // Create
    Optional<Long> createHomework(HomeworkDto homeworkDto);

    // Read
    List<HomeworkDto> findHomeworkByStudentAndSession(Long studentId, Long sessionId);

    // Update
    boolean completeHomework(Long homeworkId, HomeworkCompleteDto homeworkCompleteDto);

    boolean updateHomework(Long homeworkId, HomeworkUpdateDto homeworkUpdateDto);

    // delete
    void deleteHomework(Long homeworkId);

    default HomeworkDto toResponseDto(Homework homework) {
        return HomeworkDto.builder()
                .content(homework.getContent())
                .isCompleted(homework.getIsCompleted())
                .sessionId(homework.getSessionId())
                .studentId(homework.getStudentId())
                .build();
    }

    default Homework toEntity(HomeworkDto homeworkDto) {
        return Homework.builder()
                .studentId(homeworkDto.getStudentId())
                .sessionId(homeworkDto.getSessionId())
                .content(homeworkDto.getContent())
                .isCompleted(false)
                .createdAt(LocalDateTime.now())
                .build();
    }
}
