package com.controller;

import com.model.Category;
import com.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/categories")
public class CategoryControllerAPI {
    @Autowired
    ICategoryService iCategoryService;
    @GetMapping
    public ResponseEntity<List<Category>> getAllCategory(){
        List<Category> categoryList= iCategoryService.getAll();
        return new ResponseEntity<>(categoryList, HttpStatus.OK);
    }
}