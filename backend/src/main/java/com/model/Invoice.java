package com.model;

import lombok.Data;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Data
public class Invoice {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Date dateCreate;
    private double total;
    private String receivingAddress;
    @ManyToOne
    private Account account;
    @ManyToOne
    private Status status;
}
