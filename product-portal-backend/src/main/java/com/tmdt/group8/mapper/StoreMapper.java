package com.tmdt.group8.mapper;

import com.tmdt.group8.dto.store.StoreRequest;
import com.tmdt.group8.dto.store.StoreResponse;
import com.tmdt.group8.entity.Store;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface StoreMapper extends GenericMapper<Store, StoreRequest, StoreResponse> {
    @Override
    @Mapping(source = "user", target = "owner")
    StoreResponse entityToResponse(Store entity);
}
