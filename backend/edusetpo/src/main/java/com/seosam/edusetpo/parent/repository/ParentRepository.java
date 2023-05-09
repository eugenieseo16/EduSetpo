package com.seosam.edusetpo.parent.repository;

import com.seosam.edusetpo.parent.entity.Parent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.Optional;


@Repository
public interface ParentRepository extends JpaRepository<Parent, Long> {

    @Transactional
    Parent save(Parent parent);

    Optional<Parent> findByEmail(String email);

    Optional<Parent> findByParentName(String parentName);

    boolean existsByEmail(String email);
}
