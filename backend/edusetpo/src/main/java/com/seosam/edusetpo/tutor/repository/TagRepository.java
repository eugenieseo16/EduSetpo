package com.seosam.edusetpo.tutor.repository;

import com.seosam.edusetpo.tutor.entity.Tag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import java.util.List;
import java.util.Optional;

@Repository
public interface TagRepository extends JpaRepository<Tag, Long> {

    Optional<Tag> findByTutorId(Long tutorId);
    Tag findByTagId(Long tagId);
    List<Tag> findAllByTutorId(Long tagId);

    // 이미 존재하는 태그인지 검증
    List<Tag> findAllByTag(String tag);

    // 사용자 id와 태그로 조회
    List<Tag> findALLByTutorIdAndTag(Long tutorId, String Tag);

}

