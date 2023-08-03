package com.repository;

import com.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IAccountRepository extends JpaRepository<Account, Long> {
    Account getAccountByUsernameAndPassword(String Username, String Password);
    Account getAccountByUsername(String Username);
}
