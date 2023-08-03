package com.service.impl;

import com.model.Product;
import com.repository.IProductRepository;
import com.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements IProductService  {
    @Autowired
    IProductRepository iProductRepository;
    @Override
    public List<Product> getAllProductPending(int id) {
        return iProductRepository.getAllProductPending(id);
    }

    @Override
    public void confirmProduct(Product product) {

    }

    @Override
    public void refuseProduct(int id) {

    }
}
