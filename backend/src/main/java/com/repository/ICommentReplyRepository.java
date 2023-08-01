package com.repository;

import com.model.CommentReply;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICommentReplyRepository extends JpaRepository<CommentReply,Long> {
}
