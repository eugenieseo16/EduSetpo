package com.seosam.edusetpo.student.controller;

import com.seosam.edusetpo.student.dto.StudentDto;
import com.seosam.edusetpo.student.dto.StudentToggleDto;
import com.seosam.edusetpo.student.dto.StudentUpdateDto;
import com.seosam.edusetpo.student.repository.StudentRepository;
import com.seosam.edusetpo.student.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/student")
public class StudentController {

    private final StudentRepository studentRepository;
    private final StudentService studentService;
    private static final String SUCCESS = "Success";
    private static final String FAIL = "Fail";

//    @GetMapping("studentList/tutor")
//    public ResponseEntity<?> findAllStudentByTutor(HttpServletRequest request, StudentDto studentDto) {
//        Long tutorId = 1L;
//        String who = "tutor";
//        List<StudentDto> studentDtoList = studentService.findAllStudent(tutorId, who);
//    }
//
//    @GetMapping("studentList/parent")
//    public ResponseEntity<?> findAllStudentByParent(HttpServletRequest request, StudentDto studentDto) {
//
//        return null;
//    }

    @PostMapping("create")
//    public Student createStudent(@RequestBody StudentDto studentDto, HttpServletRequest request) {
    public ResponseEntity<?> createStudent(StudentDto studentDto) {
//        Long tutorId = request.getHeader() // Jwt 토큰 설정 시 변경될 예정
        Long tutorId = new Long(1);

        Optional<Long> optionalCreateDiary = studentService.createStudent(tutorId, studentDto);
        if (optionalCreateDiary.isPresent()) {
//            return new ResponseEntity<>(optionalCreateDiary.get(), HttpStatus.OK);
                optionalCreateDiary.get();
        }
//        return new ResponseEntity<>(FAIL, HttpStatus.BAD_REQUEST);
        optionalCreateDiary.get(); // 나중엔 지울 것


        return null; // 나중엔 지울 것
    }

    @PutMapping("{studentId}")
    public ResponseEntity<?> updateStudent(@PathVariable Long studentId, HttpServletRequest request, StudentUpdateDto studentUpdateDto) {
        // 토큰 바탕으로 튜터 id 추출

        // 요청을 통해 받아온 튜토 id가 저장된 id랑 같을 경우 수정되게끔 함수, 지금은 아님
//        if (tutorId === studentDto.getTutorId())

        // test code
        Long tutorId = 1L;
        studentUpdateDto = new StudentUpdateDto(tutorId, "홀쭉이", null, null);
        studentService.updateStudent(studentId, studentUpdateDto);

        return null;
    }
    @PutMapping("toggle/{studentId}")
    public ResponseEntity<?> toggleStudent(@PathVariable Long studentId, HttpServletRequest request, StudentToggleDto studentToggleDto) {
        // 토큰 바탕으로 튜터 id 추출

        // 요청을 통해 받아온 튜토 id가 저장된 id랑 같을 경우 수정되게끔 함수, 지금은 아님
//        if (tutorId === studentDto.getTutorId())

        // test code
        Long tutorId = 1L;
        studentToggleDto = new StudentToggleDto(tutorId, false);
        studentService.toggleStudent(studentId, studentToggleDto);

        return null;
    }
}
