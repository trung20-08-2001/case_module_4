package com.controller;

import com.model.Product;
import com.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/products")
public class ProductControllerAPI {
    @Autowired
    IProductService iProductService;

    @PostMapping("/productPending/{id}")
    public ResponseEntity<List<Product>> getAllProductPendingByIdShop(@PathVariable int id){
     List<Product> producPendingtList = iProductService.getAllProductPending(id);
     return new ResponseEntity<>(producPendingtList, HttpStatus.OK);
    }

}
