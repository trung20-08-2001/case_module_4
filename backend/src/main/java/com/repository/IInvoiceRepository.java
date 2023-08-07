package com.repository;

import com.model.Invoice;
import com.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IInvoiceRepository extends JpaRepository<Invoice,Long> {

    @Query("SELECT i FROM Invoice i " +
            "JOIN i.account a " +
            "JOIN InvoiceDetail ide on i.id=ide.invoice.id " +
            "JOIN ide.product p " +
            "WHERE p.account.id = :shopId")
    Page<Invoice> getAllInvoicesForShop(@Param("shopId") Long shopId, Pageable pageable);

}
