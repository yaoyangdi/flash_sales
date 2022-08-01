package com.example.flashsales.model;

import lombok.Data;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;
import java.util.Set;

@Entity
@Data
@Table(name="Flashsale")
public class Flashsale {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "flashsale_id", nullable = false)
    private Long id;

    @Column(name = "prevPrice", nullable = false, precision = 10, scale = 2)
    private BigDecimal prevPrice;

    @Column(name= "price", nullable = false, precision = 10, scale = 2)
    private BigDecimal price;

    @Column(name="status", nullable = false)
    private int status = 0;     // 0: normal, 1: ready

    @Column(name = "start_time", nullable = true)
    @Temporal(TemporalType.TIMESTAMP)
    private Date startTime;

    @Column(name = "endTime", nullable = true)
    @Temporal(TemporalType.TIMESTAMP)
    private Date endTime;

    @Column(name = "totalStock", nullable = false)
    private long totalStock;

    @Column(name = "availableStock", nullable = false)
    private long availableStock = totalStock;

    @Column(name = "lockStock", nullable = false)
    private long lock_stock = 0;

    @OneToMany(cascade=CascadeType.ALL)
    @JoinColumn(name="prod_id")
    private Set<Product> products;
}
