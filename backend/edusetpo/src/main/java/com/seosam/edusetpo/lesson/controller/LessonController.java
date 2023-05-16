package com.seosam.edusetpo.lesson.controller;

import com.seosam.edusetpo.lesson.dto.CreateLessonDto;
import com.seosam.edusetpo.lesson.dto.LessonDto;
import com.seosam.edusetpo.lesson.dto.ModifyLessonDto;
import com.seosam.edusetpo.lesson.entity.Lesson;
import com.seosam.edusetpo.lesson.service.LessonService;
import com.seosam.edusetpo.lessonTag.entity.LessonTag;
import com.seosam.edusetpo.lessonTag.service.LessonTagService;
import com.seosam.edusetpo.model.BaseResponseBody;
import com.seosam.edusetpo.schedule.dto.WeeklyScheduleDto;
import com.seosam.edusetpo.schedule.entity.Schedule;
import com.seosam.edusetpo.schedule.service.ScheduleService;
import com.seosam.edusetpo.session.dto.SessionDto;
import com.seosam.edusetpo.session.service.SessionService;
import com.seosam.edusetpo.studentlesson.entity.StudentLesson;
import com.seosam.edusetpo.studentlesson.service.StudentLessonService;
import com.seosam.edusetpo.tutor.entity.Tutor;
import io.swagger.annotations.ApiOperation;
import io.swagger.models.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.time.DayOfWeek;
import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.temporal.TemporalAdjusters;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/lesson")
@Slf4j
@RequiredArgsConstructor
public class LessonController {

    private final LessonService lessonService;
    private final ScheduleService scheduleService;
    private final LessonTagService lessonTagService;
    private final StudentLessonService studentLessonService;
    private final SessionService sessionService;

    @ApiOperation(value = "수업 생성", notes = "정보를 입력하여 정기 수업을 생성")
    @PostMapping("")
    public ResponseEntity<?> lessonAdd(@RequestBody CreateLessonDto lessonDto, Authentication authentication) {
        BaseResponseBody baseResponseBody;
        Tutor tutor = (Tutor) authentication.getPrincipal();
        Long tutorId = tutor.getTutorId();

        Lesson lesson = (Lesson) lessonService.addLesson(lessonDto);

        baseResponseBody = BaseResponseBody.builder()
                .message("success").statusCode(200)
                .responseData(lesson).build();

        // schedule 등록
        Schedule schedule = (Schedule) scheduleService.addSchedule(lessonDto.getSchedule(), lesson.getLessonId());

        // session 등록
        LocalDate currentMonth = LocalDate.now();
        List<LocalDate> targetDates = new ArrayList<>();
        boolean trigger = true;
        int wall = 0;
        List<Integer> triggerList = new ArrayList<>();
        while (trigger) {
            targetDates.add(currentMonth.plusMonths(wall));
            wall++;
            if (currentMonth.plusMonths(wall).getMonthValue() == 3
                    || currentMonth.plusMonths(wall).getMonthValue() == 6
                    || currentMonth.plusMonths(wall).getMonthValue() == 9
                    || currentMonth.plusMonths(wall).getMonthValue() == 12) {
                triggerList.add(wall);
            }

            if (triggerList.size() >= 3) {
                trigger = false;
            }
        }
        List<SessionDto> sessionDtoList = new ArrayList<>();
        Map<String, List<WeeklyScheduleDto>> schedules = scheduleService.findScheduleByLessonId(lesson.getLessonId());

        DayOfWeek[] dayOfWeeks = DayOfWeek.values();
        for (DayOfWeek dayOfWeek : dayOfWeeks) {
            String dayOfWeekString = dayOfWeek.toString();

            if (!schedules.containsKey(dayOfWeekString)) {
                continue; // 해당 요일의 스케줄이 없으면 다음 요일로 넘어감
            }

            // 해당 요일의 WeeklyScheduleDto 리스트
            List<WeeklyScheduleDto> weeklySchedules = schedules.get(dayOfWeekString);
            // 리스트 속 lesson 들을 순회하며
            for (WeeklyScheduleDto targetLesson : weeklySchedules) {
                // lesson 별 3개월치씩 순회하며
                for (LocalDate targetDate : targetDates) {
                    LocalDate firstDateOfMonth = LocalDate.of(targetDate.getYear(), targetDate.getMonth(), 1);
                    LocalDate startDate = firstDateOfMonth.with(TemporalAdjusters.nextOrSame(dayOfWeek));

                    while (startDate.getMonthValue() == targetDate.getMonthValue()) {
                        SessionDto sessionDto = SessionDto.builder()
                                .lessonId(targetLesson.getLessonId())
                                .isCompleted(false)
                                .startTime(targetLesson.getStartTime())
                                .endTime(targetLesson.getEndTime())
                                .actualDate(startDate)
                                .defaultDate(startDate)
                                .duration((short) Duration.between(targetLesson.getStartTime(), targetLesson.getEndTime()).toMinutes())
                                .build();

                        if (sessionDto.getActualDate().isAfter(lessonDto.getStartDate())) {
                            sessionDtoList.add(sessionDto);
                        }
                        startDate = startDate.plusWeeks(1);
                    }
                }
            }
        }

        // 완료된 DtoList 를 탐색하며 생성하기
        for (SessionDto sessionDto : sessionDtoList) {
            sessionService.addSession(tutorId, sessionDto);
        }

        // studentLesson 등록
        Optional<Long> student = studentLessonService.addStudentLesson(lesson.getLessonId(), lessonDto.getStudents());

        // lessonTag 등록
        Tag tag = (Tag) lessonTagService.addLessonTag(lesson.getTutorId(), lesson.getLessonId(), lessonDto.getTags());

        return ResponseEntity.status(200).body(baseResponseBody);
    }

