package com.service;

import com.model.Account;
import com.model.Message;

import java.util.List;

public interface IMessageService {
    List<Account> getAllAccountRendingMessage(long id);
    void saveMessage(Message message);
    void deleteMessage(long id);
    void editMessage(Message message);

    List<Message> getAllMessage(long idReceiving ,long idSending);
    List<Message> getAllMessageReceivingSending(long idReceiving ,long idSending);
}
