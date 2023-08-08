package com.service;

import com.model.InvoiceDetail;

import java.util.List;

public interface IInvoiceDetailService {
    void save(List<InvoiceDetail> invoiceDetails);
    List<InvoiceDetail> findByIdProductAndIdAccount(Long idProduct,Long idAccount);

    void update(InvoiceDetail invoiceDetail);
}
