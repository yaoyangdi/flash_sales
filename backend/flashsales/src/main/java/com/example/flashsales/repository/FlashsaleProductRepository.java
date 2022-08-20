package com.example.flashsales.repository;

import com.example.flashsales.model.Flashsale_product;
import com.example.flashsales.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FlashsaleProductRepository extends JpaRepository<Flashsale_product, Long> {
    Flashsale_product findByProduct(Product product);
}
