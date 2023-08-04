package com.service;

import com.model.CommentQA;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ICommentQAService {
    Page<CommentQA> getCommentQuestion(Long idProduct,Pageable pageable);
    Page<CommentQA> getCommentAnswer(@Param("parentId")int parentId, Pageable pageable);

    void save(CommentQA commentQA);

    void delete(Long id);
}
