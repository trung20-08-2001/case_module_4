package com.service;

import com.model.Account;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;


public interface IAccountService extends UserDetailsService {
    void save(Account account);
    Account login(String username, String password);
    List<Account> getAllByUser();
    List<Account> getAllByShop();
    List<Account> getAllShopByPending();
    List<Account> findShopBlock();
    void activeShop(long id);
    void block(long id);
    List<Account> getAllAccountByUser();
    Account findAccountActiveUserById(long id);
    Account findAccountUserBlockById(long id);
    List<Account> getAllUserBlock();
    Account findShopActiveById(long id);
    Account findShopBlockById(long id);
    List<Account> getNewUser();
    Account findAccountById(long id);
}
