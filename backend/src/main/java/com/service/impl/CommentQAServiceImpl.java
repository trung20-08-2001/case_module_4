package com.service.impl;

import com.model.CommentQA;
import com.model.dto.CommentDTO;
import com.repository.ICommentRepository;
import com.service.ICommentQAService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CommentQAServiceImpl implements ICommentQAService {
    @Autowired
    ICommentRepository commentRepository;

    @Override
    public List<CommentQA> getCommentQuestion(Long idProduct) {
        return commentRepository.getCommentQuestion(idProduct);
    }

    @Override
    public List<CommentDTO> getCommentAnswer(Long parentId, Pageable pageable) {
        Page<CommentQA> commentAnswer= commentRepository.getCommentAnswer(parentId,pageable);
        List<CommentQA> commentQAList=commentAnswer.getContent();
        List<CommentDTO> commentDTOList=new ArrayList<>();
        if(commentQAList.size()!=0) {
            for (int i = 0; i < commentQAList.size(); i++) {
                String nameAccountTag=commentQAList.get(i).getAccount().getFullName();
                commentDTOList.add(new CommentDTO(commentQAList.get(i),nameAccountTag));
            }
        }
        return commentDTOList;
    }

    @Override
    public CommentQA save(CommentQA commentQA) {
        return commentRepository.save(commentQA);
    }

    @Override
    public void delete(Long  id) {
        commentRepository.deleteById(id);
    }

    @Override
    public CommentQA findById(Long id) {
        return commentRepository.findById(id).orElse(null);
    }



}
