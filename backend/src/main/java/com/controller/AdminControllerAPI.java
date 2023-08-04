package com.controller;

import com.model.Account;
import com.service.IAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/admin")
public class AdminControllerAPI {
    @Autowired
    IAccountService iAccountService;

    @GetMapping("/findShopAccount")
    public ResponseEntity<List<Account>> getAllAccountByShop(){
        List<Account> shopAccountList = iAccountService.getAllByShop();

        return new ResponseEntity<>(shopAccountList, HttpStatus.OK);
    }
    @GetMapping("/findUserAccount")
    public ResponseEntity<List<Account>> getAllAccountByUser(){
        List<Account> userAccountList = iAccountService.getAllByUser();
        return new ResponseEntity<>(userAccountList, HttpStatus.OK);
    }
    @GetMapping("/findShopBlock")
    public ResponseEntity<List<Account>> getAllShopBlock(){
        List<Account> shopBlockList= iAccountService.findShopBlock();
        return  new ResponseEntity<>(shopBlockList,HttpStatus.OK);
    }

    // block shop và block user
    @PostMapping("/block/{id}")
    public String block(@PathVariable long id) {
        iAccountService.block(id);
        return "khóa tài koản thành công";
    }


    // hiển thị các shop đang chờ duyệt
    @GetMapping("/shopPending")
    public ResponseEntity<List<Account>> getShopPending(){
        List<Account> shopPendingList = iAccountService.getAllShopByPending();
        System.out.println(shopPendingList);
        return new ResponseEntity<>(shopPendingList,HttpStatus.OK);
    }

//    active shop và mở khóa lại các shop
    @PostMapping("/activeShop/{id}")
    public String confirmShop(@PathVariable long id){
        iAccountService.activeShop(id);
        return "Đã duyệt";
    }


    // hiển thị các sản phẩm chưa được duyệt


}
