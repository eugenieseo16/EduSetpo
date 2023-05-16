package com.seosam.edusetpo.lesson.service;

import com.seosam.edusetpo.lesson.dto.CreateLessonDto;
import com.seosam.edusetpo.lesson.dto.ModifyLessonDto;
import com.seosam.edusetpo.lesson.entity.Lesson;

import java.util.List;
import java.util.Optional;

public interface LessonService {

    // create
    public Object addLesson(CreateLessonDto LessonDto);

    // read
    public Object findLesson(Long tutorId, Long lessonId);
    public List findLessons(Long tutorId);

    // update
    public Object deactivateLesson(Long tutorId, Long lessonId);
    public Optional<Lesson> modifyLesson(Long tutorId, Long lessonId, ModifyLessonDto lessonDto);
}
