package com.seosam.edusetpo.tutor.repository;

import com.seosam.edusetpo.tutor.entity.Tutor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TutorRepository extends JpaRepository<Tutor, Long> {

    Optional<Tutor> findByTutorId(Long tutorId);
    Optional<Tutor> findByName(String name);

    Optional<Tutor> findByNickname(String nickname);

    Optional<Tutor> findByEmail(String email);

    // 닉네임으로 유저 검색하는거(나 제외하기위해 나는 따로 찾아주는것)
    List<Tutor> findByNicknameContainingAndNicknameNotLike(String nickname, String myNickname);
}
