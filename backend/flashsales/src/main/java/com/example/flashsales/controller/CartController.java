package com.example.flashsales.controller;

import com.example.flashsales.common.ApiResponse;
import com.example.flashsales.dto.AddToCartDto;
import com.example.flashsales.model.User;
import com.example.flashsales.service.cart.CartService;
import com.example.flashsales.service.user.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/cart")
public class CartController {
    @Autowired
    private CartService cartService;
    @Autowired
    private TokenService tokenService;


    // Add an item to the cart
    @PostMapping
    public ResponseEntity<ApiResponse> addToCart(@RequestBody AddToCartDto addToCartDto, @RequestParam("token") String token) {
        // authenticate the token
        tokenService.authenticate(token);
        // find the user
        User user = tokenService.getUser(token);
        cartService.addToCart(addToCartDto, user);
        return new ResponseEntity<>(new ApiResponse(true, "Added to cart"), HttpStatus.CREATED);
    }
    // get all cart items for a user

    // delete a cary item for a user

}
