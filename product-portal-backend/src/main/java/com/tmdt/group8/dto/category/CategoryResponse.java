package com.tmdt.group8.dto.category;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class CategoryResponse {
    private String name;
    private List<CategoryResponse> children;
}
