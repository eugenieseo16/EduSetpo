package com.seosam.edusetpo.tutor.service;

import com.seosam.edusetpo.tutor.dto.CreateTagDto;
import com.seosam.edusetpo.tutor.dto.FindTagDto;

import java.util.List;

public interface TagService {

    // create
    List<CreateTagDto> createTag(Long tutorId, String tag);

    // find
    public FindTagDto findTag(long tutorId, String input);



}
