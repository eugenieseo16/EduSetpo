package com.seosam.edusetpo.tutor.dto;

import lombok.Data;

import java.io.Serializable;

@Data
public class CreateTagDto {
    private String tag;

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }
}

