package com.service;

import com.model.Category;

import java.util.List;

public interface ICategoryService {
    List<Category> getAll();
    void save(Category category);
    void delete(long id);
    void edit(Category category);


}
