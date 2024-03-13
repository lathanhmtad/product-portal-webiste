package com.tmdt.group8.dto.auth;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class LoginResponse {
    private String message;
    private String accessToken;
    private String refreshToken;
    private Date createdDate;
    private final String tokenType = "Bearer ";
}
