package com.repository;

import com.model.Category;
import com.model.Product;
import com.model.Status;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface IProductRepository extends JpaRepository<Product,Long> {

    @Query(value = "SELECT p FROM Product p JOIN Account a on p.account.id = a.id JOIN Status s on p.status.id = s.id WHERE s.name = 'PENDING' AND a.id = :id")
    List<Product> getAllProductPending(@Param("id") long id);


    @Query(value = "select p from Product p ")
    Optional<Product> getAll();

    @Query(value = "select p from Product p ")
    Page<Product> getAllProduct(Pageable pageable);

    @Query(value = "select p from Product p where p.account.id=:id")
    Page<Product> getProductByShopAccount(@Param("id") Long id, Pageable pageable);

    List<Product> getProductsByCategory(Category category);
}

