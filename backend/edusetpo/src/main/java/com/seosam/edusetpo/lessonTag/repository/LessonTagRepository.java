package com.seosam.edusetpo.lessonTag.repository;

import com.seosam.edusetpo.lessonTag.entity.LessonTag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface LessonTagRepository extends JpaRepository<LessonTag, Long> {

    public List<LessonTag> findAllByLessonIdAndTutorId(Long lessonId, Long tutorId);

    @Transactional
    void deleteByLessonId(long lessonId);
}
