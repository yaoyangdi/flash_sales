package com.example.flashsales.dto;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.math.BigDecimal;
import java.util.Date;

@Data
public class FlashsaleDto {
    private Integer productId;
    private BigDecimal newPrice;
    private Integer totalStock;
    private Date startTime;
    private Date endTime;
}
