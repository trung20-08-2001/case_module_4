package com.repository;

import com.model.Voucher;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IVoucherRepository extends JpaRepository<Voucher,Long> {
}
