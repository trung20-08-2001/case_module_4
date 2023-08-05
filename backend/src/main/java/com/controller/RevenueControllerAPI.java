package com.controller;

import com.model.Revenue;
import com.service.IRevenueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/admin/revenues")
public class RevenueControllerAPI {
    @Autowired
    IRevenueService iRevenueService;
    @PostMapping("/revenueByMonthYear/{month}/{year}")
    public ResponseEntity<List<Revenue>> getAllRevenueByMonthYear(@PathVariable int month,@PathVariable int year){
        List<Revenue> revenuesByMonthYear = iRevenueService.getAllRevenueByMonthYear(month,year);
        return new ResponseEntity<>(revenuesByMonthYear, HttpStatus.OK);
    }

    @PostMapping("/revenueByYear/{year}")
    public ResponseEntity<List<Revenue>> getAllRevenueByYear(@PathVariable int year){
        List<Revenue> revenuesByYear = iRevenueService.getAllRevenueByYear(year);
        return new ResponseEntity<>(revenuesByYear,HttpStatus.OK);
    }
    @PostMapping("/revenueMonthMax/{year}")
    public ResponseEntity<Revenue> getRevenueByMonthMax(@PathVariable int year){
        Revenue revenue = iRevenueService.getRevenueByMonthMax(year);
        return new ResponseEntity<>(revenue,HttpStatus.OK);
    }
}
