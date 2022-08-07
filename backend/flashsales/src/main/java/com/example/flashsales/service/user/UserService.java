package com.example.flashsales.service.user;

import com.example.flashsales.dto.ResponseDto;
import com.example.flashsales.model.User;

import javax.transaction.Transactional;
import java.util.HashMap;
import java.util.List;

public interface UserService {
    public List<User> getAllUsers();
    @Transactional
    public ResponseDto signUp (User user);
}
