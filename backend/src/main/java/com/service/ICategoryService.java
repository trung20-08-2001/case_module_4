package com.service;

import com.model.Category;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import com.model.Product;
import java.util.List;
import java.util.Optional;

public interface ICategoryService {
    List<Category> getAll();
    void delete(Long id);
    Optional<Category> findById(Long id);
    List<Category> findAll();
    void save(Category category);

    void edit(Category category);

    Page<Category> getAllCategory(Pageable pageable);



}
