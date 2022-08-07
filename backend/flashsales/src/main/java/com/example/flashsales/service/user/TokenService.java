package com.example.flashsales.service.user;

import com.example.flashsales.model.AuthenticationToken;
import com.example.flashsales.model.User;

public interface TokenService {

    void saveConfirmationToken(AuthenticationToken authenticationToken);

    AuthenticationToken getToken(User user);
}
