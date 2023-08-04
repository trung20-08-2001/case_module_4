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
    public ResponseEntity<List<Product>> getAllProductPendingByIdShop(@PathVariable long id){
     List<Product> producPendingtList = iProductService.getAllProductPending(id);
        System.out.println(producPendingtList);
     return new ResponseEntity<>(producPendingtList, HttpStatus.OK);
    }

    @PostMapping("/confirmProduct/{id}")
    public String confirmProduct(@PathVariable long id){
        iProductService.confirmProduct(id);
        return "đã duyệt sản phẩm";
    }
    @PostMapping("/refuseProduct/{id}")
    public String refuseProduct(@PathVariable long id){
        iProductService.refuseProduct(id);
        return "bạn đã từ chối sản phẩm được đăng bán";
    }
}
