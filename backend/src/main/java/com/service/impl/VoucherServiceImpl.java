package com.service.impl;

import com.model.Voucher;
import com.repository.IVoucherRepository;
import com.service.IVoucherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VoucherServiceImpl implements IVoucherService {
    @Autowired
    IVoucherRepository iVoucherRepository;

    @Override
    public List<Voucher> getALlVoucher() {
        return iVoucherRepository.findAll();
    }

    @Override
    public void save(Voucher voucher) {
        iVoucherRepository.save(voucher);
    }

    @Override
    public void deleteVoucher(long id) {
        iVoucherRepository.deleteById(id);
    }
}
