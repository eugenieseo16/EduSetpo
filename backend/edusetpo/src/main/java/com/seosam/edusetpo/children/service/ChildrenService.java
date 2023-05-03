package com.seosam.edusetpo.children.service;

import com.seosam.edusetpo.children.dto.ChildrenCreateDto;
import com.seosam.edusetpo.children.entity.Children;

import java.util.Optional;

public interface ChildrenService {
    //create
    Optional<Long> createChildren(Long parentId, ChildrenCreateDto childrenCreateDto);

    default Children toEntity(ChildrenCreateDto childrenCreateDto) {
        return Children.builder()
                .parentId(childrenCreateDto.getParentId())
                .childName(childrenCreateDto.getChildName())
                .studentLessonId(childrenCreateDto.getStudentLessonId())
                .build();
    }
}
