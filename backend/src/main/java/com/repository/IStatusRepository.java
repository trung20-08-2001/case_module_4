package com.repository;

import com.model.Status;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IStatusRepository extends JpaRepository<Status,Integer> {
    Status findById(int id);
}
