package com.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.ManyToOne;
import java.sql.Date;

@Data
@AllArgsConstructor
public class AccountToken {
    private long id;
    private String username;
    private String token;
    private String avatar;
    private String fullName;
    private String gender;
    private String phone;
    private String email;
    private Date birthday;
    private String nameShop;
    private String address;
    private String avatarShop;

}
