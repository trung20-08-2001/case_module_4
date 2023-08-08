package com.service;

import com.model.Invoice;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IInvoiceService {
    Page<Invoice> getAllInvoicesForShop(Long id, Pageable pageable);

    void updateStatusInvoice(Long id);

    Invoice save(Invoice invoice);

    Invoice findById(Long id);

}
