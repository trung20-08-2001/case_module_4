package com.service;


import com.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;


public interface IProductService {
    List<Product> getAllProductPending(long id);
    void confirmProduct(long id);
    void refuseProduct(long id);

    Page<Product> getAllProduct(Pageable pageable);
    Product findById(Long id);

}
