package com.seosam.edusetpo.tutor.controller;

import com.fasterxml.jackson.databind.util.JSONPObject;
import com.seosam.edusetpo.model.BaseResponseBody;
import com.seosam.edusetpo.tutor.dto.CreateTagDto;
import com.seosam.edusetpo.tutor.dto.SearchTagDto;
import com.seosam.edusetpo.tutor.entity.ClassTag;
import com.seosam.edusetpo.tutor.repository.ClassTagRepository;
import com.seosam.edusetpo.tutor.repository.TutorRepository;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.net.URISyntaxException;
import java.text.ParseException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@Slf4j
public class ClassTagController {

    private final ClassTagRepository classTagRepository;

    private final TutorRepository tutorRepository;


    @ApiOperation(value = "유저의 수업 메모용 태그를 등록", notes = "회원번호와 등록할 태그를 입력")
    @PostMapping(path = "/tutor/tag/{tutorId}")
    public ResponseEntity<?>  createTag(@PathVariable("tutorId") Long tutorId, @RequestBody CreateTagDto tagDto) {
        BaseResponseBody baseResponseBody;

        // 존재하는 id인지 조건 처리
        if (tutorRepository.findById(tutorId).isEmpty()) {
            baseResponseBody = BaseResponseBody.builder().message("fail").statusCode(400).build();
            return ResponseEntity.status(400).body(baseResponseBody);
        }
        else {
            baseResponseBody = BaseResponseBody.builder().message("success").statusCode(200).responseData(tagDto).build();

            // 이미 존재하는 태그는 아닌지 조건 처리
            String tag = tagDto.getTag();
            ClassTag classTag = classTagRepository.save(new ClassTag(tag, tutorId));
    //        ClassTagResponse classTagResponse = new ClassTagResponse(tutorId, tag, classTag.getId());
            return ResponseEntity.status(200).body(baseResponseBody);
        }
    }

    @ApiOperation(value = "사용자의 등록된 태그 반환", notes = "회원번호 입력")
    @GetMapping(path = "/tutor/tag")
    public ResponseEntity<BaseResponseBody> searchedTagList(@RequestParam("tutorId") Long tutorId, @RequestParam("input") String input) {
        BaseResponseBody baseResponseBody;

        if (tutorRepository.findById(tutorId).isEmpty()) {
            baseResponseBody = BaseResponseBody.builder().message("fail").statusCode(400).build();
            return ResponseEntity.status(400).body(baseResponseBody);
        }
        else {
            Optional<ClassTag> searchTagDtoList = classTagRepository.findByTag(input);
            baseResponseBody = BaseResponseBody.builder().message("success").statusCode(200).responseData(searchTagDtoList).build();
            return ResponseEntity.status(200).body(baseResponseBody);
        }
    }

}
