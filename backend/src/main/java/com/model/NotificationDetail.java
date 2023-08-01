package com.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class NotificationDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    private Account account;
    @ManyToOne
    private Notification notification;
}
