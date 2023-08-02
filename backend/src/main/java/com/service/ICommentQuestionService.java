package com.service;

import com.model.CommentQuestion;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ICommentQuestionService {
    Page<CommentQuestion> getCommentQuestionByProduct(int idProduct, Pageable pageable);
}
