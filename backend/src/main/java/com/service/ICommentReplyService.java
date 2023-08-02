package com.service;

import com.model.CommentReply;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ICommentReplyService {
    Page<CommentReply> getCommentReplyByCommentQuestion(int idCommentQuestion, Pageable pageable);
}
