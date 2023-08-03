package com.service.impl;

import com.model.Product;
import com.repository.IProductRepository;
import com.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.multipart.MultipartFile;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService implements IProductService {

    @Autowired
    IProductRepository iProductRepository;

    @Value("${upload-path}")
    private String upload;

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
    }

    @Override
    public Page<Product> getAllProduct(Pageable pageable) {
        return iProductRepository.findAll(pageable);
    }

    @Override
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
    }

}
