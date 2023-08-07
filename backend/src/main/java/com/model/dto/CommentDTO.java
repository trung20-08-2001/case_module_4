package com.model.dto;

import com.model.CommentQA;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class CommentDTO {
    private CommentQA commentQA;
    private String tag;
}
