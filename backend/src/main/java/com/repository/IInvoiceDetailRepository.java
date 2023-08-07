package com.repository;

import com.model.InvoiceDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

public interface IInvoiceDetailRepository extends JpaRepository<InvoiceDetail,Long> {
}
