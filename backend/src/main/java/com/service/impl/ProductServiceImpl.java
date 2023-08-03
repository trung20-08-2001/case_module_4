package com.service.impl;

import com.model.Product;
import com.repository.IProductRepository;
import com.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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

    @Override
    public Page<Product> getAllProduct(Pageable pageable) {
        return iProductRepository.getAllProduct(pageable);
    }

    @Override
    public Product findById(Long id) {
        return iProductRepository.findById(id).get();
    }

}
