package com.tmdt.group8.dto.product;

import com.tmdt.group8.dto.store.StoreResponse;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
public class ProductResponse {
    private String name;
    private BigDecimal price;
    private String slug;
    private String category;
    private StoreResponse storeOwner;
}
