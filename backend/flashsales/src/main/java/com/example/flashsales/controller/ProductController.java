package com.example.flashsales.controller;

import com.example.flashsales.common.ApiResponse;
import com.example.flashsales.exception.CustomException;
import com.example.flashsales.model.Product;
import com.example.flashsales.service.product.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Objects;

@RestController
@RequestMapping("/product")
public class ProductController {
    @Autowired
    ProductService productService;

    @PostMapping
    public ResponseEntity<ApiResponse> newProduct(@RequestBody Product product){
        productService.saveProduct(product);
        return new ResponseEntity<>(new ApiResponse(true, "Product Added"), HttpStatus.CREATED);
    }
}
