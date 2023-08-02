package com.repository;

import com.model.CommentReply;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.security.access.method.P;

public interface ICommentReplyRepository extends JpaRepository<CommentReply,Long> {
    @Query(value = "select cr from CommentReply cr where cr.commentQuestion.id=:idCommentQuestion")
    Page<CommentReply> getCommentReplyByCommentQuestion(@Param("idCommentQuestion") int idCommentQuestion, Pageable pageable);
}
