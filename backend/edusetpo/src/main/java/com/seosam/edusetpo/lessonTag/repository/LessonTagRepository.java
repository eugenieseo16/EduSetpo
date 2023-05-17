package com.seosam.edusetpo.lessonTag.repository;

import com.seosam.edusetpo.lessonTag.entity.LessonTag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Repository
public interface LessonTagRepository extends JpaRepository<LessonTag, Long> {

    public List<LessonTag> findAllByLessonId(Long lessonId);

    Optional<LessonTag> findByTutorIdAndAndTagId(Long tutorId, Long tagId);

    List<LessonTag> findAllByLessonIdAndAndTutorId(Long lessonId, Long tutorId);

    @Transactional
    void deleteByLessonIdAndTutorIdAndTagId(Long lessonId, Long tutorId, Long tagId);
}
