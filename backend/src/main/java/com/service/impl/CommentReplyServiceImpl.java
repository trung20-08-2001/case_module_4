package com.service.impl;

import com.model.CommentReply;
import com.repository.ICommentReplyRepository;
import com.service.ICommentReplyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class CommentReplyServiceImpl implements ICommentReplyService {

    @Autowired
    ICommentReplyService commentReplyService;
    @Override
    public Page<CommentReply> getCommentReplyByCommentQuestion(int idCommentQuestion, Pageable pageable) {
        return commentReplyService.getCommentReplyByCommentQuestion(idCommentQuestion,pageable);
    }

}
