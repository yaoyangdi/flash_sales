package com.example.flashsales.service.cart;

import com.example.flashsales.dto.AddToCartDto;
import com.example.flashsales.model.User;

public interface CartService {
    void addToCart(AddToCartDto addToCartDto, User user);
}
