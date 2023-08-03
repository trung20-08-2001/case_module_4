package com.model.dto;

import com.model.Role;
import com.model.Status;
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
    private Role role;
    private String phone;
    private String email;
    private Date birthday;
    private String nameShop;
    private String address;
    private String avatarShop;
    private Status status;
}
