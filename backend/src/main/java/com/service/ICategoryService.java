package com.service;

import com.model.Category;
import com.model.Product;

import java.util.List;
import java.util.Optional;

public interface ICategoryService {

    List<Category> getAll();

    void save(Category category);

    void delete(Long id);

    Optional<Category> findById(Long id);

    List<Category> findAll();
}
