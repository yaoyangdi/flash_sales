package com.example.flashsales.service.user;

import com.example.flashsales.exception.AuthenticationFailException;
import com.example.flashsales.model.AuthenticationToken;
import com.example.flashsales.model.User;
import com.example.flashsales.repository.TokenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
public class TokenServiceImpl implements TokenService {
    @Autowired
    TokenRepository tokenRepository;

    @Override
    public void saveConfirmationToken(AuthenticationToken authenticationToken) {
        tokenRepository.save(authenticationToken);
    }

    @Override
    public AuthenticationToken getToken(User user) {
        return tokenRepository.findByUser(user);
    }
    public User getUser(String token) {
        // Validate the token
        AuthenticationToken authenticationToken = tokenRepository.findByToken(token);
        if (Objects.isNull(authenticationToken)) {
            return null;
        }
        return authenticationToken.getUser();
    }
    @Override
    public void authenticate(String token) throws AuthenticationFailException{
        // null check
        if (Objects.isNull(token)) {
            // throw an exception
            throw new AuthenticationFailException("token not present");
        }
        if (Objects.isNull(getUser(token))) {
            throw new AuthenticationFailException("token not valid");
        }
    }


}
