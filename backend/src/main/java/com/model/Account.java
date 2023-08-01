package com.model;

import lombok.Data;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Data
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private String password;
    private String fullName;
    private String gender;
    private String avatar;
    private String phone;
    private String email;
    private Date birthday;
    private String nameShop;
    private String address;
    private String avatarShop;
    @ManyToOne
    private Role role;
    @ManyToOne
    private Status status;
}
