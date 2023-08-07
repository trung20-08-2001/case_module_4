package com.controller;

import com.model.Invoice;
import com.model.Product;
import com.repository.IInvoiceRepository;
import com.service.IInvoiceService;
import com.service.IProductService;
import org.hibernate.cfg.annotations.reflection.internal.XMLContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin("*")
@RequestMapping("/shop")
public class ShopController {

    @Autowired
    IProductService iProductService;

    @Autowired
    IInvoiceService iInvoiceService;

    @GetMapping
    public ResponseEntity<Page<Product>> getAllPage(@RequestParam(defaultValue = "0") int page, @RequestParam Long id) {
        Page<Product> products = iProductService.getProductByShopAccount(id, PageRequest.of(page, 10));
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @GetMapping("/shop-invoice")
    public ResponseEntity<Page<Invoice>> getShopInvoice(@RequestParam(defaultValue = "0") int page, @RequestParam Long id) {
        Page<Invoice> invoices = iInvoiceService.getAllInvoicesForShop(id, PageRequest.of(page, 10));
        return new ResponseEntity<>(invoices, HttpStatus.OK);
    }


    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody Product product) {
        iProductService.save(product);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }

    @PostMapping("/update/{id}")
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

    @PostMapping("/confirm-status/{id}")
    public ResponseEntity<String> confirmInvoiceStatus(@PathVariable Long id) {
        iInvoiceService.updateStatusInvoice(id);
        return ResponseEntity.ok("Invoice status changed successfully");
    }
}
