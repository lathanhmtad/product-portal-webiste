package com.tmdt.group8.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class User extends BaseEntity {
    private String username;
    private String email;
    private String fullName;
    private String password;
    private Boolean enabled;

    @Enumerated(EnumType.STRING)
    private RoleType role;
}
