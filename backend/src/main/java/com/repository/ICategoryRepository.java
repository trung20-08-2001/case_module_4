package com.repository;

import com.model.Category;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ICategoryRepository extends JpaRepository<Category,Long> {

    Category findAllById(long id);
    @Query(value = "select c from Category c ")
    Page<Category> getAllCategory(Pageable pageable);


}
