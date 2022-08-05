package com.example.flashsales.service;

import com.example.flashsales.exception.ResourceNotFoundException;
import com.example.flashsales.model.User;
import com.example.flashsales.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public User addUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User signUpUser(HashMap<String, String> signupRequest) throws Exception {
        return null;
    }


}
