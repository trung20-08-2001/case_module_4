package com.controller;

import com.model.Category;
import com.model.CommentQA;
import com.model.Product;
import com.model.ProductDetail;
import com.service.*;
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
    @Autowired
    ICategoryService iCategoryService;

    @GetMapping("/show")
    public ResponseEntity<Page<Product>> showAllProduct(@RequestParam(defaultValue = "0") int page) {
        Page<Product> productPage = iProductService.getAllProduct(PageRequest.of(page, 10));
        return new ResponseEntity<>(productPage, HttpStatus.OK);
    }

    @GetMapping("/findProductById/{id}")
    public Product findProductById(@PathVariable Long id) {
        return iProductService.findById(id);
    }

    @GetMapping("/getListProductDetail/{id}")
    public List<ProductDetail> getListProductDetail(@PathVariable Long id) {
        return productDetailService.getListProductDetailByIdProduct(id);
    }

    @GetMapping("/reviewStar")
    public String getReviewStar(@RequestParam int idProduct) {
        String rv = iFeedbackService.countAllByProduct(idProduct) + "";
        return rv;
    }

    @GetMapping("/getCommentQuestion/{idProduct}/{page}")
    public Page<CommentQA> getCommentQuestion(@PathVariable int page,@PathVariable Long idProduct) {
        return commentQAService.getCommentQuestion(idProduct,PageRequest.of(page, 5));
    }

    @GetMapping("/getCommentAnswer/{parentId}")
    public Page<CommentQA> getCommentAnswer(@PathVariable int parentId, @RequestParam(defaultValue = "0") int page) {
        return commentQAService.getCommentAnswer(parentId, PageRequest.of(page, 5));
    }

    @PostMapping("/saveComment")
    public void saveComment(CommentQA commentQA) {
        commentQAService.save(commentQA);
    }

    @GetMapping("/deleteComment/{id}")
    public void delete(@PathVariable Long id) {
        commentQAService.delete(id);
    }

    @GetMapping("/detail")
    public ResponseEntity<Product> detailProduct(@RequestParam long idProduct) {
        return new ResponseEntity<>(iProductService.findById(idProduct), HttpStatus.OK);
    }
    @GetMapping("/category")
    public ResponseEntity<Page<Category>> getAllCategory(@RequestParam(defaultValue = "0") int page){
        Page<Category> categoryList= iCategoryService.getAllCategory(PageRequest.of(page, 8));
        return new ResponseEntity<>(categoryList, HttpStatus.OK);
    }


}
