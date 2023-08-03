package com.service;

import com.model.Category;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ICategoryService {
    List<Category> getAll();
    void save(Category category);
    void delete(int id);
    void edit(Category category);

    Page<Category> getAllCategory(Pageable pageable);


}
