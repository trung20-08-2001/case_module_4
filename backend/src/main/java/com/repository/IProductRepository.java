package com.repository;

import com.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface IProductRepository extends JpaRepository<Product,Long> {
    @Query(value = "SELECT p FROM Product p JOIN Account a on p.account.id = a.id JOIN Status s on p.status.id = s.id WHERE s.name = 'PENDING' AND a.id =: id")
    List<Product> getAllProductPending(@Param("id") int id);

//    @Query(value = "SELECT p FROM Product p JOIN Account ")

    @Query(value = "select p from Product p ")
    Optional<Product> getAll();
}

