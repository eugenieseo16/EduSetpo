package com.seosam.edusetpo.children.controller;

import com.seosam.edusetpo.children.dto.ChildrenAddDto;
import com.seosam.edusetpo.children.service.ChildrenService;
import com.seosam.edusetpo.model.BaseResponseBody;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/parent")
public class ChildrenController {
    private final ChildrenService childrenService;

    @PostMapping("/children")
    public ResponseEntity<?> createChildren(@RequestBody ChildrenAddDto request) {
        BaseResponseBody baseResponseBody;

        Long parentId = 1L;

        Optional<Long> optionalChildCreate = childrenService.createChildren(parentId, request);

        baseResponseBody = BaseResponseBody.builder().message("success").statusCode(200).responseData(request).build();
        return ResponseEntity.status(200).body(baseResponseBody);
    }
}
