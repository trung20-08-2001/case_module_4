package com.service;


import com.model.Product;
import com.model.ProductDetail;

import java.util.List;

public interface IProductDetailService {
    List<ProductDetail> getListProductDetailByIdProduct(Long id);
    void saveAll(List<ProductDetail> productDetails);

    void deleteByProduct(Product product);
}
