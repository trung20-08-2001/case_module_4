package com.service;


import com.model.Product;
import com.model.Status;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;


public interface IProductService {

    List<Product> getAllProductPending(int id);

    Page<Product> getAllProduct(Pageable pageable);

    void save(Product product);

    Product findById(Long id);

    Page<Product> getProductByShopAccount(Long id, Pageable pageable);

    Status findStatusByProductId(Long id);

    void updateStatusProduct(Long id);

}
