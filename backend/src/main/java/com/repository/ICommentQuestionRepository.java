package com.repository;

import com.model.CommentQuestion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICommentQuestionRepository extends JpaRepository<CommentQuestion,Long> {
}
