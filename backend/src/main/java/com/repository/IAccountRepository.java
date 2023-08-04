package com.repository;

import com.model.Account;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


public interface IAccountRepository extends JpaRepository<Account,Long> {
    @Query(value = "SELECT a FROM Account a JOIN Role r on a.role.id = r.id JOIN Status s on a.status.id = s.id  WHERE r.name = 'ROLE_SHOP' AND s.name = 'ACTIVE'")
    List<Account> findShopAccounts( );

    @Query(value = "SELECT a FROM Account a JOIN Role r on a.role.id = r.id JOIN Status s on a.status.id = s.id  WHERE r.name = 'ROLE_USER' AND s.name = 'ACTIVE'")
    List<Account> findUserAccounts( );

    @Query(value = "SELECT a FROM Account a JOIN Role r on a.role.id = r.id JOIN Status s on a.status.id = s.id WHERE r.name='ROLE_SHOP' AND s.name='PENDING'")
    List<Account> getAllShopByPending( );

    @Query(value = "SELECT a FROM Account a JOIN Role r on a.role.id = r.id JOIN Status s on a.status.id = s.id  WHERE r.name = 'ROLE_SHOP' AND s.name = 'BLOCK'")
    List<Account> findShopBlock();
    Account getAccountByUsernameAndPassword(String Username,String Password);

    Account getAccountByUsername(String Username);

}