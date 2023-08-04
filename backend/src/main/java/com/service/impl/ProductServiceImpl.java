package com.service.impl;

import com.model.Product;
import com.model.Status;
import com.repository.IProductRepository;
import com.repository.IStatusRepository;
import com.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImpl implements IProductService {
    @Autowired
    IProductRepository iProductRepository;

    @Autowired
    IStatusRepository iStatusRepository;


    @Override
    public List<Product> getAllProductPending(long id) {
        return iProductRepository.getAllProductPending(id);
    }

    @Override
    public void confirmProduct(long id) {
        Status status = iStatusRepository.findById(1).get();
        Product product = iProductRepository.findById(id).get();
        product.setStatus(status);
        iProductRepository.save(product);
    }

    @Override
    public void refuseProduct(long id) {
        Product product = iProductRepository.findById(id).get();
        iProductRepository.delete(product);

    }




    @Override
    public Page<Product> getProductByShopAccount(Long id, Pageable pageable) {
        return iProductRepository.getProductByShopAccount(id, pageable);
    }

    @Override
    public Product findById(Long id) {
        return iProductRepository.findById(id).get();
    }




    @Override
    public Page<Product> getAllProduct(Pageable pageable) {
        return iProductRepository.getAllProduct(pageable);
    }

    @Override
    public void save(Product product) {
        iProductRepository.save(product);
    }



}
