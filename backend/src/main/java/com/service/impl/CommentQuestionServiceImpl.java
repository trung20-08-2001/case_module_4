package com.service.impl;

import com.model.CommentQuestion;
import com.repository.ICommentQuestionRepository;
import com.service.ICommentQuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class CommentQuestionServiceImpl implements ICommentQuestionService {

    @Autowired
    ICommentQuestionRepository commentQuestionRepository;

    @Override
    public Page<CommentQuestion> getCommentQuestionByProduct(int idProduct, Pageable pageable) {
        return commentQuestionRepository.getCommentQuestionByProduct(idProduct,pageable);
    }
}
