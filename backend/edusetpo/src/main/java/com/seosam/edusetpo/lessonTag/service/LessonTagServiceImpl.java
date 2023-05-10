package com.seosam.edusetpo.lessonTag.service;

import com.seosam.edusetpo.lesson.entity.Lesson;
import com.seosam.edusetpo.lessonTag.dto.FindTagsDto;
import com.seosam.edusetpo.lessonTag.entity.LessonTag;
import com.seosam.edusetpo.lessonTag.repository.LessonTagRepository;
import com.seosam.edusetpo.tutor.dto.FindTagDto;
import com.seosam.edusetpo.tutor.repository.TagRepository;
import org.springframework.stereotype.Service;
import springfox.documentation.service.Tag;
import springfox.documentation.service.Tags;

import java.util.ArrayList;
import java.util.List;

@Service
public class LessonTagServiceImpl implements LessonTagService{

    private LessonTagRepository lessonTagRepository;
    private TagRepository tagRepository;

    public LessonTagServiceImpl(LessonTagRepository lessonTagRepository, TagRepository tagRepository) {
        this.lessonTagRepository = lessonTagRepository;
        this.tagRepository = tagRepository;
    }

    @Override
    public List<FindTagsDto> findTags(Long lessonId) {

        List<LessonTag> findTags = lessonTagRepository.findAllByLessonIdAndTutorId(lessonId, 3L);

        List<FindTagsDto> tags = new ArrayList<>();

        for (LessonTag tag: findTags) {
            System.out.println("tag 개수 세기");

//            tags.add(FindTagsDto.builder()
//                    .tagId(Math.toIntExact(tag.getTagId()))
//                    .tag(tag.getTag().getTag())
//                    .build());
        }

        return tags;
    }

    @Override
    public LessonTag addLessonTag(Long tutorId, Long lessonId, List<Long> tags) {

        for (Long tagId : tags) {

            // TODO. tagId가 tutorId의 tagId가 맞는지 검증

            LessonTag lessonTag = new LessonTag();

            lessonTag = LessonTag.builder()
                    .tag(lessonTag.getTag())
                    .tagId(tagId)
                    .tutorId(tutorId)
                    .lessonId(lessonId)
                    .build();

            lessonTagRepository.save(lessonTag);
        }

        return null;
    }
}
