package com.example.flashsales.repository;

import com.example.flashsales.model.AuthenticationToken;
import com.example.flashsales.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TokenRepository extends JpaRepository<AuthenticationToken, String> {
    AuthenticationToken findByUser(User user);
    AuthenticationToken findByToken(String token);
}
