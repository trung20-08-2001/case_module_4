package com.repository;

import com.model.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IFeedbackRepository extends JpaRepository<Feedback,Long> {
    @Query(nativeQuery = true, value = "select * from Feedback f where f.product_id=:product_id")
    int findByIdProduct(@Param("product_id")int product_id);
    @Query(nativeQuery = true, value = "select count(id) from Feedback f where f.product_id=:product_id")
    int countAllByProduct(@Param("product_id")int product_id );

}
