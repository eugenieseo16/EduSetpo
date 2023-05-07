package com.seosam.edusetpo.tutor.service;

import com.seosam.edusetpo.tutor.entity.Tutor;
import com.seosam.edusetpo.tutor.entity.TutorDetail;
import com.seosam.edusetpo.tutor.repository.TutorRepository;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public class CustomUserDetailService implements UserDetailsService {

    private final TutorRepository tutorRepository;

    public CustomUserDetailService(TutorRepository tutorRepository) {
        this.tutorRepository = tutorRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return tutorRepository.findByEmail(username)
                .map(this::createUserDetails)
                .orElseThrow(() -> new UsernameNotFoundException("해당하는 유저를 찾을 수 없습니다."));
    }

    private UserDetails createUserDetails(Tutor tutor) {
        TutorDetail tutorDetail = new TutorDetail(tutor);
        return new User(tutor.getEmail(), tutor.getPassword(), tutorDetail.getAuthorities());
    }
}
