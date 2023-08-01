package com.service;

import com.model.Account;
import org.springframework.security.core.userdetails.UserDetailsService;


public interface IAccountService extends UserDetailsService {
   void save(Account account);
    Account login(String username,String password);

}
