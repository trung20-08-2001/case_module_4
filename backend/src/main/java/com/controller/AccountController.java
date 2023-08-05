package com.controller;

import com.model.Account;
import com.service.IAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class AccountController {
    @Autowired
    IAccountService iAccountService;

    @GetMapping("/admin/accountByUser")
    public ResponseEntity<List<Account>> getAllAccountByUser() {
        List<Account> accountUserList = iAccountService.getAllAccountByUser();
        return new ResponseEntity<>(accountUserList, HttpStatus.OK);
    }

    @GetMapping("/admin/shopActive")
    public ResponseEntity<List<Account>> getAllShopActive() {
        List<Account> accountShopList = iAccountService.getAllByShop();
        return new ResponseEntity<>(accountShopList, HttpStatus.OK);
    }

    @GetMapping("/admin/allUserBlock")
    public ResponseEntity<List<Account>> getAllUserBlock() {
        List<Account> listUserBlock = iAccountService.getAllUserBlock();
        return new ResponseEntity<>(listUserBlock, HttpStatus.OK);
    }

    @PostMapping("/admin/findUserActive/{id}")
    public ResponseEntity<Account> findAccountActiveUserById(@PathVariable long id) {
        Account accountActive = iAccountService.findAccountActiveUserById(id);
        return new ResponseEntity<>(accountActive, HttpStatus.OK);
    }

    @PostMapping("/admin/findUserBlock/{id}")
    public ResponseEntity<Account> findAccountBlockUserById(@PathVariable long id) {
        Account accountBlock = iAccountService.findAccountUserBlockById(id);
        return new ResponseEntity<>(accountBlock, HttpStatus.OK);
    }
    @PostMapping("/admin/findShopActive/{id}")
    public ResponseEntity<Account> findShopActiveById(@PathVariable long id) {
        Account shopActive = iAccountService.findShopActiveById(id);
        return new ResponseEntity<>(shopActive, HttpStatus.OK);
    }
    @PostMapping("/admin/findShopBlock/{id}")
    public ResponseEntity<Account> findShopBlockById(@PathVariable long id) {
        Account shopBlock = iAccountService.findShopBlockById(id);
        return new ResponseEntity<>(shopBlock, HttpStatus.OK);
    }
    @GetMapping("/admin/getNewUser")
    public ResponseEntity<List<Account>> getNewUser() {
        List<Account> newUser = iAccountService.getNewUser();
        return new ResponseEntity<>(newUser, HttpStatus.OK);
    }
}
