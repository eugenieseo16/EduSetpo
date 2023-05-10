package com.seosam.edusetpo.lessonTag.service;

import com.seosam.edusetpo.lessonTag.dto.FindTagsDto;
import com.seosam.edusetpo.lessonTag.entity.LessonTag;

import java.util.List;

public interface LessonTagService {

    // create
    Object addLessonTag(Long tutorId, Long lessonId, List<Long> tags);

    // read
    List findTags(Long lessonId);

    //update
    LessonTag modifyLessonTag(List<Long> tags, Long lessonId, Long tutorId);


}
