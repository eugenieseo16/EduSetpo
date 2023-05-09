package com.seosam.edusetpo.lessonTag.service;

import com.seosam.edusetpo.lesson.entity.Lesson;
import com.seosam.edusetpo.lessonTag.dto.FindTagsDto;
import com.seosam.edusetpo.lessonTag.entity.LessonTag;
import com.seosam.edusetpo.lessonTag.repository.LessonTagRepository;
import com.seosam.edusetpo.tutor.dto.FindTagDto;
import org.springframework.stereotype.Service;
import springfox.documentation.service.Tag;
import springfox.documentation.service.Tags;

import java.util.ArrayList;
import java.util.List;

@Service
public class LessonTagServiceImpl implements LessonTagService{

    private LessonTagRepository lessonTagRepository;

    public LessonTagServiceImpl(LessonTagRepository lessonTagRepository) {
        this.lessonTagRepository = lessonTagRepository;
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
    public LessonTag addLessonTag(Long tutorId, List<Long> tags) {

        System.out.println(tags);

        for (Long tag : tags) {
            System.out.println(tag);
            // tagId가 tutorId의 tagId가 맞는지 검증

            LessonTag lessonTag = new LessonTag();

            lessonTag = LessonTag.builder()
                    .tag(lessonTag.getTag())
                    .tagId(lessonTag.getTagId())
                    .build();

            lessonTagRepository.save(lessonTag);
        }

        return null;
    }
}
