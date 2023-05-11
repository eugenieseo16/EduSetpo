package com.seosam.edusetpo.parent.dto.response;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ParentInfoRespDto {
    private String email;
    private String name;
}
