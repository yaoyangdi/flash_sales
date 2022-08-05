package com.example.flashsales.service;

import com.example.flashsales.model.User;

import java.util.HashMap;
import java.util.List;

public interface UserService {
    public User addUser(User user);
    public List<User> getAllUsers();
    public User signUpUser(HashMap<String, String> signupRequest) throws Exception;
}
