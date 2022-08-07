package com.example.flashsales.repository;

import com.example.flashsales.model.AuthenticationToken;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TokenRepository extends JpaRepository<AuthenticationToken, String> {
}
