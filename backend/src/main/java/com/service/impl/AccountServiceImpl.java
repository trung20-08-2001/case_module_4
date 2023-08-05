package com.service.impl;

import com.model.Account;
import com.model.Status;
import com.repository.IAccountRepository;
import com.repository.IStatusRepository;
import com.service.IAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AccountServiceImpl implements IAccountService {
    @Autowired
    IAccountRepository iAccountRepository;

    @Autowired
    IStatusRepository iStatusRepository;

    @Override
    public void save(Account account) {
        iAccountRepository.save(account);
    }

    @Override
    public Account login(String username, String password) {
        return iAccountRepository.getAccountByUsernameAndPassword(username, password);
    }


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Account account = iAccountRepository.getAccountByUsername(username);
        List<GrantedAuthority> roles = new ArrayList<>();
        roles.add(account.getRole());
        return new User(account.getUsername(), account.getPassword(), roles);
    }


    @Override
    public List<Account> getAllByUser() {
        return iAccountRepository.findUserAccounts();
    }

    @Override
    public List<Account> getAllByShop() {
        return iAccountRepository.findShopAccounts();
    }

    @Override
    public List<Account> getAllShopByPending() {
        return iAccountRepository.getAllShopByPending();
    }

    @Override
    public List<Account> findShopBlock() {
        return iAccountRepository.findShopBlock();
    }


    @Override
    public void block(long id) {
        Status status = iStatusRepository.findById(2).get();
        Account account = iAccountRepository.findById( id).get();
        account.setStatus(status);
        iAccountRepository.save(account);
    }
    @Override
    public List<Account> getAllAccountByUser() {
        return iAccountRepository.getAllAccountByUser();
    }

    @Override
    public Account findAccountActiveUserById(long id) {
        return iAccountRepository.findAccountActiveUserById(id);
    }

    @Override
    public Account findAccountUserBlockById(long id) {
        return iAccountRepository.findAccountUserBlockById(id);
    }

    @Override
    public List<Account> getAllUserBlock() {
        return iAccountRepository.getAllUserBlock();
    }

    @Override
    public Account findShopActiveById(long id) {
        return iAccountRepository.findShopActiveById(id);
    }

    @Override
    public Account findShopBlockById(long id) {
        return iAccountRepository.findShopBlockById(id);
    }

    @Override
    public List<Account> getNewUser() {
        Pageable pageable = PageRequest.of(0, 5, Sort.by("id").descending());
        return iAccountRepository.findNewAccountUser(pageable);
    }

    @Override
    public void activeShop(long id) {
        Status status = iStatusRepository.findById(1).get();
        Account account = iAccountRepository.findById( id).get();
        account.setStatus(status);
        iAccountRepository.save(account);
    }


}
