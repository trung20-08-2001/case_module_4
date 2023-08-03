package com.service;


import com.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;


public interface IProductService {
    List<Product> getAllProductPending(int id);
    void confirmProduct(Product product);
    void refuseProduct(int id);

<<<<<<< HEAD
    void saveImg(MultipartFile image);
=======
    Page<Product> getAllProduct(Pageable pageable);
    Product findById(Long id);
>>>>>>> 349735f5ca71abea76b7266935e0a63a0f155062

    void save(Product product);

    void delete(Long id);

    Optional<Product> findById(Long id);

    List<Product> findAll();
}
