package com.example.flashsales.repository;

import com.example.flashsales.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
    public Product findByTitle(String title);
}
