package com.model;

import lombok.Data;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Data
public class CommentQA {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Date dateComment;
    private String comment;
    @Column(columnDefinition = "int default 0")
    private int parentId;
    @ManyToOne
    private Product product;

}
