package com.service;

import com.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface IProductService {
    Page<Product> getAllProduct(Pageable pageable);
    Product findById(Long id);
}
