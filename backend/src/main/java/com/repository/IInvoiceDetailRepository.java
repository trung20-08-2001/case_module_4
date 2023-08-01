package com.repository;

import com.model.InvoiceDetail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IInvoiceDetailRepository extends JpaRepository<InvoiceDetail,Long> {
}
