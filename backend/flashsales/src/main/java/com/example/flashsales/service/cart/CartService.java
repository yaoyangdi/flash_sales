package com.example.flashsales.service.cart;

import com.example.flashsales.dto.AddToCartDto;

import com.example.flashsales.dto.response.ResponseDto;
import com.example.flashsales.model.Cart_Product;
import com.example.flashsales.model.User;

import java.util.List;

public interface CartService {
    ResponseDto addToCart(AddToCartDto addToCartDto, User user);

    List<Cart_Product> getAllItems(User user);

    void increaseAmount(long id);

    void decreaseAmount(long id);
}