package com.example.flashsales.service.user;

import com.example.flashsales.dto.response.ResponseDto;
import com.example.flashsales.dto.response.SignInResponseDto;
import com.example.flashsales.dto.SigninDto;
import com.example.flashsales.model.User;

import javax.transaction.Transactional;
import java.util.List;

public interface UserService {
    List<User> getAllUsers();
    @Transactional
    ResponseDto signUp (User user);

    SignInResponseDto signIn(SigninDto signinDto);
}
