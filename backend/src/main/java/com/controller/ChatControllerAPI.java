package com.controller;

import com.model.Account;
import com.model.Message;
import com.repository.IMessageRepository;
import com.service.IAccountService;
import com.service.IMessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/chat")
public class ChatControllerAPI {
    @Autowired
    IAccountService iAccountService;
    @Autowired
    IMessageService iMessageService;
    @Autowired
    IMessageRepository iMessageRepository;
    @PostMapping
    public void createMessage(@RequestBody Message message) {
        System.out.println(message);
        Account sendingAccount = iAccountService.findAccountById(message.getSendingAccountId().getId());

        Account receivingAccount = iAccountService.findAccountById(message.getReceivingAccountId().getId());

        Message message1 = new Message();
        message1.setMessage(message.getMessage());
        message1.setTimeSend(LocalDateTime.now());
        message1.setSendingAccountId(sendingAccount);
        message1.setReceivingAccountId(receivingAccount);
         iMessageService.saveMessage(message1);
    }

    @GetMapping("/allMessageByAccountSending")
    public List<Message> getAllMessages() {
        return iMessageRepository.findAll();
    }
    @PostMapping("/getAllAccountByRending/{id}")
    public ResponseEntity<List<Account>> getAllAccountByRending(@PathVariable long id){
      List<Account> accountListRending =  iMessageService.getAllAccountRendingMessage(id);
        return new ResponseEntity<>(accountListRending, HttpStatus.OK);
    }
    @PostMapping("/getAllMessage/{idReceiving}/{idSending}")
    public ResponseEntity<List<Message>> getAllMessage(@PathVariable long idReceiving, @PathVariable long idSending){
        List<Message> messageList = iMessageService.getAllMessage(idReceiving,idSending);
        return new ResponseEntity<>(messageList,HttpStatus.OK);
    }
    @PostMapping("/getAllMessageReceivingSending/{idReceiving}/{idSending}")
    public ResponseEntity<List<Message>> getAllMessageReceivingSending(@PathVariable long idReceiving, @PathVariable long idSending){
        List<Message> messageReceivingSending = iMessageService.getAllMessageReceivingSending(idReceiving,idSending);
        return new ResponseEntity<>(messageReceivingSending,HttpStatus.OK);
    }
}
