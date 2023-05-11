package com.seosam.edusetpo.tutor.repository;

import com.seosam.edusetpo.tutor.entity.Tutor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Repository
public interface TutorRepository extends JpaRepository<Tutor, Long> {

    @Transactional
    Tutor save(Tutor tutor);

    Optional<Tutor> findByTutorId(Long tutorId);
    Optional<Tutor> findByName(String name);

    Optional<Tutor> findByNickname(String nickname);

    Optional<Tutor> findByEmail(String email);

    List<Tutor> findTutorsByEmail(String email);

    boolean existsByEmail(String email);

    boolean existsByNickname(String nickname);

}
