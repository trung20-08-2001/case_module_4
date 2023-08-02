package com.controller;

import com.model.CommentQuestion;
import com.model.CommentReply;
import com.service.ICommentQuestionService;
import com.service.ICommentReplyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin("*")
@RequestMapping("/user")
public class UserController {

    @Autowired
    ICommentQuestionService commentQuestionService;

    @Autowired
    ICommentReplyService commentReplyService;


    @GetMapping("/getCommentQuestion/{id}")
    public Page<CommentQuestion> getCommentQuestion(@PathVariable int id,@RequestParam(defaultValue = "0")int page){
        return commentQuestionService.getCommentQuestionByProduct(id, PageRequest.of(page,5));
    }

    @GetMapping("/getCommentReply/{id}")
    public Page<CommentReply> getCommentReply(@PathVariable int id, @RequestParam(defaultValue = "0")int page){
        return commentReplyService.getCommentReplyByCommentQuestion(id,PageRequest.of(page,5));
    }

}
