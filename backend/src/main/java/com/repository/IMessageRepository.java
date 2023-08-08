package com.repository;

import com.model.Account;
import com.model.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IMessageRepository extends JpaRepository<Message,Long> {

    @Query(value = "SELECT m FROM Message m JOIN Account a on m.receivingAccountId.id = a.id and m.sendingAccountId.id = a.id JOIN Status s on m.sendingAccountId.status.id = s.id " +
            "WHERE m.receivingAccountId.id = :id AND m.sendingAccountId.status.id = 1")
    List<Message> getAllMessagesReceivingAccount(@Param("id") long id);


@Query(value = "SELECT m from Message m where m.sendingAccountId.id=:idS and m.receivingAccountId.id=:idR")
    List<Message> getContentRoomChat(@Param("idS") long idSender,@Param("idR")long idReceiver);
}