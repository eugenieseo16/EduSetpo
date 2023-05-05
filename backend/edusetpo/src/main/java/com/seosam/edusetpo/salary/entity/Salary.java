package com.seosam.edusetpo.salary.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Table;

@Getter
@Builder
@NoArgsConstructor
@Table(name = "salary")
public class Salary {
}
