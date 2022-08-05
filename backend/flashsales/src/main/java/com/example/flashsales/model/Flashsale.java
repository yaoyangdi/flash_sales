package com.example.flashsales.model;

import lombok.Data;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;
import java.util.Set;

@Entity
@Data
@Table(name="FLASHSALES")
public class Flashsale {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "flashsale_id", nullable = false)
    private Long id;

    @Column(name="status", nullable = false)
    private int status = 0;     // 0: normal, 1: ready

    @Column(name = "start_time", nullable = true)
    @Temporal(TemporalType.TIMESTAMP)
    private Date startTime;

    @Column(name = "endTime", nullable = true)
    @Temporal(TemporalType.TIMESTAMP)
    private Date endTime;

    @OneToMany(mappedBy = "flashsale")
    private Set<Flashsale_product> flashsale_products;
}
