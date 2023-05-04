package com.seosam.edusetpo.tutor.service;

import com.seosam.edusetpo.tutor.dto.CreateTagDto;
import com.seosam.edusetpo.tutor.dto.FindTagDto;
import com.seosam.edusetpo.tutor.entity.Tag;
import com.seosam.edusetpo.tutor.repository.TagRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TagServiceImpl implements TagService{

    private final com.seosam.edusetpo.tutor.repository.TagRepository TagRepository;

    public TagServiceImpl(TagRepository TagRepository) {
        this.TagRepository = TagRepository;
    }

    @Override
    public List<CreateTagDto> createTag(Long tutorId, String tag) {
        return null;
    }

    @Override
    public FindTagDto findTag(long tutorId, String input) {
//        List<Tag> findTags = TagRepository.findALLByTutorIdAndTag(tutorId, input);
        return null;
    }

}
