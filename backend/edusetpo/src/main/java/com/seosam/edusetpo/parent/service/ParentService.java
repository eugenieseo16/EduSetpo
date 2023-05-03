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

    // accessToken과 CreateChildDto 요청을 받아 자녀를 생성하고 저장하는 메소드
    public Children createChild(String accessToken, CreateChildDto request) {
        // accessToken으로 부터 parent 객체를 얻는다. (인증 로직은 생략)
        // 예시: Parent parent = getParentByAccessToken(accessToken);

        // 인증 코드 검증 로직
        if (isAuthCodeValid(request.getAuthCode())) {
            // 자녀 객체 생성
            Children newChild = Children.builder()
                    .parent(parent)
                    .childName(request.getChildName())
                    .studentLessonId(request.getStudentLessonId())
                    .build();

            // 자녀 객체 저장
            childrenRepository.save(newChild);
            return newChild;
        } else {
            return null;
        }
    }

    // 인증 코드를 검증하는 메소드 (아직 작성안함...ㅠ)
    private boolean isAuthCodeValid(String authCode) {
        // 인증 코드 검증 로직 작성 필요
        // 예시: return authService.validateAuthCode(authCode);
        return true;
    }
}
