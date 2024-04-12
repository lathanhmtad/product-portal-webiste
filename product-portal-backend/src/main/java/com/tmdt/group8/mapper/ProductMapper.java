package com.tmdt.group8.mapper;

import com.tmdt.group8.dto.product.ProductRequest;
import com.tmdt.group8.dto.product.ProductResponse;
import com.tmdt.group8.entity.Product;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", uses = {StoreMapper.class})
public interface ProductMapper extends GenericMapper<Product, ProductRequest, ProductResponse> {

    @Override
    @Mapping(source = "category.name", target = "category")
    @Mapping(source = "store", target = "storeOwner")
    ProductResponse entityToResponse(Product entity);
}
