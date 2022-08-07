package com.example.flashsales.model;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@Table(name="CART_PRODUCTS")
@NoArgsConstructor
public class Cart_Product {
    public Cart_Product(Product op_product, User user, Integer qty) {
        this.op_product = op_product;
        this.user = user;
        this.created_at = new Date();
        this.qty = qty;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "op_id", nullable = false)
    private Long id;

    @Column(name = "qty", nullable = false)
    private Integer qty;

    @Column(name = "created_at")
    @Temporal(TemporalType.TIMESTAMP)
    private Date created_at;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="prod_id")
    private Product op_product;

    @ManyToOne(cascade=CascadeType.ALL)
    @JoinColumn(name="user_id")
    private User user;
}
