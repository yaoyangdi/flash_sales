package com.example.flashsales.model;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.Date;
import java.util.UUID;

@Entity
@Data
@Table(name = "TOKENS")
@NoArgsConstructor
public class AuthenticationToken {
    /*
    Constructor
     */
    public AuthenticationToken(User user) {
        this.user = user;
        this.created_date = new Date();
        this.token = UUID.randomUUID().toString();
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    @Column(name = "token_id")
    private String token;

    @Column(name = "created_date")
    @Temporal(TemporalType.TIMESTAMP)
    private Date created_date;

    @OneToOne
    @JoinColumn(nullable = false, name = "user_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private User user;


}
