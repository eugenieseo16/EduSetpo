package com.seosam.edusetpo.homework.service;

import com.seosam.edusetpo.homework.dto.HomeworkCompleteDto;
import com.seosam.edusetpo.homework.dto.HomeworkDto;
import com.seosam.edusetpo.homework.dto.HomeworkUpdateDto;
import com.seosam.edusetpo.homework.entity.Homework;
import com.seosam.edusetpo.homework.repository.HomeworkRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class HomeworkServiceImpl implements HomeworkService{
    private final HomeworkRepository homeworkRepository;


    public HomeworkServiceImpl(HomeworkRepository homeworkRepository) {
        this.homeworkRepository = homeworkRepository;
    }

    @Override
    public Optional<Long> createHomework(HomeworkDto homeworkDto) {
        Homework homework = toEntity(homeworkDto);
        homeworkRepository.save(homework);

        return Optional.of(homework.getHomeworkId());
    }

    @Override
    public List<HomeworkDto> findHomeworkByStudentAndSession(Long studentId, Long sessionId) {
        List<Homework> homeworkList = homeworkRepository.findHomeworkByStudentIdAndSessionId(studentId, sessionId);
        return homeworkList.stream().map(this::toResponseDto).collect(Collectors.toList());
    }

    @Override
    public void deleteHomework(Long homeworkId) {
        homeworkRepository.deleteById(homeworkId);
    }

    @Override
    public boolean completeHomework(Long homeworkId, HomeworkCompleteDto homeworkCompleteDto) {
        Optional<Homework> optionalHomework = homeworkRepository.findById(homeworkId);
        if(optionalHomework.isPresent()) {
            Homework homework = optionalHomework.get();
            homework.completeHomework(homework.getIsCompleted());
            homeworkRepository.save(homework);
            return true;
        }
        return false;
    }

    @Override
    public boolean updateHomework(Long homeworkId, HomeworkUpdateDto homeworkUpdateDto) {
        Optional<Homework> optionalHomework = homeworkRepository.findById(homeworkId);
        if (optionalHomework.isPresent()) {
            Homework homework = optionalHomework.get();
            homework.updateHomework(homeworkUpdateDto.getContent(), homeworkUpdateDto.getSessionId());
            homeworkRepository.save(homework);
            return true;
        }
        return false;
    }

}