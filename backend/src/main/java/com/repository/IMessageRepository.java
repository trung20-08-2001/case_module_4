package com.repository;

import com.model.Account;
import com.model.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IMessageRepository extends JpaRepository<Message, Long> {

    @Query(value = "SELECT m FROM Message m JOIN Account a on m.receivingAccountId.id = a.id and m.sendingAccountId.id = a.id JOIN Status s on m.sendingAccountId.status.id = s.id " +
            "WHERE m.receivingAccountId.id = :id AND m.sendingAccountId.status.id = 1")
    List<Message> getAllMessagesReceivingAccount(@Param("id") long id);

    @Query(value = "SELECT DISTINCT a FROM Account a JOIN Message m ON a.id = m.receivingAccountId.id WHERE m.sendingAccountId.id = :id")
    List<Account> getAllAccountRending(@Param("id") long id);

    @Query(value = "SELECT m FROM Message m WHERE m.receivingAccountId.id= :idReceiving and m.sendingAccountId.id= :idSending")
    List<Message> getAllMessage(@Param("idReceiving") long idReceiving, @Param("idSending") long idSending);

    @Query(value = "SELECT m FROM Message m WHERE (m.receivingAccountId.id = :idReceiving AND m.sendingAccountId.id = :idSending) OR (m.receivingAccountId.id = :idSending AND m.sendingAccountId.id = :idReceiving)")
    List<Message> getAllMessageReceivingSending(@Param("idReceiving") long idReceiving, @Param("idSending") long idSending);
}