package com.controller;

import com.model.Product;
import com.model.Status;
import com.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin("*")
@RequestMapping("/shop")
public class ShopController {

    @Autowired
    IProductService iProductService;

    @GetMapping
    public ResponseEntity<Page<Product>> getAllPage(@RequestParam(defaultValue = "0") int page, @RequestParam Long id) {
        Page<Product> products = iProductService.getProductByShopAccount(id, PageRequest.of(page, 10));
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody Product product) {
        iProductService.save(product);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable Long id,
                                    @RequestBody Product product) {
        product.setId(id);
        iProductService.save(product);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }


    @PostMapping("/changeStatus/{id}")
    public ResponseEntity<String> changeProductStatus(@PathVariable Long id) {
        iProductService.updateStatusProduct(id);
        return ResponseEntity.ok("Product status changed successfully.");
    }

}
