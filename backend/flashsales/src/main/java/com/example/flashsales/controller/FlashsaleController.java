package com.example.flashsales.controller;

import com.example.flashsales.common.ApiResponse;
import com.example.flashsales.dto.FlashsaleDto;
import com.example.flashsales.dto.response.ResponseDto;
import com.example.flashsales.exception.CustomException;
import com.example.flashsales.model.Flashsale;
import com.example.flashsales.service.flashsale.FlashsaleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/flashsale")
@CrossOrigin
public class FlashsaleController {
    @Autowired
    private FlashsaleService flashsaleService;

    @GetMapping
    ResponseEntity<ApiResponse> all() {
        try{
            return new ResponseEntity<>(new ApiResponse(true, flashsaleService.getAllFlashsales()), HttpStatus.ACCEPTED);
        } catch (Exception e) {
            return new ResponseEntity<>(new ApiResponse(false, e.getMessage() ), HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping
    ResponseEntity<ApiResponse> newFlashsale(@RequestBody FlashsaleDto flashsaleDto) {
        ResponseDto responseDto;
        try {
            responseDto = flashsaleService.addFlashsale( flashsaleDto );
        } catch (CustomException e) {
            return new ResponseEntity<>(new ApiResponse(false, e.getMessage() ), HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(new ApiResponse(true, responseDto.getMessage()), HttpStatus.CREATED);
    }
}

