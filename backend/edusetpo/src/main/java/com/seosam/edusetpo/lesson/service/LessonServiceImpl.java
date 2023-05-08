package com.seosam.edusetpo.lesson.service;

import com.seosam.edusetpo.lesson.dto.CreateLessonDto;
import com.seosam.edusetpo.lesson.dto.ModifyLessonDto;
import com.seosam.edusetpo.lesson.entity.Lesson;
import com.seosam.edusetpo.lesson.repository.LessonRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class LessonServiceImpl implements  LessonService{

    private final LessonRepository lessonRepository;

    public LessonServiceImpl(LessonRepository lessonRepository) {
        this.lessonRepository = lessonRepository;
    }

    @Override
    public Lesson addLesson(CreateLessonDto lessonDto) {

        Lesson lesson = new Lesson();

        int totalTime = lesson.calculateTotalTime(lessonDto.getSchedule(), lessonDto.getNumOfSession());

        lesson = Lesson.builder()
                .tutorId(lessonDto.getTutorId())
                .lessonName(lessonDto.getLessonName())
                .memo(lessonDto.getMemo())
                .startDate(lessonDto.getStartDate())
                .totalTime(totalTime)
                .createdAt(LocalDateTime.now())
                .isEnded(false)
                .build();

        lessonRepository.save(lesson);

        // TODO. 학생-수업 테이블에 적제
        
        // TODO. 태그-수업 테이블에 적재

        return lesson;
    }

    @Override
    public Optional<Lesson> findLesson(Long tutorId, Long lessonId) {
        Optional<Lesson> lesson = lessonRepository.findByTutorIdAndAndLessonId(5L, 1L);
        return lesson;
    }

    @Override
    public Lesson deactivateLesson(Long tutorId, Long lessonId) {

        Optional<Lesson> lesson = lessonRepository.findByTutorIdAndAndLessonId(0L, 1L);
        // TODO. 이미 비활성화 되어있는 수업은 아닌지 검증
        // TODO. 해당 유저의 수업 아이디가 맞는지 검증

        Lesson deactivatedLesson =  lesson.get();
        deactivatedLesson.deactivateLesson();
        lessonRepository.save(deactivatedLesson);

        return deactivatedLesson;
    }

    @Override
    public boolean modifyLesson(Long tutorId, Long lessonId, ModifyLessonDto modifyLessonDto) {

        // current lesson
        Optional<Lesson> lesson = lessonRepository.findByTutorIdAndAndLessonId(3L, 4L);

        if (lesson.isPresent()) {
            Lesson modifiedLesson = lesson.get();

            int totalTime = modifiedLesson.calculateTotalTime(modifyLessonDto.getSchedule(), modifyLessonDto.getNumOfSession());
            
            modifiedLesson.modifyLesson(modifyLessonDto.getLessonName(), modifyLessonDto.getMemo(), totalTime);
            lessonRepository.save(modifiedLesson);

            // TODO. tag-lesson 수정


            // TODO. students-lesson 수정

            // TODO. schedule 수정

           return true;

        } else {

            return false;

        }
    }
}
