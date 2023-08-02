package com.controller;

import com.model.Product;
import com.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/user")
public class UserApi {
    @Autowired
    IProductService iProductService;

    @GetMapping("/show")
    public ResponseEntity<?> showAllProduct() {
        List<Product> list = new ArrayList<>();
        list = (List<Product>) iProductService.getAllProduct().get();
        return new ResponseEntity<>(list, HttpStatus.OK);
    }


}
