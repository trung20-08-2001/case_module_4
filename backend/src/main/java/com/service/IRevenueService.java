package com.service;
import com.model.Revenue;

import java.util.List;

public interface IRevenueService {
    List<Revenue> getAllRevenueByMonthYear(int month, int year);
    List<Revenue> getAllRevenueByYear( int year);
    Revenue getRevenueByMonthMax(int year);
}
