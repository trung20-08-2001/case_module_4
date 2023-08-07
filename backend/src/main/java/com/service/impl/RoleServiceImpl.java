package com.service.impl;

import com.model.Role;
import com.repository.IRoleRepository;
import com.service.IRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoleServiceImpl implements IRoleService {
    @Autowired
    IRoleRepository iRoleRepository;

    @Override
    public Role findById(int id) {
        return iRoleRepository.findById(id).get();
    }
}
