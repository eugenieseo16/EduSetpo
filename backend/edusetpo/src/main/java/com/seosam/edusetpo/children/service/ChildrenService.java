package com.seosam.edusetpo.children.service;

import com.seosam.edusetpo.children.dto.ChildrenDto;
import com.seosam.edusetpo.children.entity.Children;
import com.seosam.edusetpo.parent.entity.Parent;

import java.util.List;
import java.util.Optional;

public interface ChildrenService {
    List<Children> findAllByParentId(Long parentId);

    //create
    Optional<Long> childrenAdd(ChildrenDto childrenDto);

    //read
//    Optional<ChildrenDto> findChildren(Long childId );
    List<Children> findAllChildren();

    //delete
    void childrenRemove(Long childId);

    default Children toEntity(ChildrenDto childrenDto, Parent parent) {
        return Children.builder()
                .parent(parent)
                .childName(childrenDto.getChildName())
                .studentLessonId(childrenDto.getStudentLessonId())
                .build();
    }
}

