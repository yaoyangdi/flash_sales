package com.example.flashsales.repository;

import com.example.flashsales.model.AuthenticationToken;
import com.example.flashsales.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TokenRepository extends JpaRepository<AuthenticationToken, String> {
    public AuthenticationToken findByUser(User user);
    public AuthenticationToken findByToken(String token);
}
