package com.seosam.edusetpo.session.dto;

import lombok.*;

import javax.persistence.Column;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SessionLogDto {
    private LocalDate beforeDate;
    private LocalDate afterDate;
}
