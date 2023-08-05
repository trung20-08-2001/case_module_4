package com.controller;

import com.model.Account;
import com.model.Product;
import com.model.dto.AccountToken;
import com.service.IAccountService;
import com.service.IRoleService;
import com.service.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class LoginApi {
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    JwtService jwtService;
    @Autowired
    IAccountService accountService;
    @Autowired
    IRoleService iRoleService;



    @PostMapping("/login")
    public AccountToken getLogin(@RequestBody Account account) {
        Authentication authentication = authenticationManager.authenticate
                (new UsernamePasswordAuthenticationToken(account.getUsername(), account.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        account = accountService.login(account.getUsername(), account.getPassword());
        String token = jwtService.createToken(authentication);
        return new AccountToken(account.getId(), account.getUsername(), token, account.getAvatar(),
                account.getFullName(), account.getGender(), account.getRole(), account.getPhone(),
                account.getEmail(), account.getBirthday(), account.getNameShop(), account.getAddress(),
                account.getAvatarShop(), account.getStatus());
    }

    @PostMapping("/register/client")
    public ResponseEntity<Account> registerClient(@RequestBody Account account) {
        Account accountCheck = accountService.login(account.getUsername(), account.getPassword());
        if (accountCheck == null) {
            account.setRole(iRoleService.findById(2));
            accountService.save(account);
            return new ResponseEntity<>(account, HttpStatus.OK);
        }else  return new ResponseEntity<>(null, HttpStatus.METHOD_NOT_ALLOWED);
    }

    @PostMapping("/register/shop")
    public ResponseEntity<Account> registerShop(@RequestBody Account account) {
        Account accountCheck = accountService.login(account.getUsername(), account.getPassword());
        if (accountCheck == null) {
            account.setRole(iRoleService.findById(3));
            accountService.save(account);
            return new ResponseEntity<>(account, HttpStatus.OK);
        }else  return new ResponseEntity<>(null, HttpStatus.METHOD_NOT_ALLOWED);
    }
}
