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

        List<LessonTag> findTags = lessonTagRepository.findAllByLessonId(lessonId);

        List<FindTagsDto> tags = new ArrayList<>();

        for (LessonTag tag: findTags) {

            tags.add(FindTagsDto.builder()
                    .tagId(Math.toIntExact(tag.getTagId()))
                    .tag(tag.getTag())
                    .build());
        }

        return tags;
    }

    @Override
    public LessonTag addLessonTag(Long tutorId, Long lessonId, List<Long> tags) {

        for (Long tagId : tags) {
//            System.out.println("tagId; " + tagId);
//            System.out.println("tutorId: " + tutorId);
//
//            System.out.println(lessonTagRepository.findByTutorIdAndAndTagId(tutorId, tagId).isPresent());
//            tagRepository.


//            if (lessonTagRepository.findByTutorIdAndAndTagId(tutorId, tagId).isPresent()){

                LessonTag lessonTag = new LessonTag();

                lessonTag = LessonTag.builder()
                        .tag(lessonTag.getTag())
                        .tagId(tagId)
                        .tutorId(tutorId)
                        .lessonId(lessonId)
                        .build();

                lessonTagRepository.save(lessonTag);
                System.out.println("저장댓당 헤헤");
//            }
        }

        return null;
    }

    @Override
    public LessonTag modifyLessonTag(List<Long> tags, Long lessonId, Long tutorId) {

        List<LessonTag> currentLessonTags = lessonTagRepository.findAllByLessonIdAndAndTutorId(lessonId, tutorId);


        List<Long> currentLessonTagIds = new ArrayList<>();

        for (LessonTag lessonTag : currentLessonTags) {
            currentLessonTagIds.add(lessonTag.getTagId());
        }

        // 새로운지 검증하고 row 추가
        for (Long tagId : tags) {
            if (currentLessonTagIds.contains(tagId) == false) {

                LessonTag newLessonTag = LessonTag.builder()
                            .tag(tagRepository.findByTagId(tagId))
                            .tagId(tagId)
                            .tutorId(tutorId)
                            .lessonId(lessonId)
                            .build();

                lessonTagRepository.save(newLessonTag);
            }
        }

        // 기존거 - 새로들어온거 차집합은 row 삭제
        currentLessonTagIds.removeAll(tags);

        for (Long lessonTagId : currentLessonTagIds) {
            lessonTagRepository.deleteByLessonIdAndTutorIdAndTagId(lessonId, tutorId, lessonTagId);
        }


        return null;
    }
}
