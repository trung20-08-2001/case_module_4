package com.repository;

import com.model.CommentQA;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ICommentRepository extends JpaRepository<CommentQA,Long> {
    @Query(value = "select c from CommentQA c where c.parentId=0 and c.product.id=:idProduct order by c.id desc ")
    List<CommentQA> getCommentQuestion(@Param("idProduct")Long idProduct);

    @Query(value = "select c from CommentQA c where c.parentId=:parentId")
    Page<CommentQA> getCommentAnswer(@Param("parentId")long parentId,Pageable pageable);

}
