package com.example.flashsales.service;

import com.example.flashsales.model.Flashsale;

import java.util.List;

public interface FlashsaleService {
    public Flashsale addFlashsale(Flashsale flashsale);
    public List<Flashsale> getAllFlashsales();
}
