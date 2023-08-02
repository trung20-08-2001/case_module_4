package com.model;

import lombok.Data;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Data
public class CommentReply {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Date dateComment;
    private String comment;
    @ManyToOne
    private Product product;
    @ManyToOne
    private CommentQuestion commentQuestion;
    @ManyToOne
    private Account account;

}
