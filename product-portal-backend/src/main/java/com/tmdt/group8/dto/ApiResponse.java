package com.tmdt.group8.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@Builder
public class ApiResponse {
    private int statusCode;
    private Date timestamp;
    private String message;
    private String description;
}
