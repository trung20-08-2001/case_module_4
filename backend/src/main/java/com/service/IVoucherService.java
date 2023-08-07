package com.service;

import com.model.Account;
import com.model.Voucher;

import java.util.List;

public interface IVoucherService {
    List<Voucher> getALlVoucher();
    void save(Voucher voucher);
    void deleteVoucher(long id);

}
