package com.seosam.edusetpo.lesson.service;

import com.seosam.edusetpo.lesson.dto.CreateLessonDto;
import com.seosam.edusetpo.lesson.dto.LessonDto;
import com.seosam.edusetpo.lesson.dto.ModifyLessonDto;
import com.seosam.edusetpo.lesson.entity.Lesson;
import com.seosam.edusetpo.lesson.repository.LessonRepository;
import com.seosam.edusetpo.lessonTag.entity.LessonTag;
import com.seosam.edusetpo.lessonTag.repository.LessonTagRepository;
import com.seosam.edusetpo.schedule.dto.ScheduleDto;
import com.seosam.edusetpo.schedule.entity.Schedule;
import com.seosam.edusetpo.schedule.repository.ScheduleRepository;
import com.seosam.edusetpo.session.entity.Session;
import com.seosam.edusetpo.student.dto.FindStudentDto;
import com.seosam.edusetpo.student.entity.Student;
import com.seosam.edusetpo.student.repository.StudentRepository;
import com.seosam.edusetpo.studentlesson.entity.StudentLesson;
import com.seosam.edusetpo.studentlesson.repository.StudentLessonRepository;
import com.seosam.edusetpo.tutor.dto.FindTagDto;
import com.seosam.edusetpo.tutor.entity.Tag;
import com.seosam.edusetpo.tutor.repository.TagRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class LessonServiceImpl implements  LessonService{

    private final LessonRepository lessonRepository;
    private final TagRepository tagRepository;
    private final StudentRepository studentRepository;
    private final ScheduleRepository scheduleRepository;
    private final LessonTagRepository lessonTagRepository;
    private final StudentLessonRepository studentLessonRepository;

    public LessonServiceImpl(LessonRepository lessonRepository, TagRepository tagRepository, StudentRepository studentRepository, ScheduleRepository scheduleRepository, LessonTagRepository lessonTagRepository, StudentLessonRepository studentLessonRepository) {
        this.lessonRepository = lessonRepository;
        this.tagRepository = tagRepository;
        this.studentRepository = studentRepository;
        this.scheduleRepository = scheduleRepository;
        this.lessonTagRepository = lessonTagRepository;
        this.studentLessonRepository = studentLessonRepository;
    }

    @Override
    public Lesson addLesson(CreateLessonDto lessonDto) {

        Lesson lesson = new Lesson();

        int totalTime = lesson.calculateTotalTime(lessonDto.getSchedule(), lessonDto.getNumOfSession());

        lesson = Lesson.builder()
                .tutorId(lessonDto.getTutorId())
                .lessonName(lessonDto.getLessonName())
                .memo(lessonDto.getMemo())
                .startDate(lessonDto.getStartDate())
                .totalTime(totalTime)
                .createdAt(LocalDateTime.now())
                .isEnded(false)
                .build();

        lessonRepository.save(lesson);

        return lesson;
    }

    @Override
    public Optional<LessonDto> findLesson(Long tutorId, Long lessonId) {
        Optional<Lesson> lesson = lessonRepository.findByTutorIdAndAndLessonId(tutorId, lessonId);

        //tag
        List<FindTagDto> tags = new ArrayList<>();

        List<LessonTag> lessonTags = lessonTagRepository.findAllByLessonId(lesson.get().getLessonId());

        for (LessonTag lessonTag : lessonTags) {
            Tag tagByTagId = tagRepository.findByTagId(lessonTag.getTagId());

            tags.add(FindTagDto.builder()
                    .tag(tagByTagId.getTag())
                    .tagId(Math.toIntExact(lessonTag.getTagId()))
                    .build());
        }

        //schedule
        List<ScheduleDto> schedules = new ArrayList<>();
        List<Schedule> scheduleDetails = scheduleRepository.findAllByLessonId(lesson.get().getLessonId());


        for (Schedule scheduleDetail : scheduleDetails) {
            System.out.println(scheduleDetail + "****");
            schedules.add(ScheduleDto.builder()
                    .day(scheduleDetail.getLessonDay())
                    .startTime(scheduleDetail.getStartTime())
                    .endTime(scheduleDetail.getEndTime())
                    .build());
        }

        //students
        List<FindStudentDto> findStudents = new ArrayList<>();
        List<StudentLesson> students = studentLessonRepository
                .findAllByLessonId(lesson.get().getLessonId());

        for (StudentLesson student : students) {
            Optional<Student> studentDetail = studentRepository.findByStudentId(student.getStudentId());

            Optional<StudentLesson> studentLesson = studentLessonRepository.findByStudentIdAndLessonId(student.getStudentId(), lessonId);

            if (studentLesson.get().getIsActive()) {
                System.out.println("pass");

                findStudents.add(FindStudentDto.builder()
                        .studentId(studentDetail.get().getStudentId())
                        .studentName(studentDetail.get().getStudentName())
                        .build());
                }
            }


        Optional<LessonDto> lessonDetail = Optional.ofNullable(LessonDto.builder()
                .lessonId(lesson.get().getLessonId())
                .tutorId(lesson.get().getTutorId())
                .lessonName(lesson.get().getLessonName())
                .schedule(schedules)
                .tags(tags)
                .students(findStudents)
                .startDate(lesson.get().getStartDate())
                .memo(lesson.get().getMemo())
                .build());

        return lessonDetail;
    }

    @Override
    public List<LessonDto> findLessons(Long tutorId) {

        List<Lesson> findLessons = lessonRepository.findAllByTutorId(tutorId);

        List<LessonDto> lessons = new ArrayList<>();

        for (Lesson lesson : findLessons) {

            //tag
            List<FindTagDto> tags = new ArrayList<>();

            List<LessonTag> lessonTags = lessonTagRepository.findAllByLessonId(lesson.getLessonId());

            for (LessonTag lessonTag : lessonTags) {
                Tag tagByTagId = tagRepository.findByTagId(lessonTag.getTagId());
                tags.add(FindTagDto.builder()
                        .tag(tagByTagId.getTag())
                        .tagId(Math.toIntExact(lessonTag.getTagId()))
                        .build());
            }

            //schedule
            List<ScheduleDto> schedules = new ArrayList<>();
            List<Schedule> scheduleDetails = scheduleRepository.findAllByLessonId(lesson.getLessonId());


            for (Schedule scheduleDetail : scheduleDetails) {
                schedules.add(ScheduleDto.builder()
                        .day(scheduleDetail.getLessonDay())
                        .startTime(scheduleDetail.getStartTime())
                        .endTime(scheduleDetail.getEndTime())
                        .build());
            }

            //students
            List<FindStudentDto> findStudents = new ArrayList<>();
            List<StudentLesson> students = studentLessonRepository
                    .findAllByLessonId(lesson.getLessonId());

            for (StudentLesson student : students) {
                Optional<Student> studentDetail = studentRepository.findByStudentId(student.getStudentId());

                Optional<StudentLesson> studentLesson = studentLessonRepository.findByStudentIdAndLessonId(student.getStudentId(), lesson.getLessonId());

                if (studentLesson.get().getIsActive()) {

                    findStudents.add(FindStudentDto.builder()
                            .studentId(studentDetail.get().getStudentId())
                            .studentName(studentDetail.get().getStudentName())
                            .build());
                    }
                }

            lessons.add(LessonDto.builder()
                    .lessonId(lesson.getLessonId())
                    .tutorId(lesson.getTutorId())
                    .lessonName(lesson.getLessonName())
                    .schedule(schedules)
                    .tags(tags)
                    .students(findStudents)
                    .startDate(lesson.getStartDate())
                    .memo(lesson.getMemo())
                    .build());

        }

            return lessons;

    }

    @Override
    public Lesson deactivateLesson(Long tutorId, Long lessonId) {

        Optional<Lesson> lesson = lessonRepository.findByTutorIdAndAndLessonId(tutorId, lessonId);
        // TODO. 이미 비활성화 되어있는 수업은 아닌지 검증
        // TODO. 해당 유저의 수업 아이디가 맞는지 검증

        Lesson deactivatedLesson =  lesson.get();
        deactivatedLesson.deactivateLesson();
        lessonRepository.save(deactivatedLesson);

        return deactivatedLesson;
    }

    @Override
    public Optional<Lesson> modifyLesson(Long tutorId, Long lessonId, ModifyLessonDto modifyLessonDto) {

        // current lesson
        Optional<Lesson> lesson = lessonRepository.findByTutorIdAndAndLessonId(tutorId, lessonId);

        if (lesson.isPresent()) {
            Lesson modifiedLesson = lesson.get();

            int totalTime = modifiedLesson.calculateTotalTime(modifyLessonDto.getSchedule(), modifyLessonDto.getNumOfSession());
            modifiedLesson.modifyLesson(modifyLessonDto.getLessonName(), modifyLessonDto.getMemo(), totalTime);
            lessonRepository.save(modifiedLesson);

           return lesson;

        } else {

            return null;

        }
    }
}
