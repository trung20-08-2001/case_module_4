package com.model;
import lombok.Data;
import javax.persistence.*;

@Entity
@Data
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private double price;
    private int quantity;
    private String status;
    private String manufacture;
    private String description;
    @ManyToOne
    private Category category;
}
