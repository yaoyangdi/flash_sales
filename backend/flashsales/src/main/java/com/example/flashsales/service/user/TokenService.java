package com.example.flashsales.service.user;

import com.example.flashsales.model.AuthenticationToken;

public interface TokenService {

    void saveConfirmationToken(AuthenticationToken authenticationToken);
}
