package com.model.dto;

import com.model.Role;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AccountToken {
    private long id;
    private String username;
    private String token;
    private String avatar;
    private Role role;
}
