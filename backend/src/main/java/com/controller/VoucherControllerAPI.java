package com.controller;

import com.model.Voucher;
import com.service.IVoucherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/vouchers")
public class VoucherControllerAPI {
    @Autowired
    IVoucherService iVoucherService;
    @GetMapping("/getAllVoucher")
    public ResponseEntity<List<Voucher>> getAllVoucher(){
        List<Voucher> voucherList = iVoucherService.getALlVoucher();
        return new ResponseEntity<>(voucherList, HttpStatus.OK);
    }
    @PostMapping("/addVoucher")
    public ResponseEntity<String> addVoucher(@RequestBody Voucher voucher){
        System.out.println(voucher);
        iVoucherService.save(voucher);
        return new ResponseEntity<>("thêm thành công",HttpStatus.OK);
    }

    @PostMapping("/deleteVoucher/{id}")
    public ResponseEntity<String>  deleteVoucher(@PathVariable long id){
        iVoucherService.deleteVoucher(id);
        return new ResponseEntity<>("Xóa thành công",HttpStatus.OK);
    }
}
