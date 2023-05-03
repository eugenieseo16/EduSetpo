package com.seosam.edusetpo.parent.controller;

import com.seosam.edusetpo.children.entity.Children;
import com.seosam.edusetpo.model.BaseResponseBody;
import com.seosam.edusetpo.parent.dto.CreateChildDto;
import com.seosam.edusetpo.parent.service.ParentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

// REST API를 처리하는 컨트롤러 클래스
@RestController
@RequestMapping("/parent")
public class ParentController {

    @Autowired
    private ParentService parentService;

//    @PostMapping("/children")
//    public ResponseEntity<?> createChild(@RequestBody CreateChildDto request) {
//        // 인증 코드 검증 및 자녀 생성 로직이 있는 서비스 메소드 호출
//        Children children = parentService.createChild(request);
//        BaseResponseBody baseResponseBody;
//
//        //
//
//        return null;
//    }
}

// 자녀가 정상적으로 생성되었을 경우 응답 데이터를 구성하고 반환
//        if (children != null) {
//            CreateChildDto.ChildData data = new CreateChildDto.ChildData(
//                    children.getChildId(),
//                    // studentId는 데이터 모델에 따라 구현해야 합니다.
//                    null,
//                    children.getChildName(),
//                    children.getStudentLessonId()
//            );
//            CreateChildDto response = new CreateChildDto(request
//            );
//            return ResponseEntity.ok(response);
//            // 인증 코드가 일치하지 않을 경우 에러 메시지를 반환
//        } else {
//            return ResponseEntity.badRequest().body("인증코드가 일치하지 않습니다. 다시 시도해주세요.");
//        }