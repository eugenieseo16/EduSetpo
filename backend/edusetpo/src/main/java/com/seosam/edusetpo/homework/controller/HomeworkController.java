package com.seosam.edusetpo.homework.controller;

import com.seosam.edusetpo.homework.dto.HomeworkCompleteDto;
import com.seosam.edusetpo.homework.dto.HomeworkDto;
import com.seosam.edusetpo.homework.dto.HomeworkUpdateDto;
import com.seosam.edusetpo.homework.repository.HomeworkRepository;
import com.seosam.edusetpo.homework.service.HomeworkService;
import com.seosam.edusetpo.model.BaseResponseBody;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("homework")
public class HomeworkController {

    private final HomeworkService homeworkService;


    @PostMapping("")
    public ResponseEntity<?> createHomework(@RequestBody HomeworkDto homeworkDto) {
        BaseResponseBody baseResponseBody;

        Optional<Long> optionalCreateHomework = homeworkService.createHomework(homeworkDto);
        if (optionalCreateHomework.isEmpty()) {
            baseResponseBody = BaseResponseBody.builder().message("fail").statusCode(400).build();
            return ResponseEntity.status(400).body(baseResponseBody);
        }

        baseResponseBody = BaseResponseBody.builder().message("success").statusCode(200).responseData(homeworkDto).build();
        return ResponseEntity.status(200).body(baseResponseBody);
    }

    @GetMapping("/{studentId}/{sessionId}")
    public ResponseEntity<?> findHomeworkByStudentAndSession(@PathVariable("studentId") Long studentId, @PathVariable("sessionId") Long sessionId) {
        BaseResponseBody baseResponseBody;

        List<HomeworkDto> homeworkDtoList = homeworkService.findHomeworkByStudentAndSession(studentId, sessionId);
        if (homeworkDtoList.isEmpty()) {
            baseResponseBody = BaseResponseBody.builder().message("fail").statusCode(400).build();
            return ResponseEntity.status(400).body(baseResponseBody);
        }
        baseResponseBody = BaseResponseBody.builder().message("success").statusCode(200).responseData(homeworkDtoList).build();
        return ResponseEntity.status(200).body(baseResponseBody);
    }



    @DeleteMapping("/{homeworkId}")
    public void deleteHomework(@PathVariable("homeworkId") Long homeworkId) {
        homeworkService.deleteHomework(homeworkId);
    }

    @PutMapping("/complete/{homeworkId}")
    public ResponseEntity<?> completeHomework(@PathVariable("homeworkId") Long homeworkId, HomeworkCompleteDto homeworkCompleteDto) {
        BaseResponseBody baseResponseBody;
        if(homeworkService.completeHomework(homeworkId, homeworkCompleteDto)) {
            baseResponseBody = BaseResponseBody.builder().message("success").statusCode(200).responseData(homeworkCompleteDto).build();
            return ResponseEntity.status(200).body(baseResponseBody);
        }
        baseResponseBody = BaseResponseBody.builder().message("fail").statusCode(400).build();
        return ResponseEntity.status(400).body(baseResponseBody);
    }
    @PutMapping("{homeworkId}")
    public ResponseEntity<?> updateHomework(@PathVariable("homeworkId") Long homeworkId, HomeworkUpdateDto homeworkUpdateDto) {
        BaseResponseBody baseResponseBody;
        if (homeworkService.updateHomework(homeworkId, homeworkUpdateDto)) {
            baseResponseBody = BaseResponseBody.builder().message("success").statusCode(200).responseData(homeworkUpdateDto).build();
            return ResponseEntity.status(200).body(baseResponseBody);
        }
        baseResponseBody = BaseResponseBody.builder().message("fail").statusCode(400).build();
        return ResponseEntity.status(400).body(baseResponseBody);
    }
}
