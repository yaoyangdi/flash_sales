package com.example.flashsales.dto.response;

import lombok.Data;

@Data
public class SignInResponseDto {
    private String status;
    private String token;

    public SignInResponseDto(String status, String token) {
        this.status = status;
        this.token = token;
    }
}
