package com.tmdt.group8.repository;

import com.tmdt.group8.entity.Store;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface StoreRepo extends JpaRepository<Store, Long>, JpaSpecificationExecutor<Store> {
}
