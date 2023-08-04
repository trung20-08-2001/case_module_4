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

import java.util.List;

@Service
public class ProductServiceImpl implements IProductService {
    @Autowired
    IProductRepository iProductRepository;
    @Autowired
    IStatusRepository iStatusRepository;

    @Override
    public List<Product> getAllProductPending(int id) {
        return iProductRepository.getAllProductPending(id);
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

    @Override
    public Status findStatusByProductId(Long id) {
        return iProductRepository.findStatusByProductId(id);
    }

    @Override
    public void updateStatusProduct(Long id) {
        Product product=iProductRepository.findById(id).get();
        if(product.getStatus().getId()==1) {
            Status status=iStatusRepository.findById(4);
            product.setStatus(status);
            iProductRepository.save(product);
        }else{
            Status status=iStatusRepository.findById(1);
            product.setStatus(status);
            iProductRepository.save(product);
        }
    }


}
