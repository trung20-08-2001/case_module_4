package com.service;

import com.model.CommentQA;
import com.model.dto.CommentDTO;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ICommentQAService {
    List<CommentQA> getCommentQuestion(Long idProduct);
    List<CommentDTO>  getCommentAnswer(@Param("parentId")Long parentId, Pageable pageable);
    CommentQA save(CommentQA commentQA);
    void delete(Long id);
    CommentQA findById(Long id);

}
