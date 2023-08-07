package com.service.impl;

import com.model.InvoiceDetail;
import com.repository.IInvoiceDetailRepository;
import com.service.IInvoiceDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class InvoiceDetailServiceImpl implements IInvoiceDetailService {

    @Autowired
    IInvoiceDetailRepository iInvoiceDetailRepository;

    @Override
    public void save(List<InvoiceDetail> invoiceDetails) {
        iInvoiceDetailRepository.saveAll(invoiceDetails);
    }
}
