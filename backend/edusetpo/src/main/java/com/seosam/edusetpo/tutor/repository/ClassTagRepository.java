package com.seosam.edusetpo.tutor.repository;

import com.seosam.edusetpo.tutor.entity.ClassTag;
import com.seosam.edusetpo.tutor.entity.Tutor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ClassTagRepository extends JpaRepository<ClassTag, Integer> {
        List<ClassTag> findByTutorId(Integer tutorId);
        Optional<ClassTag> findByTag(String tag);

//        List<ClassTag> findBy(String tag);
}

