package com.example.flashsales.service.flashsale;

import com.example.flashsales.dto.FlashsaleDto;
import com.example.flashsales.dto.response.ResponseDto;
import com.example.flashsales.model.Flashsale;

import java.util.List;

public interface FlashsaleService {
    public ResponseDto addFlashsale(FlashsaleDto flashsaleDto);
    public List<Flashsale> getAllFlashsales();

}
