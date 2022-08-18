package com.example.flashsales.dto.response;

import lombok.Data;

@Data
public class ResponseDto {
    private String status;
    private String message;

    public ResponseDto(String status, String message) {
        this.status = status;
        this.message = message;
    }
}
