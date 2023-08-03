package com.controller;

import com.model.Product;
import com.service.IFeedbackService;
import com.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin("*")
@RequestMapping("/user")
public class UserApi {
    @Autowired
    IProductService iProductService;
    @Autowired
    IFeedbackService iFeedbackService;


    @GetMapping("/show")
    public ResponseEntity<Page<Product>> showAllProduct(@RequestParam(defaultValue = "0") int page) {
        Page<Product> productPage = iProductService.getAllProduct(PageRequest.of(page, 5));
        return new ResponseEntity<>(productPage, HttpStatus.OK);
    }

    @GetMapping("/reviewStar")
    public String getReviewStar(@RequestParam int idProduct) {
        String rv=iFeedbackService.countAllByProduct(idProduct) + "";
        return rv;
    }

    @GetMapping("/detail")
    public ResponseEntity<Product> detailProduct(@RequestParam long idProduct) {
return new ResponseEntity<>(iProductService.findById(idProduct),HttpStatus.OK);
    }
}
