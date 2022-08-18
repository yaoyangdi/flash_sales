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

    /**
     * Service used for creating a token on the database
     */
    @Override
    public void saveConfirmationToken(AuthenticationToken authenticationToken) {
        tokenRepository.save(authenticationToken);
    }

    /**
     * Service used for retrieving a token by given user instance
     * If the user is not present in db. then return null
     */
    @Override
    public AuthenticationToken getToken(User user) {
        return tokenRepository.findByUser(user);
    }

    /**
     * Service used for validating the token
     * Validation includes NULL check & subsequent User NULL check
     */
    @Override
    public void authenticate(String token) throws AuthenticationFailException{
        // null check
        if (Objects.isNull(token)) {
            throw new AuthenticationFailException("Token not present");
        }
        if (Objects.isNull(getUser(token))) {
            throw new AuthenticationFailException("Token not valid");
        }
    }
    // Invoked inside authenticate() method
    public User getUser(String token) {
        // Validate the token
        AuthenticationToken authenticationToken = tokenRepository.findByToken(token);
        if (Objects.isNull(authenticationToken)) {
            throw new AuthenticationFailException("Token not present");
        }
        return authenticationToken.getUser();
    }


}
