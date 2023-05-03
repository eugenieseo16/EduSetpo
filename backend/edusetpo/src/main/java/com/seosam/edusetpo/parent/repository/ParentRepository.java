package com.seosam.edusetpo.parent.repository;

import com.seosam.edusetpo.parent.entity.Parent;
import com.seosam.edusetpo.tutor.entity.Tutor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
//수동선언 할거야 config->configuration
@Repository
public interface ParentRepository extends JpaRepository<Parent, Long> {

    // DB에서 내가 원하는 것만 골라올 때
    // 이름으로 Parent 객체를 조회하는 메소드
    Optional<Parent> findByParentName(String parentName);

    // 이메일로 Tutor 객체를 조회하는 메소드
    Optional<Parent> findByEmail(String email);

}
