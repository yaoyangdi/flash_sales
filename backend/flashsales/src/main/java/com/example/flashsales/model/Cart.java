package com.example.flashsales.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Entity
@Data
@Table(name="CARTS")
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="cart_id", nullable = false)
    private Long id;

    @Column(name = "created_at", nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date created_at;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="user_id")
    private User cart_user;

    @JsonIgnore
    @OneToMany(mappedBy="cart")
    private Set<Cart_Product> cart_products;
}
