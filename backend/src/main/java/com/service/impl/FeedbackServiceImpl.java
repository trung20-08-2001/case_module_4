package com.service.impl;


import com.repository.IFeedbackRepository;
import com.service.IFeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FeedbackServiceImpl implements IFeedbackService {
    @Autowired
    IFeedbackRepository iFeedbackRepository;

    @Override
    public int countAllByProduct(int id) {
        return iFeedbackRepository.countAllByProduct(id);
    }
}
