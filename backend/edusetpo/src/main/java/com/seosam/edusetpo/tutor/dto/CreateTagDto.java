package com.seosam.edusetpo.tutor.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CreateTagDto {
    private String tag;
//    private Long tutorId;

//    public String getTag() {
//        return tag;
//    }

//    public void setTag(String tag) {
//        this.tag = tag;
//    }
}

