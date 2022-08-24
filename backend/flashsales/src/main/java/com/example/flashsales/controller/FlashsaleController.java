package com.example.flashsales.controller;

import com.example.flashsales.common.ApiResponse;
import com.example.flashsales.dto.FlashsaleDto;
import com.example.flashsales.dto.response.ResponseDto;
import com.example.flashsales.exception.AuthenticationFailException;
import com.example.flashsales.exception.CustomException;
import com.example.flashsales.model.Flashsale;
import com.example.flashsales.model.User;
import com.example.flashsales.service.cart.CartService;
import com.example.flashsales.service.flashsale.FlashsaleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("/flashsale")
@CrossOrigin
public class FlashsaleController {
    @Autowired
    private FlashsaleService flashsaleService;
    @Autowired
    private CartService cartService;

    @GetMapping
    ResponseEntity<ApiResponse> all() {
        try{
            return new ResponseEntity<>(new ApiResponse(true, flashsaleService.getAllFlashsales()), HttpStatus.ACCEPTED);
        } catch (CustomException e) {
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

    @PutMapping("/process")
    ResponseEntity<ApiResponse> processFlashsale(@RequestParam("id") long id) {
        ResponseDto responseDto;
        try {
            responseDto = flashsaleService.processFlashsale(id);
        } catch (CustomException e) {
            return new ResponseEntity<>(new ApiResponse(false, e.getMessage() ), HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(new ApiResponse(true, responseDto.getMessage()), HttpStatus.ACCEPTED);
    }

    @PutMapping
    public ResponseEntity<ApiResponse> update(@RequestParam("id") long id, @RequestParam(name = "status", required = false) Integer status, @RequestParam(name ="startTime", required = false) String startTime, @RequestParam(name = "endTime", required = false) String endTime) {
        ResponseDto responseDto;   // initialization
        try{
            if (Objects.nonNull(status)) {
                responseDto = flashsaleService.updateStatus(id, status);
            } else if (Objects.nonNull(startTime)) {
                responseDto = flashsaleService.updateStartTime(id, startTime);
            } else if (Objects.nonNull(endTime)) {
                responseDto = flashsaleService.updateEndTime(id, endTime);
            } else {
                return new ResponseEntity<>(new ApiResponse(false, "No valid path parameter!"), HttpStatus.BAD_REQUEST);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(new ApiResponse(false, e.getMessage()), HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(new ApiResponse(true, responseDto.getMessage()),HttpStatus.ACCEPTED);
    }
}

