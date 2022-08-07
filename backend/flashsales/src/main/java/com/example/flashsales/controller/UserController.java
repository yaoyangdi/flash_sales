package com.example.flashsales.controller;

import com.example.flashsales.dto.ResponseDto;
import com.example.flashsales.dto.SignInResponseDto;
import com.example.flashsales.dto.SigninDto;
import com.example.flashsales.model.User;
import com.example.flashsales.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
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
    public ResponseDto signup(@RequestBody User newUser) { return userService.signUp(newUser); }

    @PostMapping(value="/signin")
    public SignInResponseDto signin(@RequestBody SigninDto signinDto) { return userService.signIn(signinDto); }
}
