package com.seosam.edusetpo.tutor.controller;

import com.seosam.edusetpo.model.BaseResponseBody;
import com.seosam.edusetpo.tutor.dto.CreateTagDto;
import com.seosam.edusetpo.tutor.entity.LessonTag;
import com.seosam.edusetpo.tutor.repository.LessonTagRepository;
import com.seosam.edusetpo.tutor.repository.TutorRepository;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@Slf4j
public class LessonTagController {

    private final LessonTagRepository lessonTagRepository;

    private final TutorRepository tutorRepository;


    // 태그 작성
    @ApiOperation(value = "유저의 수업 메모용 태그를 등록", notes = "회원번호와 등록할 태그를 입력")
    @PostMapping(path = "/tutor/tag/{tutorId}")
    public ResponseEntity<?>  createTag(@PathVariable("tutorId") Long tutorId, @RequestBody CreateTagDto tagDto) {
        BaseResponseBody baseResponseBody;

        // 존재하는 id인지 조건 처리
        if (tutorRepository.findById(tutorId).isEmpty()) {
            baseResponseBody = BaseResponseBody.builder().message("fail").statusCode(400).build();
        }
        else {
            baseResponseBody = BaseResponseBody.builder().message("success").statusCode(200).responseData(tagDto).build();
        }

        // 이미 존재하는 태그는 아닌지 조건 처리
        String tag = tagDto.getTag();
        LessonTag lessonTag = lessonTagRepository.save(new LessonTag(tag, tutorId));
//        ClassTagResponse classTagResponse = new ClassTagResponse(tutorId, tag, classTag.getId());
        return ResponseEntity.status(200).body(baseResponseBody);
    }

//    @GetMapping(path = "/tutor/tag")
//    public List<ClassTag> getTagsByUserId(@RequestParam("id") Integer id) {
////        return classTagRepository.findByTutorId(id);
//        return id;
//    }

}
