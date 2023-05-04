package com.seosam.edusetpo.tutor.repository;

import com.seosam.edusetpo.tutor.entity.Tag;
import com.seosam.edusetpo.tutor.entity.Tutor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import java.util.List;
import java.util.Optional;

@Repository
public interface TagRepository extends JpaRepository<Tag, Long> {

    Optional<Tag> findByTutorId(Long tutorId);
    List<Tag> findAllByTag(String tag);
    List<Tag> findAllByTagId(Long tagId);
    List<Tag> findALLByTutorIdAndTag(Long tutorId, String Tag);
}

