package com.example.flashsales.service.flashsale;

import com.example.flashsales.dto.FlashsaleDto;
import com.example.flashsales.dto.response.ResponseDto;
import com.example.flashsales.model.Flashsale;

import java.text.ParseException;
import java.util.Date;
import java.util.List;

public interface FlashsaleService {
    public ResponseDto addFlashsale(FlashsaleDto flashsaleDto);
    public List<Flashsale> getAllFlashsales();

    ResponseDto processFlashsale(long fp_id);

    ResponseDto updateStatus(long id, int status);

    ResponseDto updateStartTime(long id, String startTime) throws ParseException;

    ResponseDto updateEndTime(long id, String endTime) throws ParseException;
}
