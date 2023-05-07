package com.seosam.edusetpo.lesson.service;

import com.seosam.edusetpo.lesson.dto.CreateLessonDto;

public interface LessonService {

    // create
    public Object addLesson(CreateLessonDto LessonDto);

    // read
    public Object findLesson(Long tutorId, Long lessonId);

    // put
    public Object deactivateLesson(Long tutorId, Long lessonId);
    public Object modifyLesson();
}
