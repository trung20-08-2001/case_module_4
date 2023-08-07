package com.repository;

import com.model.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface IFeedbackRepository extends JpaRepository<Feedback,Long> {
    @Query(nativeQuery = true, value = "select * from Feedback f where f.product_id=:product_id")
    int findByIdProduct(@Param("product_id")int product_id);
    @Query(nativeQuery = true, value = "select count(id) from Feedback f where f.product_id=:product_id")
    int countAllByProduct(@Param("product_id")int product_id );

    @Query(value = "select f from Feedback f where f.product.id=:idProduct AND f.responded=true order by f.id desc ")
    List<Feedback> getFeedbacksByIdProduct(@Param("idProduct")Long idProduct);
    @Query(value = "select f from Feedback f join Account a on f.account.id=a.id join Invoice i on i.account.id=a.id join InvoiceDetail ide on i.id=ide.invoice.id join Product  p on p.id=ide.product.id where  p.id=:idProduct and a.id=:idAccount and i.status.name='DELIVERED' and f.responded=false" )
    Optional<Feedback> checkAccountFeedback(@Param("idProduct")Long idProduct,@Param("idAccount")Long idAccount);
}
