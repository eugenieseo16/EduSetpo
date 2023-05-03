package com.seosam.edusetpo.schedule.repository;

import com.seosam.edusetpo.schedule.entity.Schedule;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ScheduleRepository extends JpaRepository<Schedule, Long> {
}
