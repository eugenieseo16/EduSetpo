//package com.seosam.edusetpo.config.filter;
//
//import com.fasterxml.jackson.core.JsonParser;
//import com.fasterxml.jackson.databind.ObjectMapper;
//import com.seosam.edusetpo.tutor.entity.Tutor;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.AuthenticationException;
//import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
//
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//
//public class CustomAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
//
//    public CustomAuthenticationFilter(AuthenticationManager authenticationManager) {
//        super.setAuthenticationManager(authenticationManager);
//    }
//
//    @Override
//    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
//        UsernamePasswordAuthenticationToken authenticationToken;
//
//        try {
//            authenticationToken = getAuthRequest(request);
//            if (authenticationToken == null) {
//                return null;
//            }
//            setDetails(request, authenticationToken);
//        } catch (Exception e) {
//            return null;
//        }
//        return this.getAuthenticationManager().authenticate(authenticationToken);
//    }
//
//    public UsernamePasswordAuthenticationToken getAuthRequest(HttpServletRequest request) throws Exception {
//        try {
//            ObjectMapper objectMapper = new ObjectMapper();
//            objectMapper.configure(JsonParser.Feature.AUTO_CLOSE_SOURCE, true);
//            Tutor tutor = objectMapper.readValue(request.getInputStream(), Tutor.class);
//
//            return new UsernamePasswordAuthenticationToken(tutor.getEmail(), tutor.getPassword());
//        } catch (Exception e) {
//            return null;
//        }
//    }
//}
