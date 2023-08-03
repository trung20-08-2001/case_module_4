package com.service.impl;

import com.model.Product;
import com.repository.IProductRepository;
import com.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
<<<<<<< HEAD:backend/src/main/java/com/service/impl/ProductService.java
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.multipart.MultipartFile;

=======
>>>>>>> 349735f5ca71abea76b7266935e0a63a0f155062:backend/src/main/java/com/service/impl/ProductServiceImpl.java
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

<<<<<<< HEAD:backend/src/main/java/com/service/impl/ProductService.java
import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService implements IProductService {

=======
import java.util.List;

@Service
public class ProductServiceImpl implements IProductService  {
>>>>>>> 349735f5ca71abea76b7266935e0a63a0f155062:backend/src/main/java/com/service/impl/ProductServiceImpl.java
    @Autowired
    IProductRepository iProductRepository;
    @Override
    public List<Product> getAllProductPending(int id) {
        return iProductRepository.getAllProductPending(id);
    }

<<<<<<< HEAD:backend/src/main/java/com/service/impl/ProductService.java

    @Override
    public List<Product> findAll() {
        return iProductRepository.findAll();
    }

    @Override
    public Optional<Product> findById(Long aLong) {
        return iProductRepository.findById(aLong);
    }

    @Override
    public void save(Product product) {

        iProductRepository.save(product);
    }

    @Override
    public void delete(Long aLong) {
        iProductRepository.deleteById(aLong);
=======
    @Override
    public void confirmProduct(Product product) {

    }

    @Override
    public void refuseProduct(int id) {

>>>>>>> 349735f5ca71abea76b7266935e0a63a0f155062:backend/src/main/java/com/service/impl/ProductServiceImpl.java
    }

    @Override
    public Page<Product> getAllProduct(Pageable pageable) {
        return null;
    }

    @Override
<<<<<<< HEAD:backend/src/main/java/com/service/impl/ProductService.java
    public void saveImg(MultipartFile image) {
        String imgFile;
        try {
            if (image != null && !image.isEmpty()) {
                imgFile = image.getOriginalFilename();
                File file = new File(upload + imgFile);
                image.transferTo(file);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
=======
    public Product findById(Long id) {
        return null;
>>>>>>> 349735f5ca71abea76b7266935e0a63a0f155062:backend/src/main/java/com/service/impl/ProductServiceImpl.java
    }

}