package com.controller;

import com.model.Product;
import com.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


import java.io.File;
import java.io.IOException;
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
    public ResponseEntity<Page<Product>> getAllPage(@RequestParam(defaultValue = "0")int page) {
        Page<Product> products = iProductService.getAllProduct(PageRequest.of(page,10));
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody Product product, @RequestPart MultipartFile image) {

//        iProductService.saveImg(image);
//        String imgFile;
//        try {
//            if (image != null && !image.isEmpty()) {
//                imgFile = image.getOriginalFilename();
//                File file = new File(upload + imgFile);
//                image.transferTo(file);
//            }
//        } catch (IOException e) {
//            e.printStackTrace();
//        }

        iProductService.save(product);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable Long id,
                                    @RequestPart Product product,
                                    @RequestPart MultipartFile image) {
        Optional<Product> productOptional = iProductService.findById(id);
        if (productOptional.isPresent()) {
//            iProductService.saveImg(image);
            String imgFile;
            try {
                if (image != null && !image.isEmpty()) {
                    imgFile = image.getOriginalFilename();
                    File file = new File(upload + imgFile);
                    image.transferTo(file);
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
            product.setId(id);
            iProductService.save(product);
        }
        return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Optional<Product>> delete(@PathVariable Long id) {
        Optional<Product> productOptional = iProductService.findById(id);
        if (productOptional.isPresent()) {
            iProductService.delete(id);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        }
        return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
    }
}
