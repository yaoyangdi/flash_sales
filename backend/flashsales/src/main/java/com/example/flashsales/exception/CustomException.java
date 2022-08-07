package com.example.flashsales.exception;

import org.springframework.web.bind.annotation.ControllerAdvice;

public class CustomException extends IllegalArgumentException {
    public CustomException(String msg) {
        super(msg);
    }
}
