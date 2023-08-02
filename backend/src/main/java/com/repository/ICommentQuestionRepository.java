package com.repository;

import com.model.CommentQuestion;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface ICommentQuestionRepository extends JpaRepository<CommentQuestion,Long> {
    @Query(value = "select cq from CommentQuestion cq where cq.product.id=:idProduct")
    Page<CommentQuestion> getCommentQuestionByProduct(@Param("idProduct")int idProduct, Pageable pageable);
}
