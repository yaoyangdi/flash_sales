package com.example.flashsales.controller;

import com.example.flashsales.common.ApiResponse;
import com.example.flashsales.dto.response.ResponseDto;
import com.example.flashsales.dto.response.SignInResponseDto;
import com.example.flashsales.dto.SigninDto;
import com.example.flashsales.exception.CustomException;
import com.example.flashsales.model.User;
import com.example.flashsales.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping
    List<User> all() { return userService.getAllUsers();
}

    @PostMapping("/signup")
    public ResponseEntity<ApiResponse> signup(@RequestBody User newUser) {
        ResponseDto responseDto;
        try{
            responseDto = userService.signUp(newUser);
        } catch (Exception e) {
            return new ResponseEntity<>(new ApiResponse(false, e.getMessage()), HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(new ApiResponse(true, responseDto.getMessage()), HttpStatus.CREATED);
    }

    @PostMapping(value="/signin")
    public ResponseEntity<ApiResponse> signin(@RequestBody SigninDto signinDto) {
        SignInResponseDto responseDto;
        try {
            responseDto = userService.signIn(signinDto);
        } catch (CustomException e) {
            return new ResponseEntity<>(new ApiResponse(false, e.getMessage()), HttpStatus.BAD_REQUEST);
        }
            return new ResponseEntity<>(new ApiResponse(true, responseDto.getToken()), HttpStatus.CREATED); }
}