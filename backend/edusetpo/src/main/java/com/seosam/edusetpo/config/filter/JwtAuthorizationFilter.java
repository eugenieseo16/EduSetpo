//package com.seosam.edusetpo.config.filter;
//
//
//import com.seosam.edusetpo.common.AuthConstants;
//import com.seosam.edusetpo.common.TokenUtils;
//import io.jsonwebtoken.Claims;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.context.SecurityContext;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.util.AntPathMatcher;
//import org.springframework.web.filter.OncePerRequestFilter;
//
//import javax.servlet.FilterChain;
//import javax.servlet.ServletException;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import java.io.IOException;
//import java.io.PrintWriter;
//import java.util.Arrays;
//import java.util.List;
//
//public class JwtAuthorizationFilter extends OncePerRequestFilter {
//
//    @Value("${swagger.paths}")
//    private List<String> swaggerPaths;
//
//    private AntPathMatcher pathMatcher = new AntPathMatcher();
//
//    @Override
//    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws ServletException, IOException {
//
//
//        // 토큰이 필요하지 않은 API URL에 대해 배열로 구성
//        List<String> list = Arrays.asList(
//                "/", "/tutor/login", "/tutor/signup", "/parent/login", "/parent/signup"
//        );
//
//        boolean isSwaggerPath = swaggerPaths.stream()
//                .anyMatch(path -> pathMatcher.match(path, request.getServletPath()));
//
//        if (isSwaggerPath) {
//            chain.doFilter(request, response);
//            return;
//        }
//
//        // 토큰이 필요하지 않은 API URL의 경우 로직 없이 다음 필터로 이동
//        if (list.contains(request.getRequestURI())) {
//            chain.doFilter(request, response);
//            return;
//        }
//
//        // OPTIONS 요청인 경우 로직 없이 다음 필터로 이동
//        if (request.getMethod().equalsIgnoreCase("OPTIONS")) {
//            chain.doFilter(request, response);
//            return;
//        }
//
//        // Client 에서 API 요청에서 오는 Header 확인
//        String header = request.getHeader(AuthConstants.AUTH_HEADER);
//
//        try {
//            if (header != null && !header.equalsIgnoreCase("")) {
//                // 헤더에서 토큰 추출
//                String token = TokenUtils.getTokenFromHeader(header);
//
//                // 추출한 토큰 유효성 검사
//                if (TokenUtils.isValidToken(token)) {
//
//                    // 토큰을 기반으로 사용자 아이디를 반환
//                    Claims claims = TokenUtils.getClaimsFromToken(token);
//
//                    // 사용자 존재 여부 체크
//                    TokenUtils.checkExistenceOfEmail(claims);
//
//                    // SecurityContext에 Authentication 정보 넣기
//                    SecurityContext context = SecurityContextHolder.getContext();
//                    Authentication authentication = new UsernamePasswordAuthenticationToken(claims, null);
//                    context.setAuthentication(authentication);
//
//                    chain.doFilter(request, response);
//                } else {
//                    return;
//                }
//            }
//            else {
//                return;
//            }
//        } catch (Exception e) {
//            response.setCharacterEncoding("UTF-8");
//            response.setContentType("application/json");
//            PrintWriter printWriter = response.getWriter();
//        }
//    }
//}
