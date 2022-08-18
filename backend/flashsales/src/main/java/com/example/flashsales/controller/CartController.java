package com.example.flashsales.controller;

import com.example.flashsales.common.ApiResponse;
import com.example.flashsales.dto.AddToCartDto;
import com.example.flashsales.dto.response.ResponseDto;
import com.example.flashsales.exception.AuthenticationFailException;
import com.example.flashsales.model.Cart_Product;
import com.example.flashsales.model.User;
import com.example.flashsales.service.cart.CartService;
import com.example.flashsales.service.user.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cart")
@CrossOrigin
public class CartController {
    @Autowired
    private CartService cartService;
    @Autowired
    private TokenService tokenService;


    // Add an item to the cart
    @PostMapping
    public ResponseEntity<ApiResponse> addToCart(@RequestBody AddToCartDto addToCartDto, @RequestParam("token") String token) {
        User user;   // initialization
        ResponseDto responseDto;
        try {
            // authenticate the token
            tokenService.authenticate(token);

            // find the user
            user = tokenService.getUser(token);

        } catch (AuthenticationFailException e) {
            return new ResponseEntity<>(new ApiResponse(false, e.getMessage()), HttpStatus.BAD_REQUEST);
        }

        // add to cart
        responseDto = cartService.addToCart(addToCartDto, user);

        return new ResponseEntity<>(new ApiResponse(true, responseDto.getMessage()), HttpStatus.CREATED);
    }


    // get all cart items for a user
    @GetMapping
    public ResponseEntity<ApiResponse> getAll(@RequestParam("token") String token) {
        User user;   // initialization

        try {
            // authenticate the token
            tokenService.authenticate(token);

            // find the user
            user = tokenService.getUser(token);

        } catch (AuthenticationFailException e) {
            return new ResponseEntity<>(new ApiResponse(false, e.getMessage()), HttpStatus.BAD_REQUEST);
        }
        // find cart products by user
        List<Cart_Product> cart_products= cartService.getAllItems(user);

        return new ResponseEntity<>(new ApiResponse(true, cart_products),HttpStatus.ACCEPTED);
    }

    // delete a cart item for a user

}
