package com.repository;

import com.model.Invoice;
import com.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IInvoiceRepository extends JpaRepository<Invoice,Long> {

    Page<Invoice> getInvoiceByAccount_Id(Long id, Pageable pageable);
}
