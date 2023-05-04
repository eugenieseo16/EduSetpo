package com.seosam.edusetpo.children.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ChildrenDto {
    private Long parentId;
    private String childName;
    private Long studentLessonId;

}
