package com.service.impl;

import com.model.Account;
import com.model.Message;
import com.repository.IMessageRepository;
import com.service.IMessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageServiceImpl implements IMessageService {
    @Autowired
    IMessageRepository iMessageRepository;
    @Override
    public List<Account> getAllAccountRendingMessage(long id) {
        return iMessageRepository.getAllAccountRending(id);
    }

    @Override
    public void saveMessage(Message message) {
        iMessageRepository.save(message);
    }

    @Override
    public void deleteMessage(long id) {

    }

    @Override
    public void editMessage(Message message) {

    }

    @Override
    public List<Message> getAllMessage(long idReceiving, long idSending) {
        return iMessageRepository.getAllMessage(idReceiving,idSending);
    }

    @Override
    public List<Message> getAllMessageReceivingSending(long idReceiving, long idSending) {
        return iMessageRepository.getAllMessageReceivingSending(idReceiving,idSending);
    }
}
