package com.seosam.edusetpo.children.controller;

import com.seosam.edusetpo.children.dto.ChildrenDto;
import com.seosam.edusetpo.children.entity.Children;
import com.seosam.edusetpo.children.service.ChildrenService;
import com.seosam.edusetpo.model.BaseResponseBody;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/parent")
public class ChildrenController {
    private final ChildrenService childrenService;

    @PostMapping("/children")
    public ResponseEntity<?> childrenAdd(@RequestBody ChildrenDto request) {
        BaseResponseBody baseResponseBody;

        Long parentId = 2L;

        Optional<Long> optionalChildCreate = childrenService.childrenAdd(parentId, request);

        baseResponseBody = BaseResponseBody.builder()
                .message("success")
                .statusCode(200)
                .responseData(request)
                .build();
        return ResponseEntity.status(200).body(baseResponseBody);
    }

    @GetMapping("/children/parentId")
    public ResponseEntity<?> findByParentId(@RequestParam Long parentId) {
        List<Children> children=childrenService.findAllByParentId(parentId);

        BaseResponseBody baseResponseBody = BaseResponseBody.builder()
                .message("success")
                .statusCode(200)
                .responseData(children)
                .build();
        return ResponseEntity.status(200).body(baseResponseBody);

    }

    @DeleteMapping("/children/{childId}")
    public ResponseEntity<?> childrenRemove(@PathVariable Long childId) {
        childrenService.childrenRemove(childId);

        BaseResponseBody baseResponseBody = BaseResponseBody.builder()
                .message("Child deleted successfully")
                .statusCode(200)
                .build();
        return ResponseEntity.status(200).body(baseResponseBody);
    }

    @GetMapping("/children")
    public ResponseEntity<?> findAllChildren() {
        List<Children> childrenList = childrenService.findAllChildren();

        BaseResponseBody baseResponseBody = BaseResponseBody.builder()
                .message("success")
                .statusCode(200)
                .responseData(childrenList)
                .build();
        return ResponseEntity.status(200).body(baseResponseBody);
    }
}
