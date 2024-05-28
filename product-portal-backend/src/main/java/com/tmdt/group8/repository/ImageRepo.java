package com.tmdt.group8.repository;

import com.tmdt.group8.entity.Image;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepo extends JpaRepository<Image, Long> {
}
