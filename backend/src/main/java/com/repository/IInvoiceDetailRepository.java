package com.repository;

import com.model.InvoiceDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface IInvoiceDetailRepository extends JpaRepository<InvoiceDetail,Long> {

    @Query(value = "select d from InvoiceDetail d join Invoice i on i.id=d.invoice.id join Account a on a.id=i.account.id where d.product.id=:idProduct and a.id=:idAccount")
    List<InvoiceDetail> getInvoiceDetailByIdProductAndIdAccount(@Param("idProduct")Long idProduct, @Param("idAccount")Long idAccount);
}
