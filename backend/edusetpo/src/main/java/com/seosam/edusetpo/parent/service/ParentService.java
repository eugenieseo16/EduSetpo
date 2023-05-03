package com.seosam.edusetpo.parent.service;

import com.seosam.edusetpo.children.entity.Children;
import com.seosam.edusetpo.children.repository.ChildrenRepository;
import com.seosam.edusetpo.parent.dto.CreateChildDto;
import com.seosam.edusetpo.parent.entity.Parent;
import com.seosam.edusetpo.parent.repository.ParentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ParentService {

    @Autowired
    private ParentRepository parentRepository;

    @Autowired
    private ChildrenRepository childrenRepository;
    private Parent parent;

    // accessToken과 CreateChildDto 요청을 받아 자녀를 생성하고 저장하는 메소드\
    // path 받는것 처럼 요청오면 바로 생성
    public Children createChild(CreateChildDto request) {

            Children children  = Children.builder()
//                    .parentId(request.g)
                    .childName(request.getChildName())
                    .studentLessonId(request.getStudentLessonId())
                    .build();

            // 자녀 객체 저장
            childrenRepository.save(children);
            return children;
    }

    // 인증 코드를 검증하는 메소드 (아직 작성안함...ㅠ)
    private boolean isAuthCodeValid(String authCode) {
        // 인증 코드 검증 로직 작성 필요
        // 예시: return authService.validateAuthCode(authCode);
        return true;
    }
}
