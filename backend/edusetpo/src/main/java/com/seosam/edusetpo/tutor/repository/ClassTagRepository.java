package com.seosam.edusetpo.tutor.repository;

import com.seosam.edusetpo.tutor.entity.ClassTag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClassTagRepository extends JpaRepository<ClassTag, Integer> {
        List<ClassTag> findByTutorId(Integer tutorId);
}

