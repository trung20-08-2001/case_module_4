package com.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class InvoiceDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int quantity;
    @ManyToOne
    private Product product;
    @ManyToOne
    private Invoice invoice;

}
