package com.example.flashsales.service.product;

import com.example.flashsales.model.Product;

public interface ProductService {
    void saveProduct(Product product);
    Product findById(long id);
    Product findByTitle(String title);
}
