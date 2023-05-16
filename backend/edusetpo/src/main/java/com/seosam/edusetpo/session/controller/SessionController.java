package com.seosam.edusetpo.session.controller;

import com.seosam.edusetpo.lesson.service.LessonService;
import com.seosam.edusetpo.model.BaseResponseBody;
import com.seosam.edusetpo.schedule.dto.WeeklyScheduleDto;
import com.seosam.edusetpo.schedule.service.ScheduleService;
import com.seosam.edusetpo.session.dto.SessionDto;
import com.seosam.edusetpo.session.dto.SessionResponseDto;
import com.seosam.edusetpo.session.dto.ToggleSessionDto;
import com.seosam.edusetpo.session.dto.UpdateSessionDto;
import com.seosam.edusetpo.session.service.SessionService;
import com.seosam.edusetpo.tutor.entity.Tutor;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletRequest;
import java.time.DayOfWeek;
import java.time.Duration;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.temporal.TemporalAdjusters;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@CrossOrigin
@RestController // JSON 형태 결괏값을 반환해줌(@ResponseBody 가 필요없음)
@RequiredArgsConstructor // final 객체를 Constructor Injection 해줌(Autowired 역할)
@RequestMapping("/session")
public class SessionController {

    private final SessionService sessionService;
    private final LessonService lessonService;
    private final ScheduleService scheduleService;

    // create
    @PostMapping("create")
    public ResponseEntity<?> addSession(@RequestBody SessionDto sessionDto, Authentication authentication) {
        BaseResponseBody baseResponseBody;
        Tutor tutor = (Tutor) authentication.getPrincipal();
        Long tutorId = tutor.getTutorId();

        Optional<Long> optionalSessionId = sessionService.addSession(tutorId, sessionDto);
        if (optionalSessionId.isEmpty()) {
            baseResponseBody = BaseResponseBody.builder().message("fail").statusCode(400).build();
            return ResponseEntity.status(400).body(baseResponseBody);
        }
        baseResponseBody = BaseResponseBody.builder().message("success").statusCode(200).responseData(sessionDto).build();
        return ResponseEntity.status(200).body(baseResponseBody);

    }

    // read
    @GetMapping("detail/{sessionId}")
    public ResponseEntity<?> findSession(@PathVariable("sessionId") Long sessionId, ServletRequest request) {
        Long tutorId = 1L;
        Long lessonId = 1L;

        BaseResponseBody baseResponseBody;

        Optional<SessionResponseDto> optionalSession = sessionService.findSession(sessionId);
        if (optionalSession.isEmpty()) {
            baseResponseBody = BaseResponseBody.builder().message("fail").statusCode(400).build();
            return ResponseEntity.status(400).body(baseResponseBody);
        }
        baseResponseBody = BaseResponseBody.builder().message("success").statusCode(200).responseData(optionalSession.get()).build();
        return ResponseEntity.status(200).body(baseResponseBody);
    }

    @GetMapping("list/lesson-id/{lessonId}")
    public ResponseEntity<?> findAllSessionByLessonId(@PathVariable("lessonId") Long lessonId) {
        BaseResponseBody baseResponseBody;
        List<SessionResponseDto> sessionList = sessionService.findAllSessionByLessonId(lessonId);
        if (sessionList.isEmpty()) {
            baseResponseBody = BaseResponseBody.builder().message("fail").statusCode(400).build();
            return ResponseEntity.status(400).body(baseResponseBody);
        }
        baseResponseBody = BaseResponseBody.builder().message("success").statusCode(200).responseData(sessionList.listIterator()).build();
        return ResponseEntity.status(200).body(baseResponseBody);
    }

