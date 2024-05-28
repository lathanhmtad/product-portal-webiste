package com.tmdt.group8.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.List;

@Entity
@Getter
@Setter
public class Product extends BaseEntity {
    private String name;
    private BigDecimal price;
    private String slug;

    @ManyToOne
    @JoinColumn(name = "category_id", referencedColumnName = "id", nullable = false)
    private Category category;

    @ManyToOne
    @JoinColumn(name = "store_id", referencedColumnName = "id", nullable = false)
    private Store store;

    @OneToMany(mappedBy = "product")
    private List<UrlProduct> productUrls;

    @OneToMany(mappedBy = "product")
    private List<Image> productImages;

}
