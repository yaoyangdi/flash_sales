package com.example.flashsales.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name="Product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "prod_id", nullable = false)
    private Long id;

    @Column(name="prod_name", nullable = false)
    private String name;

    @Column(name="prod_desc", nullable = false)
    private String desc;

    @Column(name="prod_price", nullable = false)
    private int price;
}