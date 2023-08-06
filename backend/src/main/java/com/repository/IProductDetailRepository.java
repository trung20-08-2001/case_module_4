package com.repository;

import com.model.Product;
import com.model.ProductDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IProductDetailRepository extends JpaRepository<ProductDetail,Long> {

    List<ProductDetail> findProductDetailsByProductId(Long id);
    @Modifying
    @Query(value = "delete from ProductDetail pd where pd.product=:product")
    void deleteByProduct(@Param("product") Product product);
}
