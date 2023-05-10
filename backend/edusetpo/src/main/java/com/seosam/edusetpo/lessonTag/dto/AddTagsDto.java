package com.seosam.edusetpo.lessonTag.dto;

import com.seosam.edusetpo.tutor.entity.Tag;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AddTagsDto {
    private int tagId;
    private Object tag;
}