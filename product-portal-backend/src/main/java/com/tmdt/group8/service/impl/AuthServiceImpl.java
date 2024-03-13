package com.tmdt.group8.service.impl;

import com.tmdt.group8.config.security.JwtTokenProvider;
import com.tmdt.group8.config.security.RefreshTokenProvider;
import com.tmdt.group8.dto.auth.LoginRequest;
import com.tmdt.group8.dto.auth.LoginResponse;
import com.tmdt.group8.service.AuthService;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class AuthServiceImpl implements AuthService {
    private AuthenticationManager authenticationManager;
    private JwtTokenProvider jwtTokenProvider;
    private RefreshTokenProvider refreshTokenProvider;

    @Override
    public LoginResponse authenticateAndGenerateToken(LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword())
        );
        return null;
    }
}
