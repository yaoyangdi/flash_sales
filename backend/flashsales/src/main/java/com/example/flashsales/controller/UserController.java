package com.example.flashsales.controller;

import com.example.flashsales.exception.ResourceNotFoundException;
import com.example.flashsales.model.User;
import com.example.flashsales.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/user")
    List<User> all() { return userService.getAllUsers();
}

    @PostMapping("/user")
    User newUser(@RequestBody User newUser) { return userService.addUser(newUser); }
}
