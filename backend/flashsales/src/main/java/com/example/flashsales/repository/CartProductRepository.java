package com.example.flashsales.repository;

import com.example.flashsales.model.Cart_Product;
import com.example.flashsales.model.Product;
import com.example.flashsales.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CartProductRepository extends JpaRepository<Cart_Product, Long> {
    List<Cart_Product> findByUser(User user);

    Cart_Product findByCartProduct(Product products);
}
