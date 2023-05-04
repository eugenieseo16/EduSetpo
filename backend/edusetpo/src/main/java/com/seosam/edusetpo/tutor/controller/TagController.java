package com.seosam.edusetpo.tutor.controller;

import com.seosam.edusetpo.model.BaseResponseBody;
import com.seosam.edusetpo.tutor.dto.CreateTagDto;
import com.seosam.edusetpo.tutor.dto.FindTagDto;
import com.seosam.edusetpo.tutor.repository.TagRepository;
import com.seosam.edusetpo.tutor.repository.TutorRepository;
import com.seosam.edusetpo.tutor.service.TagService;
import io.swagger.annotations.ApiOperation;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.expression.ExpressionException;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/tutor/tag")
@Slf4j
@RequiredArgsConstructor
public class TagController {

    private final TagService tagService;

    // 태그 작성
    @ApiOperation(value = "메모용 수업 태그 등록", notes = "회원번호와 등록할 태그를 입력")
    @PostMapping(path = "/{tutorId}")
    public ResponseEntity<?>  createTag(@PathVariable("tutorId") Long tutorId, @RequestBody CreateTagDto tagDto) {
        BaseResponseBody baseResponseBody;


        // 존재하는 id인지 조건 처리
        // 이미 존재하는 태그는 아닌지 조건 처리

        return null;
    }

    @ApiOperation(value = "태그 검색", notes = "검색어를 입력하여 태그를 검색")
    @GetMapping("/{tutorId}/{input}")
    public ResponseEntity<?> getTags(@PathVariable Long tutorId,@PathVariable String input) {
        BaseResponseBody baseResponseBody;
        FindTagDto findTagDto = tagService.findTag(tutorId, input);

        return null;
    }

}
