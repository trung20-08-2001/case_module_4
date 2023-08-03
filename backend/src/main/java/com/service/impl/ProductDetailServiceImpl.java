package com.service.impl;

import com.model.ProductDetail;
import com.repository.IProductDetailRepository;
import com.service.IProductDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ProductDetailServiceImpl implements IProductDetailService {

    @Autowired
    IProductDetailRepository productDetailRepository;
    @Override
    public List<ProductDetail> getListProductDetailByIdProduct(Long id) {
        return productDetailRepository.findProductDetailsByProductId( id);
    }
}
