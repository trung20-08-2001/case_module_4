package com.service.impl;

import com.model.Invoice;
import com.model.Product;
import com.model.Status;
import com.repository.IInvoiceRepository;
import com.repository.IStatusRepository;
import com.service.IInvoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import com.repository.IInvoiceRepository;
import com.service.IInvoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InvoiceServiceImpl implements IInvoiceService {

    @Autowired
    IInvoiceRepository iInvoiceRepository;

    @Autowired
    IStatusRepository iStatusRepository;


    @Override
    public Page<Invoice> getAllInvoicesForShop(Long id, Pageable pageable) {
        return iInvoiceRepository.getInvoiceByAccount_Id(id, pageable);
    }

    @Override
    public void updateStatusInvoice(Long id) {
        Invoice invoice = iInvoiceRepository.findById(id).get();
        if (invoice.getStatus().getId() == 3) {
            Status status = iStatusRepository.findById(7).get();
            invoice.setStatus(status);
            iInvoiceRepository.save(invoice);
        }
    }

    @Override
    public Invoice save(Invoice invoice) {
        return iInvoiceRepository.save(invoice);
    }

    @Override
    public Invoice findById(Long id) {
        return iInvoiceRepository.findById(id).orElse(null);
    }
}
