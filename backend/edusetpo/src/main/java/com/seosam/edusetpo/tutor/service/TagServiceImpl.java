package com.seosam.edusetpo.tutor.service;

import com.seosam.edusetpo.tutor.dto.CreateTagDto;
import com.seosam.edusetpo.tutor.dto.FindTagDto;
import com.seosam.edusetpo.tutor.entity.Tag;
import com.seosam.edusetpo.tutor.repository.TagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class TagServiceImpl implements TagService{

    @Autowired
    private final TagRepository tagRepository;

    public TagServiceImpl(TagRepository tagRepository) {
        this.tagRepository = tagRepository;
    }

    @Override
    public Tag addTag(Long tutorId, CreateTagDto tagDto) {
        Tag tag = new Tag();

        // TODO.존재하는 id인지 조건 처리

        // 이미 존재하는 태그는 아닌지 조건 처리
        List<Tag> tags = tagRepository.findALLByTutorIdAndTag(1L, tagDto.getTag());

        if (tags.isEmpty()) {

            tag = Tag.builder()
                    .tag(tagDto.getTag())
                    .tutorId(1L)
                    .build();

            tagRepository.save(tag);

            return tag;
        }

        return null;
    }

    @Override
    public List<FindTagDto> findTag(long tutorId, String input) {

        List<Tag> findTags = tagRepository.findAllByTutorId(0L);

        List<FindTagDto> tags = new ArrayList<>();

        for (Tag tag : findTags) {

            Long tagId = tag.getTagId();

            if (tag.getTag().contains(input)) {
                tags.add(FindTagDto.builder()
                        .tag(tag.getTag())
                        .tagId(Math.toIntExact(tagId))
                        .build());
            }
        }

        return tags;
    }
}
