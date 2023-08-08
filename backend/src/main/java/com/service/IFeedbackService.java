package com.service;

import com.model.Account;
import com.model.Feedback;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IFeedbackService {
    int countAllByProduct(int id);

    List<Feedback> getFeedBackBYIdProduct(Long idProduct);

    void save(Feedback feedback);

    Feedback checkAccountFeedback(Long idProduct,Long idAccount);

    Account checkAccount(Long idProduct, Long idAccount);
}
