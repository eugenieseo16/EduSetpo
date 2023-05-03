package com.seosam.edusetpo.tutor.repository;

import com.seosam.edusetpo.tutor.entity.LessonTag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LessonTagRepository extends JpaRepository<LessonTag, Integer> {
        List<LessonTag> findByTutorId(Integer tutorId);
}

