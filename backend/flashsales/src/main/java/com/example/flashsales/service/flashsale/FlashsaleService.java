package com.example.flashsales.service.flashsale;

import com.example.flashsales.model.Flashsale;

import java.util.List;

public interface FlashsaleService {
    public Flashsale addFlashsale(Flashsale flashsale);
    public List<Flashsale> getAllFlashsales();
}
