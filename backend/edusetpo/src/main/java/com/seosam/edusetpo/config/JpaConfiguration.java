package com.seosam.edusetpo.config;


import com.seosam.edusetpo.config.handler.JwtTokenProvider;
import com.seosam.edusetpo.parent.repository.ParentRepository;
import com.seosam.edusetpo.common.Response;
import com.seosam.edusetpo.parent.service.ParentService;
import com.seosam.edusetpo.parent.service.ParentServiceImpl;
import com.seosam.edusetpo.tutor.repository.TutorRepository;
import com.seosam.edusetpo.tutor.service.TutorService;
import com.seosam.edusetpo.tutor.service.TutorServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;

@Configuration
@RequiredArgsConstructor
public class JpaConfiguration {

    private final TutorRepository tutorRepository;
    private final Response response;
    private final AuthenticationManagerBuilder authenticationManagerBuilder;
    private final JwtTokenProvider jwtTokenProvider;
    private final ParentRepository parentRepository;

    @Bean
    public TutorService tutorService() {
        return new TutorServiceImpl(tutorRepository, response, authenticationManagerBuilder, jwtTokenProvider);
    }

    @Bean
    public ParentService parentService() {
        return new ParentServiceImpl(parentRepository, response, jwtTokenProvider);
    }
}
