package com.service.impl;

import com.model.Product;
import com.model.Status;
import com.repository.ICategoryRepository;
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
    IStatusRepository iStatusRepository;
    @Autowired
    ICategoryRepository iCategoryRepository;

    @Override
    public List<Product> getAllProductPending(long id) {
        return iProductRepository.getAllProductPending(id);
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
    public void updateStatusProduct(Long id) {
        Product product = iProductRepository.findById(id).get();
        if (product.getStatus().getId() == 1) {
            Status status = iStatusRepository.findById(4).get();
            product.setStatus(status);
            iProductRepository.save(product);
        } else {
            Status status = iStatusRepository.findById(1).get();
            product.setStatus(status);
            iProductRepository.save(product);
        }
    }
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
    public List<Product> findByName(String name) {
        return iProductRepository.findByName("%"+name+"%");
    }

    @Override
    public Page<Product> getAllProductActive(Pageable pageable) {
        return iProductRepository.getAllProductActive(pageable);
    }

    @Override
    public Product save(Product product) {
        return iProductRepository.save(product);
    }

    @Override
    public void refuseProduct(long id) {
        Product product = iProductRepository.findById(id).get();
        iProductRepository.delete(product);
    }

}
