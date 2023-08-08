package com.service.impl;

import com.model.Message;
import com.repository.IMessageRepository;
import com.service.IMessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageService implements IMessageService {
    @Autowired
    IMessageRepository iMessageRepository;

    @Override
    public List<Message> getContentRoomChat(long idSend, long idReceive) {
        return iMessageRepository.getContentRoomChat(idSend, idReceive);
    }
}
