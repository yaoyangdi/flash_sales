package com.example.flashsales.repository;

import com.example.flashsales.model.Cart_Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartProductRepository extends JpaRepository<Cart_Product, Long> {
}
