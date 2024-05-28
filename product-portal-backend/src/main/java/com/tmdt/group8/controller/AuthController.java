package com.tmdt.group8.controller;

import com.tmdt.group8.dto.auth.LoginRequest;
import com.tmdt.group8.dto.auth.LoginResponse;
import com.tmdt.group8.service.AuthService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
@AllArgsConstructor
public class AuthController {
    private AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> authenticateUser(@RequestBody LoginRequest loginRequest) {
        LoginResponse loginResponse = authService.authenticateAndGenerateToken(loginRequest);
        return ResponseEntity.ok(loginResponse);
    }
}
