package com.seosam.edusetpo.lesson.service;

import com.seosam.edusetpo.lesson.dto.CreateLessonDto;
import com.seosam.edusetpo.lesson.dto.ModifyLessonDto;

public interface LessonService {

    // create
    public Object addLesson(CreateLessonDto LessonDto);

    // read
    public Object findLesson(Long tutorId, Long lessonId);

    // update
    public Object deactivateLesson(Long tutorId, Long lessonId);
    public boolean modifyLesson(Long tutorId, Long lessonId, ModifyLessonDto modifyLessonDto);
}
