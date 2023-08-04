package com.model.dto;

import com.model.CommentQA;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class CommentDTO {
    private CommentQA commentQuestion;
    private int numberCommentAnswer;
    private List<CommentQA> commentAnswerList;

}
