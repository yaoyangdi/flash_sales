package com.example.flash_sales.model;

import lombok.Data;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;
import java.util.Set;

@Entity
@Data
@Table(name="Activity")
public class Activity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "activity_id", nullable = false)
    private Long id;

    @Column(name = "prev_price", nullable = false, precision = 10, scale = 2)
    private BigDecimal prev_price;

    @Column(name= "price", nullable = false, precision = 10, scale = 2)
    private BigDecimal price;

    @Column(name="status", nullable = false)
    private int status;     // 0: normal, 1: ready

    @Column(name = "start_time", nullable = true)
    @Temporal(TemporalType.TIMESTAMP)
    private Date start_time;

    @Column(name = "end_time", nullable = true)
    @Temporal(TemporalType.TIMESTAMP)
    private Date end_time;

    @Column(name = "total_stock", nullable = false)
    private long total_stock;

    @Column(name = "available_stock", nullable = false)
    private int available_stock;

    @Column(name = "lock_stock", nullable = false)
    private long lock_stock;

    @OneToMany(cascade=CascadeType.ALL)
    @JoinColumn(name="prod_id")
    private Set<Product> products;
}
