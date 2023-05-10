package com.seosam.edusetpo.lessonTag.service;

import com.seosam.edusetpo.lessonTag.dto.FindTagsDto;

import java.util.List;

public interface LessonTagService {

    // create
    public Object addLessonTag(Long tutorId, Long lessonId, List<Long> tags);

    // read
    public List findTags(Long lessonId);

}