    @ApiOperation(value="수업 조회", notes="수업 ID로 수업 상세 내용 조회")
    @GetMapping("/{tutorId}/{lessonId}")
    public ResponseEntity<?> lessonFind(@PathVariable Long tutorId, @PathVariable Long lessonId) {
        BaseResponseBody baseResponseBody;

        Optional<LessonDto> lesson = (Optional<LessonDto>) lessonService.findLesson(tutorId, lessonId);

        baseResponseBody = BaseResponseBody.builder()
                .message("success").statusCode(200)
                .responseData(lesson).build();

        return ResponseEntity.status(200).body(baseResponseBody);
    }

    @ApiOperation(value="강사별 수업 조회", notes="강사 id로 수업 조회")
    @GetMapping("/{tutorId}")
    public ResponseEntity<?> lessonsFind(@PathVariable Long tutorId) {
        BaseResponseBody baseResponseBody;

        List<LessonDto> lessonDto = lessonService.findLessons(tutorId);

        baseResponseBody = BaseResponseBody.builder()
                .message("success").statusCode(200)
                .responseData(lessonDto).build();

        return ResponseEntity.status(200).body(baseResponseBody);
    }

    @ApiOperation(value="수업 비활성화", notes="수업 ID로 수업 비활성화")
    @GetMapping("/deactivate/{tutorId}/{lessonId}")
    public ResponseEntity<?> lessonDeactivate(@PathVariable Long tutorId, @PathVariable Long lessonId) {
        BaseResponseBody baseResponseBody;

        Lesson lesson = (Lesson) lessonService.deactivateLesson(tutorId, lessonId);

        baseResponseBody = BaseResponseBody.builder()
                .message("success").statusCode(200)
                .responseData(lesson.isEnded()).build();

        return ResponseEntity.status(200).body(baseResponseBody);    }


    @ApiOperation(value = "수업 수정", notes = "수업 ID로 수업 수정")
    @PutMapping("/{lessonId}")
    public ResponseEntity<?> lessonModify(@PathVariable Long lessonId, @RequestBody ModifyLessonDto lessonDto, Authentication authentication) {

        BaseResponseBody baseResponseBody;

        Tutor tutor = (Tutor) authentication.getPrincipal();

        Long tutorId = tutor.getTutorId();


        Optional<Lesson> lesson = lessonService.modifyLesson(tutorId, lessonId, lessonDto);

        if (lessonService.modifyLesson(tutorId, lessonId, lessonDto).isPresent()) {

            baseResponseBody = BaseResponseBody.builder()
                    .message("success").statusCode(200)
                    .responseData(lesson).build();

            // schedule 업데이트
            Schedule schedule = (Schedule) scheduleService.modifySchedule(lessonDto.getSchedule(), lessonId);

            // students-lesson 업데이트
            StudentLesson studentLesson = studentLessonService.modifyStudentLesson(lessonDto.getStudents(), lessonId);

            // tag 업데이트
            LessonTag lessonTag = lessonTagService.modifyLessonTag(lessonDto.getTags(), lessonId, tutorId);

            return ResponseEntity.status(200).body(baseResponseBody);

        } else {
            baseResponseBody = BaseResponseBody.builder()
                    .message("fail").statusCode(400).build();

            return ResponseEntity.status(400).body(baseResponseBody);
        }

    }

}
