package com.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity
@Data
public class Revenue {
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private int id;
    private int month;
    private int year;
    private double revenue;
}
