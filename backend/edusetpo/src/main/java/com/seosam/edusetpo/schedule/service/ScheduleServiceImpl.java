package com.seosam.edusetpo.schedule.service;

import com.seosam.edusetpo.schedule.dto.CreateScheduleDto;
import com.seosam.edusetpo.schedule.dto.FindScheduleDto;
import com.seosam.edusetpo.schedule.entity.Schedule;
import com.seosam.edusetpo.schedule.repository.ScheduleRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.*;

@Service
//@RequiredArgsConstructor
public class ScheduleServiceImpl implements ScheduleService {

    private final ScheduleRepository scheduleRepository;

    public ScheduleServiceImpl(ScheduleRepository scheduleRepository) {
        this.scheduleRepository = scheduleRepository;
    }

    @Override
    public Long addSchedule(CreateScheduleDto createScheduleDto) {
        return null;
    }

    @Override
    public Schedule addSchedule(List<List<String>> schedules, Long lessonId) {

        if (schedules.get(0).get(0).contains("DAY")) {

            for (List<String> schedule : schedules) {

                int startTime = (Integer.parseInt(schedule.get(1).substring(0, 2)) * 60) + Integer.parseInt(schedule.get(1).substring(3, 5));
                int endTime = (Integer.parseInt(schedule.get(2).substring(0, 2)) * 60) + Integer.parseInt(schedule.get(2).substring(3, 5));

                Schedule newSchedule = new Schedule();

                newSchedule = Schedule.builder()
                        .createdAt(LocalDateTime.now())
                        .duration(endTime - startTime)
                        .endTime(LocalTime.parse(schedule.get(2)))
                        .lessonDay(schedule.get(0))
                        .startTime(LocalTime.parse(schedule.get(1)))
                        .lessonId(lessonId)
                        .build();

                scheduleRepository.save(newSchedule);

            }

            return null;

        } else {

            return null;

        }
    }

    @Override
    @Transactional
    public Schedule modifySchedule(List<List<String>> schedules, Long lessonId){
        scheduleRepository.deleteByLessonId(lessonId);

        if (schedules.get(0).get(0).contains("DAY")) {

            for (List<String> schedule : schedules) {

                int startTime = (Integer.parseInt(schedule.get(1).substring(0, 2)) * 60) + Integer.parseInt(schedule.get(1).substring(3, 5));
                int endTime = (Integer.parseInt(schedule.get(2).substring(0, 2)) * 60) + Integer.parseInt(schedule.get(2).substring(3, 5));

                Schedule newSchedule = new Schedule();

                newSchedule = Schedule.builder()
                        .createdAt(LocalDateTime.now())
                        .duration(endTime - startTime)
                        .endTime(LocalTime.parse(schedule.get(2)))
                        .lessonDay(schedule.get(0))
                        .startTime(LocalTime.parse(schedule.get(1)))
                        .lessonId(lessonId)
                        .build();

                scheduleRepository.save(newSchedule);

            }

            return null;

        } else {

            return null;

        }

    }

    @Override
    public Map<String, List<Object>> findSchedule(Long tutorId) {

        List<Schedule> schedules = scheduleRepository.findAllByLesson_TutorId(tutorId);
        Map<String, List<Object>> scheduleMap = new LinkedHashMap<>();

        // initialize map with empty lists for each day
        scheduleMap.put("MONDAY", new ArrayList<>());
        scheduleMap.put("TUESDAY", new ArrayList<>());
        scheduleMap.put("WEDNESDAY", new ArrayList<>());
        scheduleMap.put("THURSDAY", new ArrayList<>());
        scheduleMap.put("FRIDAY", new ArrayList<>());
        scheduleMap.put("SATURDAY", new ArrayList<>());
        scheduleMap.put("SUNDAY", new ArrayList<>());

        List<Object> monday = scheduleMap.get("MONDAY");
        List<Object> tuesday =  scheduleMap.get("TUESDAY");
        List<Object> wednesday = scheduleMap.get("WEDNESDAY");
        List<Object> thursday = scheduleMap.get("THURSDAY");
        List<Object> friday = scheduleMap.get("FRIDAY");
        List<Object>  saturday = scheduleMap.get("SATURDAY");
        List<Object> sunday = scheduleMap.get("SUNDAY");

        // add schedules to corresponding day lists
        for (Schedule schedule : schedules) {
            String day = schedule.getLessonDay();

            Map<String, Object> weeklySchedule = new HashMap<>();
            weeklySchedule.put("lessonName", schedule.getLesson().getLessonName());
            weeklySchedule.put("lessonId", schedule.getLessonId());
            weeklySchedule.put("startTime", schedule.getStartTime());
            weeklySchedule.put("endTime", schedule.getEndTime());


            if (schedule.getLessonDay().equals("MONDAY")) {
                monday.add(weeklySchedule);
            } else if (schedule.getLessonDay().equals("TUESDAY")) {
                tuesday.add(weeklySchedule);
            } else if (schedule.getLessonDay().equals("WEDNESDAY")) {
                wednesday.add(weeklySchedule);
            } else if (schedule.getLessonDay().equals("THURSDAY")) {
                thursday.add(weeklySchedule);
            } else if (schedule.getLessonDay().equals("FRIDAY")) {
                friday.add(weeklySchedule);
            } else if (schedule.getLessonDay().equals("SATURDAY")) {
                saturday.add(weeklySchedule);
            } else {
                sunday.add(weeklySchedule);
            }
        }

        for (List<Object> daySchedules : scheduleMap.values()) {
            // sort by startTime
            Collections.sort(daySchedules, new Comparator<Object>() {
                @Override
                public int compare(Object o1, Object o2) {
                    String startTime1 = ((Map<String, Object>) o1).get("startTime").toString();
                    String startTime2 = ((Map<String, Object>) o2).get("startTime").toString();
                    return startTime1.compareTo(startTime2);
                }
            });
        }

        return scheduleMap;
    }

}
