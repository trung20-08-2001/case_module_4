package com.service;


import com.model.ProductDetail;

import java.util.List;

public interface IProductDetailService {
    List<ProductDetail> getListProductDetailByIdProduct(Long id);
}
