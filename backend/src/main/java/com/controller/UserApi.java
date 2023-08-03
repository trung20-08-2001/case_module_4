package com.controller;

import com.model.CommentQA;
import com.model.Product;
import com.model.ProductDetail;
import com.service.ICommentQAService;
import com.service.IFeedbackService;
import com.service.IProductDetailService;
import com.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin("*")
@RequestMapping("/user")
public class UserApi {
    @Autowired
    IProductService iProductService;
    @Autowired
    IFeedbackService iFeedbackService;

    @Autowired
    ICommentQAService commentQAService;

    @Autowired
    IProductDetailService productDetailService;

    @GetMapping("/show")
    public ResponseEntity<Page<Product>> showAllProduct(@RequestParam(defaultValue = "0") int page) {
        Page<Product> productPage = iProductService.getAllProduct(PageRequest.of(page, 10));
        return new ResponseEntity<>(productPage, HttpStatus.OK);
    }


    @GetMapping("/findProductById/{id}")
    public Product findProductById(@PathVariable Long id){
        return iProductService.findById(id);
    }

    @GetMapping("/getListProductDetail/{id}")
    public List<ProductDetail> getListProductDetail(@PathVariable Long id){
        return productDetailService.getListProductDetailByIdProduct(id);
    }

    @GetMapping("/reviewStar")
    public String getReviewStar(@RequestParam int idProduct) {
        return iFeedbackService.countAllByProduct(idProduct) + "";
    }

    @GetMapping("/getCommentQuestion")
    public Page<CommentQA> getCommentQuestion(@RequestParam(defaultValue = "0")int page){
        return commentQAService.getCommentQuestion(PageRequest.of(page,5));
    }

    @GetMapping("/getCommentAnswer/{parentId}")
    public Page<CommentQA> getCommentAnswer(@PathVariable int parentId ,@RequestParam(defaultValue = "0")int page){
        return commentQAService.getCommentAnswer(parentId,PageRequest.of(page,5));
    }

    @PostMapping("/saveComment")
    public void saveComment(CommentQA commentQA){
        commentQAService.save(commentQA);
    }

    @GetMapping("/deleteComment/{id}")
    public void delete(@PathVariable Long id){
        commentQAService.delete(id);
    }

}
