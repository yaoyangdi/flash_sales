package com.example.flashsales.model;

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

    @Column(name= "price", nullable = false)
    private String title;

    @Column(name= "price", nullable = false, precision = 10, scale = 2)
    private BigDecimal price;

    @OneToOne(mappedBy = "fp_product")   // Non-owning side mapped attributes
    private Flashsale_product flashsale_product;

    @OneToOne(mappedBy = "op_product")
    private Order_Product order_product;
}