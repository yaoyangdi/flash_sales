package com.example.flashsales.common;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.Date;

@Data
public class ApiResponse {
    private final boolean success;
    private final Object message;

    public ApiResponse(boolean success, Object message) {
        this.success = success;
        this.message = message;
    }

    public boolean isSuccess() {
        return success;
    }
    public String getTimestamp() {
        return new Date().toString();
    }
}
