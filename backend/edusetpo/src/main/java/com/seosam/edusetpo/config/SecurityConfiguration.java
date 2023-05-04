package com.seosam.edusetpo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;


// 이 configuration을 설정안해주면 모든 페이지에서 로그인 하라고 막아버려서 signup조차 못함

@Configuration
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

//    private final JwtTokenProvider jwtTokenProvider;
    // 걸러내지 않는 페이지를 직접 설정
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
                .antMatchers("/**").permitAll()
//                .antMatchers("/", "/tutor/signup", "/tutor/login", "/parent/login", "/parent/signup").permitAll()
                .anyRequest().authenticated()
                .and()
                .formLogin()
                .and()
                .csrf().disable();
//                .anyRequest().authenticated();
//                .mvcMatchers("/", "/login", "/tutor/signup", "/check-email", "/check-email-token",
//                        "/swagger-ui/index.html", "/login-link", "/tutor/signuptest").permitAll()
//                .mvcMatchers(HttpMethod.GET, "/profile/*").permitAll()
//                .anyRequest().authenticated();

        http.formLogin().disable();
    }

    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
