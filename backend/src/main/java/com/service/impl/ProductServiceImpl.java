package com.service.impl;

import com.model.Category;
import com.model.Product;
import com.repository.ICategoryRepository;
import com.repository.IProductRepository;
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
    ICategoryRepository iCategoryRepository;

    @Override
    public List<Product> getAllProductPending(int id) {
        return iProductRepository.getAllProductPending(id);
    }

    @Override
    public List<Product> findAll() {
        return iProductRepository.findAll();
    }

    @Override
    public Page<Product> getProductByShopAccount(Long id, Pageable pageable) {
        return iProductRepository.getProductByShopAccount(id, pageable);
    }

    @Override
    public List<Product> getAllProductByCategory(Long id) {
        return iProductRepository.getProductsByCategory(iCategoryRepository.findAllById(id));
    }

    @Override
    public Product findById(Long id) {
        return iProductRepository.findById(id).get();
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
    public void save(Product product) {
        iProductRepository.save(product);
    }

    @Override
    public void delete(Long aLong) {
        iProductRepository.deleteById(aLong);
    }

}
