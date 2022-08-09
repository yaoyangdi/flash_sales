package com.example.flashsales.dto;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.math.BigDecimal;

@Data
public class ProductDto {
    private String title;
    private String description;
    private BigDecimal price;
    private MultipartFile image;

    public ProductDto(String title, String description, BigDecimal price, MultipartFile image) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.image = image;
    }
}
