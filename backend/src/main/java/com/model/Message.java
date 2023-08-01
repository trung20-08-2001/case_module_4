package com.model;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Data
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String message;
    private LocalDateTime timeSend;
    @ManyToOne
    private Account sendingAccountId;
    @ManyToOne
    private Account receivingAccountId;

}
