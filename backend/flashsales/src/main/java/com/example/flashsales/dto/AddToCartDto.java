package com.example.flashsales.dto;

import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
public class AddToCartDto {
    private @NotNull Integer productId;
    private @NotNull Integer qty;
    private String size;
}
