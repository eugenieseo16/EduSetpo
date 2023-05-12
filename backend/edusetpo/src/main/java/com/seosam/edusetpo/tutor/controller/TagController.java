package com.seosam.edusetpo.tutor.controller;

import com.seosam.edusetpo.model.BaseResponseBody;
import com.seosam.edusetpo.tutor.dto.CreateTagDto;
import com.seosam.edusetpo.tutor.entity.Tag;
import com.seosam.edusetpo.tutor.service.TagService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tutor/tag")
@Slf4j
@RequiredArgsConstructor
public class TagController {

    private final TagService tagService;

    // 태그 작성
    @ApiOperation(value = "메모용 수업 태그 등록", notes = "회원번호와 등록할 태그를 입력")
    @PostMapping("/{tutorId}")
    public ResponseEntity<?> tagAdd(@PathVariable("tutorId") Long tutorId, @RequestBody CreateTagDto tagDto) {
        BaseResponseBody baseResponseBody;

        Tag tag = (Tag) tagService.addTag(tutorId, tagDto);

        if (tag == null) {
            baseResponseBody = BaseResponseBody.builder().message("fail").statusCode(400).build();
            return ResponseEntity.status(400).body(baseResponseBody);
        }

        baseResponseBody = BaseResponseBody.builder()
                .message("success").statusCode(200)
                .responseData(tag).build();

        return ResponseEntity.status(200).body(baseResponseBody);
    }


    @ApiOperation(value = "태그 검색", notes = "검색어를 입력하여 태그를 검색")
    @GetMapping("/{tutorId}/{input}")
    public ResponseEntity<?> tagFind(@PathVariable Long tutorId, @PathVariable String input) {
        BaseResponseBody baseResponseBody;

        List findTags = tagService.findTag(tutorId, input);

        baseResponseBody = BaseResponseBody.builder()
                .message("success").statusCode(200)
                .responseData(findTags).build();

        return ResponseEntity.status(200).body(baseResponseBody);
    }

}
