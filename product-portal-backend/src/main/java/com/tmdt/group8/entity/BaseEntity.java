package com.tmdt.group8.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@MappedSuperclass
public class BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(updatable = false)
    private Date createdAt;

    @Column(updatable = false)
    private Long createdBy;

    private Date updatedAt;
    private Long updatedBy;
}
