package com.example.flashsales.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Data
@Table(name="PRODUCTS")
public class Product {
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

    @JsonIgnore
    @OneToOne(mappedBy = "fp_product")   // Non-owning side mapped attributes
    private Flashsale_product flashsale_product;

    @JsonIgnore
    @OneToOne(mappedBy = "op_product")
    private Cart_Product cart_product;
}