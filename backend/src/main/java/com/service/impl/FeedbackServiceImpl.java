package com.service.impl;


import com.model.Account;
import com.model.Feedback;
import com.repository.IFeedbackRepository;
import com.service.IFeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FeedbackServiceImpl implements IFeedbackService {
    @Autowired
    IFeedbackRepository iFeedbackRepository;

    @Override
    public int countAllByProduct(int id) {
        return iFeedbackRepository.countAllByProduct(id);
    }

    @Override
    public List<Feedback> getFeedBackBYIdProduct(Long idProduct) {
        return iFeedbackRepository.getFeedbacksByIdProduct(idProduct);
    }

    @Override
    public void save(Feedback feedback) {
        iFeedbackRepository.save(feedback);
    }

    @Override
    public Feedback checkAccountFeedback(Long idProduct, Long idAccount) {
        Optional<Feedback> feedbackOptional=iFeedbackRepository.checkAccountFeedback(idProduct,idAccount);
        if(feedbackOptional.isPresent())
            return feedbackOptional.get();
        else return null;
    }

    @Override
    public Account checkAccount(Long idProduct, Long idAccount) {
        Optional<Account> optionalFeedback= iFeedbackRepository.checkAccountOrder(idProduct,idAccount);
        if(optionalFeedback.isPresent())
            return optionalFeedback.get();
        else return null;
    }
}
