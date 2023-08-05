package com.service.impl;

import com.model.Category;
import com.model.Product;
import com.repository.ICategoryRepository;
import com.model.Status;
import com.repository.IProductRepository;
import com.repository.IStatusRepository;
import com.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class ProductServiceImpl implements IProductService {
    @Autowired
    IProductRepository iProductRepository;
    @Autowired
    ICategoryRepository iCategoryRepository;
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
    public Page<Product> getAllProduct(Pageable pageable) {
        return iProductRepository.getAllProduct(pageable);
    }

    @Override
    public void save(Product product) {
        iProductRepository.save(product);
    }

    public void delete(Long aLong) {
        iProductRepository.deleteById(aLong);
    }

    @Override
    public void refuseProduct(long id) {
        Product product = iProductRepository.findById(id).get();
        iProductRepository.delete(product);


    }


}
