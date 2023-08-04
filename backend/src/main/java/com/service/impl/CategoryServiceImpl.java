package com.service.impl;

import com.model.Category;
import com.repository.ICategoryRepository;
import com.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryServiceImpl implements ICategoryService {

    @Autowired
    ICategoryRepository iCategoryRepository;

    @Override
    public List<Category> getAll() {
        return iCategoryRepository.findAll();
    }

    @Override
    public void save(Category category) {
        iCategoryRepository.save(category);
    }


    public void delete(Long id) {
        iCategoryRepository.findAllById(id);
    }

    @Override
    public void edit(Category category) {
        iCategoryRepository.save(category);
    }

    @Override
    public Page<Category> getAllCategory(Pageable pageable) {
        return iCategoryRepository.getAllCategory(pageable);
    }


    @Override
    public Optional<Category> findById(Long id) {
        return iCategoryRepository.findById(id);
    }

    @Override
    public List<Category> findAll() {
        return iCategoryRepository.findAll();
    }
}
