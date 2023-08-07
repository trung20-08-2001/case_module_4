package com.service.impl;

import com.model.Revenue;
import com.repository.IRevenueRepository;
import com.service.IRevenueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class RevenueServiceImpl implements IRevenueService {
    @Autowired
    IRevenueRepository iRevenueRepository;
    @Override
    public List<Revenue> getAllRevenueByMonthYear(int month, int year) {
        return iRevenueRepository.getAllRevenueByMonthAndYear(month,year);
    }

    @Override
    public List<Revenue> getAllRevenueByYear(int year) {
        return iRevenueRepository.getAllRevenueByYear(year);
    }

    @Override
    public Revenue getRevenueByMonthMax(int year) {
        return iRevenueRepository.getRevenueByMonthMax(year);
    }
}