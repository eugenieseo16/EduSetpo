package com.seosam.edusetpo.lessonTag.controller;

import com.seosam.edusetpo.lessonTag.dto.FindTagsDto;
import com.seosam.edusetpo.lessonTag.service.LessonTagService;
import com.seosam.edusetpo.model.BaseResponseBody;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import springfox.documentation.service.Tags;

import java.util.List;

@RestController
@RequestMapping("/api/tag")
@Slf4j
@RequiredArgsConstructor
public class LessonTagController {

    private final LessonTagService lessonTagService;

    @ApiOperation(value = "수업별 태그 조회", notes = "수업 id를 입력하여 태그 조회")
    @GetMapping("/{lessonId}")
    public ResponseEntity<?> tagFind(@PathVariable Long lessonId) {
        BaseResponseBody baseResponseBody;

        List findTags = lessonTagService.findTags(lessonId);

        baseResponseBody = BaseResponseBody.builder()
                .message("success").statusCode(200)
                .responseData(findTags).build();

        return ResponseEntity.status(200).body(baseResponseBody);
    }
}
