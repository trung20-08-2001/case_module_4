package com.controller;

import com.model.*;
import com.model.dto.CommentDTO;
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

    @GetMapping("/getCommentQuestion/{idProduct}")
    public List<CommentQA> getCommentQuestion(@PathVariable Long idProduct) {
        return commentQAService.getCommentQuestion(idProduct);
    }

    @GetMapping("/getCommentAnswer/{parentId}/{page}")
    public List<CommentDTO> getCommentAnswer(@PathVariable long parentId, @PathVariable int page) {
        return commentQAService.getCommentAnswer(parentId, PageRequest.of(page, 5));
    }

    @PostMapping("/saveComment")
    public CommentQA saveComment(@RequestBody CommentQA commentQA) {
        return commentQAService.save(commentQA);
    }

    @GetMapping("/deleteComment/{id}")
    public void delete(@PathVariable Long id) {
        commentQAService.delete(id);
    }

    @GetMapping("/findComment/{id}")
    public CommentQA findComment(@PathVariable Long id) {
        return commentQAService.findById(id);
    }

    @GetMapping("/detail")
    public ResponseEntity<Product> detailProduct(@RequestParam long idProduct) {
        return new ResponseEntity<>(iProductService.findById(idProduct), HttpStatus.OK);
    }

    @GetMapping("/category")
    public ResponseEntity<Page<Category>> getAllCategory(@RequestParam(defaultValue = "0") int page) {
        Page<Category> categoryList = iCategoryService.getAllCategory(PageRequest.of(page, 8));
        return new ResponseEntity<>(categoryList, HttpStatus.OK);
    }

    @GetMapping("/listCategory")
    public ResponseEntity<List<Product>> getProductByCategory(@RequestParam Long id) {
        List<Product> productList = iProductService.getAllProductByCategory(id);
        return new ResponseEntity<>(productList, HttpStatus.OK);
    }

    @GetMapping("/getFeedbackByProduct/{idProduct}")
    public List<Feedback> getFeedbackByProduct(@PathVariable Long idProduct){
        return iFeedbackService.getFeedBackBYIdProduct(idProduct);
    }

    @PostMapping("/saveFeedback")
    public void saveFeedback(@RequestBody Feedback feedback){
        iFeedbackService.save(feedback);
    }

    @GetMapping("/checkAccountFeedback/{idProduct}/{idAccount}")
    public Feedback checkAccountFeedback(@PathVariable Long idProduct,@PathVariable Long idAccount ){
        return iFeedbackService.checkAccountFeedback(idProduct,idAccount);
    }

}