    @GetMapping("list/month/{year}/{month}")
    public ResponseEntity<?> findAllSessionByMonth(@PathVariable("year") Integer year, @PathVariable("month") Integer month, Authentication authentication, @RequestParam(required = false) Optional<Long> lessonId) {
        BaseResponseBody baseResponseBody;
        Tutor tutor = (Tutor) authentication.getPrincipal();
        Long tutorId = tutor.getTutorId();
        List<SessionResponseDto> sessionList;
        if (lessonId.isPresent()) {
            sessionList = sessionService.findAllSessionByTutorIdAndLessonId(tutorId, lessonId.get());
        } else {
            sessionList = sessionService.findAllSessionByTutorId(tutorId);
        }
        List<SessionResponseDto> sortedSessionList = new ArrayList<>();
        for (SessionResponseDto sessionResponseDto : sessionList) {
            if(month.equals(sessionResponseDto.getActualDate().getMonthValue()) && year.equals(sessionResponseDto.getActualDate().getYear())) {
                sortedSessionList.add(sessionResponseDto);
            }
        }

        // 달력 자동갱신 logic
        LocalDate currentMonth = LocalDate.now();
        Integer currentMonthToInteger = LocalDate.now().getMonthValue();
        System.out.println(currentMonthToInteger + "@@@@@");
        if (currentMonthToInteger.equals(3)
            || currentMonthToInteger.equals(6)
            || currentMonthToInteger.equals(9)
            || currentMonthToInteger.equals(12)) {

            List<LocalDate> targetDates = new ArrayList<>();
            targetDates.add(currentMonth.plusMonths(6));
            targetDates.add(currentMonth.plusMonths(7));
            targetDates.add(currentMonth.plusMonths(8));

            List<SessionDto> sessionDtoList = new ArrayList<>();
            Map<String, List<WeeklyScheduleDto>> schedules = scheduleService.findScheduleByTutorId(tutorId);

            DayOfWeek[] dayOfWeeks = DayOfWeek.values();
            for (DayOfWeek dayOfWeek : dayOfWeeks) {
                String dayOfWeekString = dayOfWeek.toString();

                if (!schedules.containsKey(dayOfWeekString)) {
                    continue; // 해당 요일의 스케줄이 없으면 다음 요일로 넘어감
                }

                // 해당 요일의 WeeklyScheduleDto 리스트
                List<WeeklyScheduleDto> weeklySchedules = schedules.get(dayOfWeekString);
                // 리스트 속 lesson 들을 순회하며
                for (WeeklyScheduleDto lesson : weeklySchedules) {
                    // lesson 별 3개월치씩 순회하며
                    for (LocalDate targetDate : targetDates) {
                        LocalDate firstDateOfMonth = LocalDate.of(targetDate.getYear(), targetDate.getMonth(), 1);
                        LocalDate startDate = firstDateOfMonth.with(TemporalAdjusters.nextOrSame(dayOfWeek));

                        while (startDate.getMonthValue() == targetDate.getMonthValue()) {
                            SessionDto sessionDto = SessionDto.builder()
                                    .lessonId(lesson.getLessonId())
                                    .isCompleted(false)
                                    .actualDate(startDate)
                                    .defaultDate(startDate)
                                    .startTime(lesson.getStartTime())
                                    .endTime(lesson.getEndTime())
                                    .duration((short) Duration.between(lesson.getStartTime(), lesson.getEndTime()).toMinutes())
                                    .build();
                            sessionDtoList.add(sessionDto);
                            startDate = startDate.plusWeeks(1);
                        }
                    }
                }
            }
            // 완료된 DtoList 를 탐색하며 생성하기
            for (SessionDto sessionDto : sessionDtoList) {
                sessionService.addSession(tutorId, sessionDto);
                System.out.println("생성" + sessionDto.getLessonId());
            }
//            for (Map.Entry<String, List<WeeklyScheduleDto>> entry : schedules.entrySet()) {
//                if (entry.getKey().equals("MONDAY")) {
//                    DayOfWeek dayOfWeek = DayOfWeek.MONDAY;
//                    for (WeeklyScheduleDto lesson : entry.getValue()) {
//                        for (LocalDate targetDate : targetDates) {
//                            LocalDate firstDateOfMonth = LocalDate.of(targetDate.getYear(), targetDate.getMonth(), 1);
//                            LocalDate startDate = firstDateOfMonth.with(TemporalAdjusters.nextOrSame(dayOfWeek));
//
//                            while (startDate.getMonthValue() == targetDate.getMonthValue()) {
//                                SessionDto sessionDto = SessionDto.builder()
//                                        .isCompleted(false)
//                                        .actualDate(startDate)
//                                        .defaultDate(startDate)
//                                        .startTime(lesson.getStartTime())
//                                        .endTime(lesson.getEndTime())
//                                        .duration((short) Duration.between(lesson.getStartTime(), lesson.getEndTime()).toMinutes())
//                                        .build();
//                                sessionDtoList.add(sessionDto);
//                                startDate = startDate.plusWeeks(1);
//                            }
//                        }
//                    }
//                }
//            }
        }
        if (sortedSessionList.isEmpty()) {
            baseResponseBody = BaseResponseBody.builder().message("fail").statusCode(400).build();
            return ResponseEntity.status(400).body(baseResponseBody);
        }
        baseResponseBody = BaseResponseBody.builder().message("success").statusCode(200).responseData(sortedSessionList.listIterator()).build();
        return ResponseEntity.status(200).body(baseResponseBody);    }

