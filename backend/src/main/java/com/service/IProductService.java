package com.service;

import com.model.Product;
import org.springframework.web.multipart.MultipartFile;

public interface IProductService extends IGenerateService<Product, Long>{
    void saveImg(MultipartFile image);
}
