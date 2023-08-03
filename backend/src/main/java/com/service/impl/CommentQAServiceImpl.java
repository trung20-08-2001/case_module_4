package com.service.impl;

import com.model.CommentQA;
import com.repository.ICommentRepository;
import com.service.ICommentQAService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class CommentQAServiceImpl implements ICommentQAService {
    @Autowired
    ICommentRepository commentRepository;

    @Override
    public Page<CommentQA> getCommentQuestion(Pageable pageable) {
        return commentRepository.getCommentQuestion(pageable);
    }

    @Override
    public Page<CommentQA> getCommentAnswer(int parentId, Pageable pageable) {
        return commentRepository.getCommentAnswer(parentId,pageable);
    }

    @Override
    public void save(CommentQA commentQA) {
        commentRepository.save(commentQA);
    }

    @Override
    public void delete(Long  id) {
        commentRepository.deleteById(id);
    }
}
