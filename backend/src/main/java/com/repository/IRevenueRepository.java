package com.repository;
import com.model.Revenue;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IRevenueRepository extends JpaRepository<Revenue,Long> {

    @Query(value = "SELECT r FROM Revenue r WHERE r.month = :month AND r.year = :year ")
    List<Revenue> getAllRevenueByMonthAndYear(@Param("month") int month, @Param("year") int year);

    @Query(value ="SELECT r FROM Revenue r WHERE r.year = :year " )
    List<Revenue> getAllRevenueByYear(@Param("year") int year);

    @Query(value = "SELECT r FROM Revenue r WHERE r.year = :year AND r.revenue =(SELECT max(rm.revenue) FROM Revenue rm WHERE rm.year = :year)")
    Revenue getRevenueByMonthMax(@Param("year") int year);
}