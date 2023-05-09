package com.seosam.edusetpo.tutor.service;

import com.seosam.edusetpo.tutor.dto.CreateTagDto;
import com.seosam.edusetpo.tutor.entity.Tag;

import java.util.List;

public interface TagService {

    // create
    public Object addTag(Long tutorId, CreateTagDto tagDto);

    // find
    public List findTag(long tutorId, String input);

}
