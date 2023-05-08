//package com.seosam.edusetpo.config;
//
//
//import com.seosam.edusetpo.config.filter.CustomAuthenticationFilter;
//import com.seosam.edusetpo.config.filter.JwtAuthorizationFilter;
//import com.seosam.edusetpo.config.handler.CustomAuthenticationProvider;
//import org.springframework.boot.autoconfigure.security.servlet.PathRequest;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.ProviderManager;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
//import org.springframework.web.cors.CorsConfiguration;
//import org.springframework.web.cors.CorsConfigurationSource;
//import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
//
//@Configuration
//public class SecurityConfig {
//
//    private final PasswordEncoder passwordEncoder;
//
//    public SecurityConfig(PasswordEncoder passwordEncoder) {
//        this.passwordEncoder = passwordEncoder;
//    }
//    @Bean
//    public WebSecurityCustomizer webSecurityCustomizer() {
//        // 정적 자원에 대해 시큐리티 x
//        return (web) -> web.ignoring()
//                .requestMatchers(PathRequest.toStaticResources().atCommonLocations());
//    }
//
//    @Bean
//    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//        // 서버에 인증 정보 저장 x -> csrf 사용 x
//        http.csrf().disable();
//
//        // form 기반의 로그인 비활성화 -> 커스텀으로 구현한 필터 사용
//        http.formLogin().disable();
//
//        // CORS 허가
//        http.cors().configurationSource(corsConfigurationSource());
//
//        // JWT를 이용한 인증
//        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
//
//        http.addFilterBefore(jwtAuthorizationFilter(), BasicAuthenticationFilter.class);
//
//        return http.build();
//    }
//
//
//    // authentication의 인증 메서드를 제공하는 매니저
//    // Provider의 인터페이스
//    // return AuthenticationManager
//    @Bean
//    public AuthenticationManager authenticationManager() {
//        return new ProviderManager(customAuthenticationProvider());
//    }
//
//    // 인증 제공자, 사용자 이름, 비밀번호 요구
//    // return CustomAuthenticationProvider
//    @Bean
//    public CustomAuthenticationProvider customAuthenticationProvider() {
//        return new CustomAuthenticationProvider(bCryptPasswordEncoder());
//    }
//
//    public BCryptPasswordEncoder bCryptPasswordEncoder(){
//        return new BCryptPasswordEncoder();
//    }
//
//    @Bean
//    public CustomAuthenticationFilter customAuthenticationFilter() {
//        CustomAuthenticationFilter customAuthenticationFilter = new CustomAuthenticationFilter(authenticationManager());
//        customAuthenticationFilter.setFilterProcessesUrl("tutor/login");
//        customAuthenticationFilter.afterPropertiesSet();
//        return customAuthenticationFilter;
//    }
//
//    @Bean
//    public JwtAuthorizationFilter jwtAuthorizationFilter() {
//        return new JwtAuthorizationFilter();
//    }
//
//    @Bean
//    public CorsConfigurationSource corsConfigurationSource() {
//        CorsConfiguration configuration = new CorsConfiguration();
//
//        configuration.addAllowedOriginPattern("*");
//        configuration.addAllowedHeader("*");
//        configuration.addAllowedMethod("*");
//        configuration.setAllowCredentials(true);
//
//        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//        source.registerCorsConfiguration("/**", configuration);
//        return source;
//    }
//}
