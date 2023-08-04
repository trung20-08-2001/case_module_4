package com.service;


import com.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;


public interface IProductService {
    List<Product> getAllProductPending(long id);
    void confirmProduct(Product product);
    void refuseProduct(int id);
    void confirmProduct(long id);
    void refuseProduct(long id);

    Page<Product> getAllProduct(Pageable pageable);

    void save(Product product);

    Product findById(Long id);
    Page<Product> getProductByShopAccount(Long id, Pageable pageable);
}
