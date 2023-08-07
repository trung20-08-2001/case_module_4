package com.model;

import lombok.Data;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Data
public class Feedback {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String feedback;
    private byte point;
    private Date dateFeedback;
    @ManyToOne
    private Product product;
    @ManyToOne
    private Account account;
    private boolean responded;
}
