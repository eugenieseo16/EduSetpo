package com.seosam.edusetpo.tutor.service;

import com.seosam.edusetpo.parent.repository.ParentRepository;
import com.seosam.edusetpo.tutor.entity.Tutor;
import com.seosam.edusetpo.tutor.repository.TutorRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CustomTutorDetailService implements UserDetailsService {

    private final TutorRepository tutorRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        if (tutorRepository.existsByEmail(username)) {
            return tutorRepository.findByEmail(username)
//                .map(this::createUserDetails)
                    .orElseThrow(() -> new UsernameNotFoundException("해당하는 유저를 찾을 수 없습니다."));
        }
        throw new UsernameNotFoundException("해당하는 유저를 찾을 수 없습니다.");
    }

//    private UserDetails createUserDetails(Tutor tutor) {
//        return new User(tutor.getEmail(), tutor.getPassword(), tutor.getAuthorities());
//    }
}
