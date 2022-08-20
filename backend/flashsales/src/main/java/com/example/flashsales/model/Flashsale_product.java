package com.example.flashsales.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Set;

@Entity
@Data
@Table(name="FLASHSALE_PRODUCTS")
@NoArgsConstructor
public class Flashsale_product {

    // Constructor
    public Flashsale_product(Product product, Flashsale flashsale, BigDecimal price, long totalStock) {
        this.product = product;
        this.flashsale = flashsale;
        this.prevPrice = product.getPrice();
        this.price = price;
        this.totalStock = totalStock;
        this.availableStock = totalStock;  // initially it is same as total stock
        this.lockStock = 0;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "fp_id", nullable = false)
    private Long id;

    @OneToOne(cascade=CascadeType.ALL)
    @JoinColumn(name="prod_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Product product;

    @ManyToOne
    @JoinColumn(name="flashsale_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonBackReference
    private Flashsale flashsale;

    @Column(name = "prev_price", nullable = false, precision = 10, scale = 2)
    private BigDecimal prevPrice;

    // current discounted price
    @Column(name = "price", nullable = false, precision = 10, scale = 2)
    private BigDecimal price;
    @Column(name = "total_stock", nullable = false)
    private long totalStock;

    @Column(name = "available_stock", nullable = false)
    private long availableStock;

    @Column(name = "lock_stock", nullable = false)
    private long lockStock;
}