    @GetMapping("list/actual-date/{actualDate}")
    public ResponseEntity<?> findAllSessionByActualDate(@PathVariable("actualDate") String input, Authentication authentication) {
        BaseResponseBody baseResponseBody;
        LocalDate actualDate = LocalDate.parse(input, DateTimeFormatter.ISO_DATE);
        Tutor tutor = (Tutor) authentication.getPrincipal();
        Long tutorId = tutor.getTutorId();

        List<SessionResponseDto> sessionList = sessionService.findAllSessionByActualDate(tutorId, actualDate);
        if (sessionList.isEmpty()) {
            baseResponseBody = BaseResponseBody.builder().message("fail").statusCode(400).build();
            return ResponseEntity.status(400).body(baseResponseBody);
        }
        baseResponseBody = BaseResponseBody.builder().message("success").statusCode(200).responseData(sessionList.listIterator()).build();
        return ResponseEntity.status(200).body(baseResponseBody);
    }
    // update
    @PutMapping("detail/{sessionId}")
    public ResponseEntity<?> updateSession(@PathVariable("sessionId") Long sessionId, @RequestBody UpdateSessionDto updateSessionDto, Authentication authentication) {
        BaseResponseBody baseResponseBody;
        Tutor tutor = (Tutor) authentication.getPrincipal();
        Long tutorId = tutor.getTutorId();

        if (sessionService.updateSession(tutorId, sessionId, updateSessionDto)) {
            baseResponseBody = BaseResponseBody.builder().message("success").statusCode(200).responseData(updateSessionDto).build();
            return  ResponseEntity.status(200).body(baseResponseBody);
        }
        baseResponseBody = BaseResponseBody.builder().message("fail").statusCode(400).build();
        return ResponseEntity.status(400).body(baseResponseBody);
    }

    @PutMapping("detail/toggle/{sessionId}")
    public ResponseEntity<?> toggleSession(@PathVariable("sessionId") Long sessionId, @RequestBody ToggleSessionDto toggleSessionDto, Authentication authentication) {
        BaseResponseBody baseResponseBody;
        Tutor tutor = (Tutor) authentication.getPrincipal();
        Long tutorId = tutor.getTutorId();

        if (sessionService.toggleSession(tutorId, sessionId, toggleSessionDto)) {
            baseResponseBody = BaseResponseBody.builder().message("success").statusCode(200).responseData(toggleSessionDto).build();
            return  ResponseEntity.status(200).body(baseResponseBody);
        }
        baseResponseBody = BaseResponseBody.builder().message("fail").statusCode(400).build();
        return ResponseEntity.status(400).body(baseResponseBody);
    }
}
