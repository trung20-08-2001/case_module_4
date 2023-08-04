package com.service;


import com.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;


public interface IProductService {

    List<Product> getAllProductPending(int id);

    void confirmProduct(Product product);

    void refuseProduct(int id);

    Page<Product> getAllProduct(Pageable pageable);

    void save(Product product);

    void delete(Long id);

    Product findById(Long id);

    List<Product> findAll();

    Page<Product> getProductByShopAccount(Long id, Pageable pageable);
}
