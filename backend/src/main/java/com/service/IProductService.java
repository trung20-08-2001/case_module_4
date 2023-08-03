package com.service;

import com.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

public interface IProductService {
    Page<Product> getAllProduct(Pageable pageable);

    void saveImg(MultipartFile image);

    void save(Product product);

    void delete(Long id);

    Optional<Product> findById(Long id);

    List<Product> findAll();
}
