package com.controller;

import com.model.Product;
import com.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/shop")
public class ShopController {

    @Autowired
    IProductService iProductService;

    @Value("${upload-path}")
    private String upload;

    @GetMapping
    public ResponseEntity<List<Product>> findAll() {
        List<Product> products = iProductService.findAll();
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @PostMapping("/{id}")
    public ResponseEntity<?> create(@RequestPart Product product, @RequestPart MultipartFile image) {

        iProductService.saveImg(image);

        iProductService.save(product);

        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable Long id,
                                    @RequestPart Product product,
                                    @RequestPart MultipartFile image) {
        Optional<Product> productOptional = iProductService.findById(id);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Optional<Product>> delete (@PathVariable Long id) {
        Optional<Product> productOptional = iProductService.findById(id);
        if (productOptional.isPresent()) {
            iProductService.delete(id);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        }
        return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
    }
}
