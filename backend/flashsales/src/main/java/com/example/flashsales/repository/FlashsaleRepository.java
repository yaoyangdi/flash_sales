package com.example.flashsales.repository;

import com.example.flashsales.model.Flashsale;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;

public interface FlashsaleRepository extends JpaRepository<Flashsale, Long> {
    Flashsale findByStartTimeAndEndTime(Date startTime, Date endTime);
}
