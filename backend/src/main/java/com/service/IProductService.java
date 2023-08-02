package com.service;

import com.model.Product;

import java.util.List;
import java.util.Optional;

public interface IProductService {
    Optional<Product> getAllProduct();
}
