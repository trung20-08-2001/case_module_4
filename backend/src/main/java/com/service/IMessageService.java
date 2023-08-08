package com.service;

import com.model.Message;

import java.util.List;

public interface IMessageService {
    List<Message> getContentRoomChat(long idSend,long idReceive);

}
