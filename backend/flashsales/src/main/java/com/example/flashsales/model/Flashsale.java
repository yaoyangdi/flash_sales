package com.example.flashsales.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Entity
@Data
@Table(name="FLASHSALES")
@NoArgsConstructor
public class Flashsale {
    public Flashsale(Date startTime, Date endTime) {
        this.status = 0;   // 0: normal, 1: ready
        this.startTime = startTime;
        this.endTime = endTime;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "flashsale_id", nullable = false)
    private Long id;

    @Column(name="status", nullable = false)
    private int status;

    @Column(name = "start_time", nullable = true)
    @Temporal(TemporalType.TIMESTAMP)
    private Date startTime;

    @Column(name = "endTime", nullable = true)
    @Temporal(TemporalType.TIMESTAMP)
    private Date endTime;

    @OneToMany(mappedBy = "flashsale")
    @Fetch(value = FetchMode.SUBSELECT)
    @JsonManagedReference
    private Collection<Flashsale_product> products;
}
