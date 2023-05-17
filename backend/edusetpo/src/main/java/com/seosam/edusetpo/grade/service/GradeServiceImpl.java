package com.seosam.edusetpo.grade.service;

import com.seosam.edusetpo.grade.dto.GradeCreateDto;
import com.seosam.edusetpo.grade.dto.GradeDto;
import com.seosam.edusetpo.grade.dto.GradeUpdateDto;
import com.seosam.edusetpo.grade.entity.Grade;
import com.seosam.edusetpo.grade.repository.GradeRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class GradeServiceImpl implements GradeService{
    private final GradeRepository gradeRepository;

    public GradeServiceImpl(GradeRepository gradeRepository) {
        this.gradeRepository = gradeRepository;
    }


    @Override
    public Optional<Long> createGrade(GradeCreateDto gradeCreateDto) {
        Grade grade = toEntity(gradeCreateDto);
        gradeRepository.save(grade);

        return Optional.of(grade.getGradeId());
    }

    @Override
    public List<GradeDto> findGradeByCategory(Long categoryId) {
        List<Grade> gradeList = gradeRepository.findByCategoryId(categoryId);
        return gradeList.stream().map(this::toResponseDto).collect(Collectors.toList());
    }

    @Override
    public List<GradeDto> findGradeByStudentLessonId(Long studentLessonId) {
        List<Grade> gradeList = gradeRepository.findByStudentLessonId(studentLessonId);
        return gradeList.stream().map(this::toResponseDto).collect(Collectors.toList());
    }

    @Override
    public void deleteGrade(Long gradeId) {
        gradeRepository.deleteById(gradeId);
    }

    @Override
    public boolean updateGrade(Long gradeId, GradeUpdateDto gradeUpdateDto){
        Optional<Grade> optionalGrade = gradeRepository.findById(gradeId);

        if (optionalGrade.isPresent()) {
            Grade grade = optionalGrade.get();
            grade.updateGrade(gradeUpdateDto.getCategoryId(), gradeUpdateDto.getExamTitle(), gradeUpdateDto.getScore(), gradeUpdateDto.getExamDate());
            gradeRepository.save(grade);
            return true;
        }
        return false;
    }
}
