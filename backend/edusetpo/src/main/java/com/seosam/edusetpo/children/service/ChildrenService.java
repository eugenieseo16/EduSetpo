package com.seosam.edusetpo.children.service;

import com.seosam.edusetpo.children.dto.ChildrenAddDto;
import com.seosam.edusetpo.children.entity.Children;

import java.util.Optional;

public interface ChildrenService {
    //create
    Optional<Long> childrenAdd(Long parentId, ChildrenAddDto childrenAddDto);

    default Children toEntity(ChildrenAddDto childrenAddDto) {
        return Children.builder()
                .parentId(childrenAddDto.getParentId())
                .childName(childrenAddDto.getChildName())
                .studentLessonId(childrenAddDto.getStudentLessonId())
                .build();
    }

    void childrenRemove(Long childId);
}
