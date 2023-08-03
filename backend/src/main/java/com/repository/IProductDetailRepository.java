package com.repository;

import com.model.ProductDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IProductDetailRepository extends JpaRepository<ProductDetail,Long> {

    List<ProductDetail> findProductDetailsByProductId(Long id);
}
