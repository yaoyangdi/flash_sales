package com.example.flashsales.dto;

import lombok.Data;

@Data
public class SigninDto {
    private String email;
    private String password;

    public SigninDto(String email, String password) {
        this.email = email;
        this.password = password;
    }

}
