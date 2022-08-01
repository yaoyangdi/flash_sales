package com.example.flashsales.service;

import com.example.flashsales.model.User;

import java.util.List;

public interface UserService {
    public User addUser(User user);
    public List<User> getAllUsers();
}
