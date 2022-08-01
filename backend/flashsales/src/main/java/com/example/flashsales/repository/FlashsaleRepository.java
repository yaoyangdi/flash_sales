package com.example.flashsales.repository;

import com.example.flashsales.model.Flashsale;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FlashsaleRepository extends JpaRepository<Flashsale, Long> {
}
