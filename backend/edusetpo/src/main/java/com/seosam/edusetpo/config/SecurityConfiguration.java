package com.seosam.edusetpo.config;

import com.seosam.edusetpo.config.filter.JwtAuthenticationFilter;
import com.seosam.edusetpo.config.handler.CustomAuthenticationProvider;
import com.seosam.edusetpo.config.handler.JwtTokenProvider;
import com.seosam.edusetpo.tutor.service.TutorService;
import io.jsonwebtoken.Jwt;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.config.annotation.CorsRegistry;


// 이 configuration을 설정안해주면 모든 페이지에서 로그인 하라고 막아버려서 signup조차 못함

//@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    private final JwtTokenProvider jwtTokenProvider;
    private final CorsConfig corsConfig;

//    public SecurityConfiguration(CorsConfig corsConfig) {
//        this.corsConfig = corsConfig;
//    }
    @Autowired
    private final PasswordEncoder passwordEncoder;

    // authenticationManager를 Bean 등록
    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .httpBasic().disable()
                .csrf().disable()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authorizeRequests()
                .antMatchers("/**").permitAll()
//                .antMatchers("/",
//                        "/tutor/login",
//                        "/tutor/signup",
//                        "/tutor/nickname",
//                        "/tutor/email",
//                        "/parent/**",
//                        "/studentLesson/**",
//                        "/api/parents/**").permitAll()
//                .antMatchers("/tutor/**",
//                        "/student/**",
//                        "/session/**",
//                        "/schedule/**",
//                        "/salary/**",
//                        "/tag/**",
//                        "/lesson/**",
//                        "/homework/**",
//                        "/grade/**").hasRole("USER")
                .and()
                .addFilter(corsConfig.corsFilter())
                .addFilterBefore(new JwtAuthenticationFilter(jwtTokenProvider), UsernamePasswordAuthenticationFilter.class);
    }
}
