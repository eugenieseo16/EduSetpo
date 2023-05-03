package com.seosam.edusetpo.tutor.service;


import com.seosam.edusetpo.tutor.dto.LoginReqDto;
import com.seosam.edusetpo.tutor.dto.SignUpDto;
import com.seosam.edusetpo.tutor.dto.TutorDto;
import com.seosam.edusetpo.tutor.entity.Tutor;
import com.seosam.edusetpo.tutor.repository.TutorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class TutorServiceImpl implements TutorService {

    private final TutorRepository tutorRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public TutorServiceImpl(TutorRepository tutorRepository) {
        this.tutorRepository = tutorRepository;
    }

    @Override
    public Optional<Long> signUpTutor(SignUpDto signUpDto) {
        if (signUpDto.getEmail().equals("")) {
            return Optional.empty();
        }
        if (signUpDto.getPassword().equals("")) {
            return Optional.empty();
        }
        if (signUpDto.getName().equals("")) {
            return Optional.empty();
        }
        if (signUpDto.getNickname().equals("")) {
            return Optional.empty();
        }
        if (duplicateEmailCheck(signUpDto.getEmail())) {
            return Optional.of(-1L);
        }

        // 비밀번호 암호화하고 저장
        signUpDto.setPassword(passwordEncoder.encode(signUpDto.getPassword()));
        Tutor tutor = toEntity(signUpDto);
        tutorRepository.save(tutor);

        return Optional.of(tutor.getTutorId());
    }

    @Override
    public boolean duplicateEmailCheck(String email) {
        if (tutorRepository.existsByEmail(email)) {
            return true;
        } else {
            return false;
        }
    }

    @Override
    public Optional<Long> login(LoginReqDto loginReqDto) {
        Optional<Tutor> optionalTutor = tutorRepository.findByEmail(loginReqDto.getEmail());
        if (optionalTutor.isPresent()) {
            if (passwordEncoder.matches(loginReqDto.getPassword(), optionalTutor.get().getPassword())) {
                return Optional.of(optionalTutor.get().getTutorId());
            }
        }
        return Optional.of(-1L);
    }
}
