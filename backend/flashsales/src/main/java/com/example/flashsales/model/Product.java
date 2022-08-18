package com.example.flashsales.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Data
@Table(name="PRODUCTS")
@NoArgsConstructor
public class Product {
    public Product(String title, String description, BigDecimal price, String img_url) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.img_url = img_url;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "prod_id", nullable = false)
    private Long id;

    @Column(name= "title", nullable = false)
    private String title;

    @Column(name= "description", nullable = false)
    private String description;

    @Column(name= "price", nullable = false, precision = 10, scale = 2)
    private BigDecimal price;

    @Column(name= "img_url", nullable = false)
    private String img_url;

    @JsonIgnore
    @OneToOne(mappedBy = "product", cascade = CascadeType.ALL)   // Non-owning side mapped attributes
    private Flashsale_product flashsaleProduct;

    @JsonIgnore
    @OneToOne(mappedBy = "cartProduct", cascade = CascadeType.ALL)
    private Cart_Product cartProduct;
}