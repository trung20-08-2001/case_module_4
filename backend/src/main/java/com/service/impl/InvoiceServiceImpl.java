package com.service.impl;

import com.model.Invoice;
import com.repository.IInvoiceRepository;
import com.service.IInvoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InvoiceServiceImpl implements IInvoiceService {
    @Autowired
    IInvoiceRepository iInvoiceRepository;
    @Override
    public Invoice save(Invoice invoice) {
        return iInvoiceRepository.save(invoice);
    }

    @Override
    public Invoice findById(Long id) {
        return iInvoiceRepository.findById(id).orElse(null);
    }
}
