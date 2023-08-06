package com.controller;

import com.model.Product;
import com.model.ProductDetail;
import com.service.IProductDetailService;
import com.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/shop")
public class ShopController {

    @Autowired
    IProductService iProductService;
    @Autowired
    IProductDetailService iProductDetailService;

    @GetMapping
    public ResponseEntity<Page<Product>> getAllPage(@RequestParam(defaultValue = "0") int page, @RequestParam Long id) {
        Page<Product> products = iProductService.getProductByShopAccount(id, PageRequest.of(page, 5));
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody Product product) {
        iProductService.save(product);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }

    @PostMapping("/changeStatus/{id}")
    public ResponseEntity<String> changeProductStatus(@PathVariable Long id) {
        iProductService.updateStatusProduct(id);
        return ResponseEntity.ok("Product status changed successfully.");
    }

    @PostMapping("/saveProduct")
    public Product save(@RequestBody Product product) {
       return iProductService.save(product);
    }

    @PostMapping("/saveProductDetail")
    public void save(@RequestBody List<ProductDetail> productDetailList){
        iProductDetailService.saveAll(productDetailList);
    }

    @PostMapping("/deleteProductDetail")
    public void delete(@RequestBody Product product){
        iProductDetailService.deleteByProduct(product);
    }

    @GetMapping("/getListProductDetail/{id}")
    public List<ProductDetail> getListProductDetail(@PathVariable Long id) {
        return iProductDetailService.getListProductDetailByIdProduct(id);
    }
}
