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
import org.modelmapper.ModelMapper;

import java.util.List;

@RestController
@RequestMapping("/cart")
@CrossOrigin
public class CartController {
    @Autowired
    private CartService cartService;
    @Autowired
    private TokenService tokenService;

    @Autowired
    private ModelMapper modelMapper;
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
        try{
            responseDto = cartService.addToCart(addToCartDto, user);
        } catch (Exception e) {
            return new ResponseEntity<>(new ApiResponse(false, e.getMessage()), HttpStatus.BAD_REQUEST);
        }

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

    // increase amount of given cart item
    @PutMapping("/increase")
    public ResponseEntity<ApiResponse> increase(@RequestParam("id") long id, @RequestParam("token") String token) {
        User user;   // initialization
        try {
            // authenticate the token
            tokenService.authenticate(token);
            // find the user
            user = tokenService.getUser(token);
        } catch (AuthenticationFailException e) {
            return new ResponseEntity<>(new ApiResponse(false, e.getMessage()), HttpStatus.BAD_REQUEST);
        }
        try{
            cartService.increaseAmount(id);
        } catch (Exception e) {
            return new ResponseEntity<>(new ApiResponse(false, e.getMessage()), HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(new ApiResponse(true, "Increase successfully by one amount"),HttpStatus.ACCEPTED);
    }

    // decrease amount of given cart item
    @PutMapping("/decrease")
    public ResponseEntity<ApiResponse> decrease(@RequestParam("id") long id, @RequestParam("token") String token) {
        User user;   // initialization
        try {
            // authenticate the token
            tokenService.authenticate(token);
            // find the user
            user = tokenService.getUser(token);
        } catch (AuthenticationFailException e) {
            return new ResponseEntity<>(new ApiResponse(false, e.getMessage()), HttpStatus.BAD_REQUEST);
        }

        try{
            cartService.decreaseAmount(id);
        } catch (Exception e) {
            return new ResponseEntity<>(new ApiResponse(false, e.getMessage()), HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(new ApiResponse(true, "Decrease successfully by one amount"),HttpStatus.ACCEPTED);
    }


    // delete a cart item for a user

}
