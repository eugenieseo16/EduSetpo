package com.seosam.edusetpo.lessonTag.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class FindTagsDto {
    private int tagId;
    private String tag;
}
