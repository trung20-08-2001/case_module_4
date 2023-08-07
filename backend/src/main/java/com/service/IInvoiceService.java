package com.service;

import com.model.Invoice;

import javax.persistence.criteria.CriteriaBuilder;

public interface IInvoiceService {

    Invoice save(Invoice invoice);

    Invoice findById(Long id);


}
