let product_detail = JSON.parse(localStorage.getItem("product_detail"))
let account = JSON.parse(localStorage.getItem("account"));
let isAnswer = false;
let isEdit = false;
let lengthTagName = 0;
let orderDetails = localStorage.getItem("orderDetails");
if (orderDetails === null) {
    let orderDetails = [];
    localStorage.setItem("orderDetails", JSON.stringify(orderDetails));
}


displayDetail();
getFeedback(product_detail.id)
function displayDetail() {
    let str = `
    <!-- Shop Detail Start -->
<div class="container-fluid pb-5">
    <div class="row px-xl-5">
        <div class="col-lg-5 mb-30">
            <div id="product-carousel" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner bg-light" id="slide_image">
                    <div class="carousel-item active" id="img_active">
                        <img class="w-100" style="height: 400px" src="${product_detail.img}" alt="${product_detail.name}">
                    </div>
                </div>
                <a class="carousel-control-prev" href="#product-carousel" data-slide="prev">
                    <i class="fa fa-2x fa-angle-left text-dark"></i>
                </a>
                <a class="carousel-control-next" href="#product-carousel" data-slide="next">
                    <i class="fa fa-2x fa-angle-right text-dark"></i>
                </a>
            </div>
        </div>
        <div class="col-lg-7 h-auto mb-30">
            <div class="h-100 bg-light p-30">
                <h3>${product_detail.name}</h3>
                <h3 class="font-weight-semi-bold mb-4">${product_detail.price}</h3>
<!--                    <p class="mb-4">Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit-->
<!--                        clita ea. Sanc ipsum et, labore clita lorem magna duo dolor no sea-->
<!--                        Nonumy</p>-->
                    <div class="d-flex mb-3">
                        <strong class="text-dark mr-3">Sizes:</strong>
                        <form>
                            <div class="custom-control custom-radio custom-control-inline">
                                <input type="radio" class="custom-control-input" id="size-1" name="size">
                                <label class="custom-control-label" for="size-1">XS</label>
                            </div>
                            <div class="custom-control custom-radio custom-control-inline">
                                <input type="radio" class="custom-control-input" id="size-2" name="size">
                                <label class="custom-control-label" for="size-2">S</label>
                            </div>
                            <div class="custom-control custom-radio custom-control-inline">
                                <input type="radio" class="custom-control-input" id="size-3" name="size">
                                <label class="custom-control-label" for="size-3">M</label>
                            </div>
                            <div class="custom-control custom-radio custom-control-inline">
                                <input type="radio" class="custom-control-input" id="size-4" name="size">
                                <label class="custom-control-label" for="size-4">L</label>
                            </div>
                            <div class="custom-control custom-radio custom-control-inline">
                                <input type="radio" class="custom-control-input" id="size-5" name="size">
                                <label class="custom-control-label" for="size-5">XL</label>
                            </div>
                        </form>
                </div>
                <div class="d-flex mb-4">
                    <strong class="text-dark mr-3">Colors:</strong>
                    <form>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" id="color-1" name="color">
                            <label class="custom-control-label" for="color-1">Black</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" id="color-2" name="color">
                            <label class="custom-control-label" for="color-2">White</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" id="color-3" name="color">
                            <label class="custom-control-label" for="color-3">Red</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" id="color-4" name="color">
                            <label class="custom-control-label" for="color-4">Blue</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" id="color-5" name="color">
                            <label class="custom-control-label" for="color-5">Green</label>
                        </div>
                    </form>
                </div>
                <div class="d-flex align-items-center mb-4 pt-2">
                    <div class="input-group quantity mr-3" style="width: 130px;">
                        <div class="input-group-btn ">
                            <button class="btn btn-primary btn-minus choose_quantity">
                                <i class="fa fa-minus"></i>
                            </button>
                        </div>
                        <input type="text" id="quantityProductOrder" class="form-control bg-secondary border-0 text-center" value="1">
                        <div class="input-group-btn ">
                            <button class="btn btn-primary btn-plus choose_quantity">
                                <i class="fa fa-plus"></i>
                            </button>
                        </div>
                    </div>
                    <button class="btn btn-primary px-3" onclick="addToCart()"><i class="fa fa-shopping-cart mr-1"></i> Add To
                        Cart
                    </button>
                </div>
                <div class="d-flex pt-2">
                    <strong class="text-dark mr-2">Share on:</strong>
                    <div class="d-inline-flex">
                        <a class="text-dark px-2" href="https://vi-vn.facebook.com/">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a class="text-dark px-2" href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoidmkifQ%3D%3D%22">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a class="text-dark px-2" href="https://www.linkedin.com/login">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
<!--                        <a class="text-dark px-2" href="">-->
<!--                            <i class="fab fa-pinterest"></i>-->
<!--                        </a>-->
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row px-xl-5">
        <div class="col">
            <div class="bg-light p-30">
                <div class="nav nav-tabs mb-4">
                    <a class="nav-item nav-link text-dark " data-toggle="tab" href="#tab-pane-1">Chi tiết sản
                        phẩm</a>
                    <a class="nav-item nav-link text-dark active" data-toggle="tab" href="#tab-pane-2">Bình luận</a>
                    <a class="nav-item nav-link text-dark " data-toggle="tab" href="#tab-pane-3" id="countFeedback">Reviews (0)</a>
                </div>
                <div class="tab-content">
                    <div class="tab-pane fade show " id="tab-pane-1">
                        <h4 class="mb-3">Product Description</h4>
                        <p>${product_detail.description}</p>
                    </div>
                    <div class="tab-pane fade show bootdey active" id="tab-pane-2">
                        <div class="col-md-12 bootstrap snippets">
                            <div class="panel">
                                <div class="panel-body">
                                    <textarea class="form-control rounded" rows="2"
                                              placeholder="Nhập nội dung comment của bạn" id="newComment"></textarea>
                                              <input type="hidden" value=0 id="parentId" >
                                    <div class="mar-top clearfix">
                                        <button class="btn btn-sm btn-primary pull-right" type="button" onclick="confirmComment()">Xác nhận</button>
                                        <button class="btn btn-sm btn-primary pull-right" type="button" onclick="reset()">Xóa</button>
                                    </div>
                                </div>
                            </div>
                            <div class="panel" style="height: 700px;overflow: auto">
                                <div class="panel-body" id="comments">
                                    <!-- Newsfeed Content -->
                                    <!--===================================================-->
                                    <div class="media-block">
                                        <a class="media-left" href="#"><img class="img-circle img-sm"
                                                                            alt="Profile Picture"
                                                                            src="https://bootdey.com/img/Content/avatar/avatar1.png"></a>
                                        <div class="media-body">
                                            <div class="mar-btm">
                                                <a href="#" class="btn-link text-semibold media-heading box-inline">Lisa
                                                    D.</a>
                                                <p class="text-muted text-sm"><i class="fa fa-mobile fa-lg"></i> - From
                                                    Mobile - 11 min ago
                                                </p>
                                            </div>
                                            <p>consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                                                laoreet dolore magna
                                                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                                                tation ullamcorper
                                                suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                                            <div class="pad-ver">
                                                <div class="btn-group">
                                                    <!--                                                    <a class="btn btn-sm btn-default btn-hover-success" href="#"><i-->
                                                    <!--                                                            class="fa fa-thumbs-up"></i></a>-->
                                                    <!--                                                    <a class="btn btn-sm btn-default btn-hover-danger" href="#"><i-->
                                                    <!--                                                            class="fa fa-thumbs-down"></i></a>-->
                                                </div>
                                                <a class="btn btn-sm btn-default btn-hover-primary" href="#tab-pane-2">Trả lời</a>
                                                <a class="btn btn-sm btn-default btn-hover-primary" >Xem câu trả lời</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade " id="tab-pane-3">
                        <div class="row">
                            <div class="col-md-6" id="feedbacks"  style="height: 350px;overflow: auto">
                                <h4 class="mb-4">1 review for "Product Name"</h4>
                                <div class="media mb-4">
                                    <img src="img/user.jpg" alt="Image" class="img-fluid mr-3 mt-1"
                                         style="width: 45px;">
                                    <div class="media-body">
                                        <h6>John Doe<small> - <i>01 Jan 2045</i></small></h6>
                                        <div class="text-primary mb-2">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star-half-alt"></i>
                                            <i class="far fa-star"></i>
                                        </div>
                                        <p>Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum
                                            et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                 <h4 class="mb-4">Leave a review</h4>
                                <div class="d-flex my-3 row">
                                    <div class="col-12">
                                        <p>Choose star</p>
                                        <input type="radio" name="rating" id="star1" value="1">
                                        <label for="star1" class="star"></label>

                                        <input type="radio" name="rating" id="star2" value="2">
                                        <label for="star2" class="star"></label>

                                        <input type="radio" name="rating" id="star3" value="3">
                                        <label for="star3" class="star"></label>


                                        <input type="radio" name="rating" id="star4" value="4">
                                        <label for="star4" class="star"></label>
                                        
                                        <input type="radio" name="rating" id="star5" value="5" checked>
                                        <label for="star5" class="star"></label>
                                        
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label>Your Review *</label>
                                            <textarea cols="30" rows="5"
                                                      class="form-control" id="feedback" placeholder="Nhập đánh giá của bạn" ></textarea>
                                        </div>
                                        <div class="form-group mb-0">
                                            <input type="button" value="Leave Your Review"
                                                   class="btn btn-primary px-3" onclick="checkAccount()">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Shop Detail End -->
    `
    $("#page_content").html(str)
    getListProductDetail(product_detail.id)
    getCommentQuestion(0)
}

$(document).ready(function () {
    $("#newComment").on("input", function () {
        var newValue = $(this).val();
        $(this).attr("value", newValue);
    });
});

function getListProductDetail() {
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        },
        url: "http://localhost:8080/user/getListProductDetail/" + product_detail.id,
        success: function (data) {
            displaySlideProduct(data);
        },
        error: function (err) {
            console.log(err);
            alert("Error")
        }
    })
}

function displaySlideProduct(data) {
    let str = "";
    for (const p of data) {
        str += `
        <div class="carousel-item">
            <img class="w-100" style="height: 400px"  src="${p.image}" alt="${p.product.name}">
        </div>
        `
    }
    $("#slide_image").append(str)
}

function getCommentQuestion(page) {
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        },
        url: "http://localhost:8080/user/getCommentQuestion/" + product_detail.id,
        success: function (data) {
            displayCommentQuestion(data);
        },
        error: function (err) {
            console.log(err);
            alert("Error")
        }
    })
}

function displayCommentQuestion(listComment) {
    let str = "";
    sortComment(listComment)
    for (const c of listComment) {
        str += `
         <div class="media-block" id="${'comment' + c.id}">
                                        <a class="media-left"><img class="rounded-circle img-sm"
                                                                            alt="${c.account.fullName}"
                                                                            src="${c.account.avatar}"></a>
                                        <div class="media-body">
                                            <div class="mar-btm">
                                                <a  class="btn-link text-semibold media-heading box-inline">${c.account.fullName}</a>
                                                <p class="text-muted text-sm">${c.dateComment}</p>
                                            </div>
                                            <p>${c.comment}</p>
                                            <div class="pad-ver">
                                                <a class="btn btn-sm btn-default btn-hover-primary" href="#tab-pane-2" onclick="answerComment('${c.account.fullName}',${c.id})">Trả lời</a>
                                                <a class="btn btn-sm btn-default btn-hover-primary"  id="${'show' + c.id}" onclick="getCommentAnswer(${c.id},0)">Xem câu trả lời</a>
                                                <a class="btn btn-sm btn-default btn-hover-primary d-none"  id="${'hide' + c.id}" onclick="hideCommentAnswer(${c.id})">Ẩn bớt</a>
                                                `
        if (account != null && account.id === c.account.id) {
            str += `
                   <a class="btn btn-sm btn-default btn-hover-primary"  onclick="deleteComment(${c.id})">Xóa comment</a>
                   <a class="btn btn-sm btn-default btn-hover-primary"  onclick="editComment(${c.id})">Thay đổi</a>
                `
        }
        str += `
            
                                            </div>
                                            <div id="${'commentAnswer' + c.id}" >
                                            </div>                                        
                                        </div>
                                    </div>
                                    <hr>
        `
    }
    $("#comments").html(str)
}

function getCommentAnswer(parentId, page) {
    let statusCommentAnswer = $("#commentAnswer" + parentId).css("display")
    if (statusCommentAnswer === "none") {
        $("#commentAnswer" + parentId).slideDown(500);
        $("#show" + parentId).addClass("d-none")
        $("#hide" + parentId).removeClass("d-none")
    } else {
        $.ajax({
            type: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            },
            url: "http://localhost:8080/user/getCommentAnswer/" + parentId + "/" + page,
            success: function (data) {
                displayCommentAnswer(parentId, data);
            },
            error: function (err) {
                console.log(err);
                alert("Error")
            }
        })
    }
}

function sortComment(listComment) {
    if (account != null) {
        listComment.sort(function (comment1, comment2) {
            if (comment1.account.id === account.id && comment2.account.id !== account.id) {
                return -1;
            } else if (comment1.account.id !== account.id && comment2.account.id === account.id) {
                return 1;
            } else {
                return 0;
            }
        });
    }
}

function displayCommentAnswer(parentId, listCommentAnswer) {
    let str = "";
    if (listCommentAnswer.length !== 0) {
        for (const c of listCommentAnswer) {
            str += `
        <div class="media-block" id="${'comment' + c.commentQA.id}" >
                                <a class="media-left" ><img class="rounded-circle img-sm" alt="${c.commentQA.account.fullName}"
                                                                    src="${c.commentQA.account.avatar}"></a>
                                <div class="media-body">
                                    <div class="mar-btm">
                                        <a  class="btn-link text-semibold media-heading box-inline">${c.commentQA.account.fullName}</a>
                                        <p class="text-muted text-sm"></i>${c.commentQA.dateComment}</p>
                                    </div>
                                    <p><a  class="btn-link text-semibold media-heading box-inline">${'@'+c.tag}</a>${c.commentQA.comment}</p>
                                     <div class="pad-ver">
                                                <a class="btn btn-sm btn-default btn-hover-primary" href="#tab-pane-2" onclick="answerComment('${c.commentQA.account.fullName}',${c.commentQA.id})">Trả lời</a>
                                                <a class="btn btn-sm btn-default btn-hover-primary"  id="${'show' + c.id}" onclick="getCommentAnswer(${c.commentQA.id},0)">Xem câu trả lời</a>
                                                <a class="btn btn-sm btn-default btn-hover-primary d-none"  id="${'hide' + c.id}" onclick="hideCommentAnswer(${c.commentQA.id})">Ẩn bớt</a>
                                                                                   `
            if (account != null && account.id === c.commentQA.account.id) {
                str += `
                   <a class="btn btn-sm btn-default btn-hover-primary"  onclick="deleteComment(${c.commentQA.id})">Xóa comment</a>
                   <a class="btn btn-sm btn-default btn-hover-primary"  onclick="editComment(${c.commentQA.id})">Thay đổi comment</a>
                   `
            }
            str += `
                                            </div>
                                            <div id="${'commentAnswer' + c.commentQA.id}" >
                                            </div>      
        </div>
        `
        }
    } else {
        str = `
        <div class="media-block">Chưa có câu trả lời nào
        </div>
        `
    }
    $("#commentAnswer" + parentId).html(str);
    $("#show" + parentId).addClass("d-none")
    $("#hide" + parentId).removeClass("d-none")
}

function hideCommentAnswer(parentId) {
    $("#commentAnswer" + parentId).slideUp(500)
    $("#show" + parentId).removeClass("d-none")
    $("#hide" + parentId).addClass("d-none")

}

function confirmComment() {
    if (account === null) {
        $("#notification").modal("show");
        $("#content_notification").val("Bạn chưa đăng nhập")
    } else {
        let newComment;
        let comment=$("#newComment").val();
        if(isAnswer===true) {
            comment = comment.slice(lengthTagName+1, comment.length);
        }
        let parentId = $("#parentId").val();
        let dateComment = new Date();
        if (isEdit === true) {
            newComment = JSON.parse(localStorage.getItem("commentEdit"))
            newComment.comment=comment;
        } else {
            newComment = {
                comment,
                dateComment,
                parentId,
                product: product_detail,
                account: JSON.parse(localStorage.getItem("account"))
            }
        }
        $.ajax({
            type: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            },
            url: "http://localhost:8080/user/saveComment",
            data: JSON.stringify(newComment),
            success: function (data) {
                if (isAnswer === false && isEdit===false) {
                    displayDetail();
                } else if(isEdit===true||isAnswer===true) {
                    getCommentAnswer(parentId, 0)
                    setTimeout(function () {
                        $("html, body").animate({
                            scrollTop: $("#comment" + data.parentId).offset().top
                        }, 500);
                    }, 500);
                    isAnswer = false;
                    isEdit=false;
                }
                reset()
            },
            error: function (err) {
                console.log(err);
                alert("Error")
            }
        })
    }
}

function deleteComment(idComment) {
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        },
        url: "http://localhost:8080/user/deleteComment/" + idComment,
        success: function () {
            getCommentQuestion(0)
        },
        error: function (err) {
            console.log(err);
            alert("Error")
        }
    })

}

function answerComment(nameAccountQuestion, parentId) {
    $("#newComment").val("@" + nameAccountQuestion + " ");
    $("#parentId").val(parentId);
    lengthTagName=nameAccountQuestion.length;
    isAnswer = true;
}

function reset() {
    $("#newComment").val("");
    $("#parentId").val(0);
}

function editComment(id) {
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        },
        url: "http://localhost:8080/user/findComment/" + id,
        success: function (data) {
            $("#newComment").val(data.comment);
            $("#parentId").val(data.parentId)
            localStorage.setItem("commentEdit", JSON.stringify(data));
            isEdit = true;
            setTimeout(function () {
                $("html, body").animate({
                    scrollTop: $("#newComment").offset().top
                }, 500);
            }, 500);
        },
        error: function (err) {
            console.log(err);
            alert("Error")
        }
    })
}

// Product Quantity
$('.choose_quantity').on('click', function () {
    var button = $(this);
    var oldValue = button.parent().parent().find('input').val();
    if (button.hasClass('btn-plus')) {
        var newVal = parseFloat(oldValue) + 1;
    } else {
        if (oldValue > 0) {
            var newVal = parseFloat(oldValue) - 1;
        } else {
            newVal = 0;
        }
    }
    button.parent().parent().find('input').val(newVal);
});

function getFeedback(idProduct) {
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        },
        url: "http://localhost:8080/user/getFeedbackByProduct/" + idProduct,
        success: function (data) {
            displayFeedback(data)
        },
        error: function (err) {
            console.log(err);
            alert("Error")
        }
    })
}

function displayFeedback(data) {
    let str = "";
    $("#countFeedback").text(`${'Reviews (' + data.length})`)
    for (let i = 0; i < data.length; i++) {
        str += `
                                <div class="media mb-4" id="${'feedback' + i}">
                                    <img src="${data[i].account.avatar}" alt="Image" class="rounded-circle mr-3 mt-1"
                                         style="width: 45px;">
                                    <div class="media-body">
                                        <h6>${data[i].account.fullName}<small> - <i>${data[i].dateFeedback}</i></small></h6>
                                        <div class="text-primary mb-2">
                                        `
        for (let j = 1; j <= 5; j++) {
            if (j <= data[i].point) {
                str += `<i class="fas fa-star"></i>`
            } else {
                str += `<i class="far fa-star"></i>`
            }
        }
        str += `                   </div>
                                        <p>${data[i].feedback}</p>
                                    </div>
                                </div>
        `
    }
    $("#feedbacks").html(str)
}

function saveFeedback() {
    let feedback = $("#feedback").val();
    let point = $("input[name=rating]:checked").val();
    if (account === null) {
        $("#notification").modal("show");
        $("#content_notification").text("Bạn chưa đăng nhập")
    } else if (feedback === "") {
        $("#notification").modal("show");
    } else {
        let object = {feedback, point, dateFeedback: new Date, product: product_detail, account: account,responded:true}
        $.ajax({
            type: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            },
            url: "http://localhost:8080/user/saveFeedback/",
            data: JSON.stringify(object),
            success: function () {
                getFeedback(product_detail.id)
            },
            error: function (err) {
                console.log(err);
                alert("Error")
            }
        })
    }
}

function checkAccountFeedback(){
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        },
        url: "http://localhost:8080/user/checkAccountFeedback/"+product_detail.id+"/"+account.id,
        success: function (data) {
            if(data===""){
                saveFeedback();
                getInvoiceDetail();
            }else{
                alert("Bạn chưa mua sản phẩm này")

            }
        },
        error: function (err) {
            console.log(err);
            alert("Error")
        }
    })
}

function getInvoiceDetail(){
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        },
        url: "http://localhost:8080/user/getInvoiceDetail/"+product_detail.id+"/"+account.id,
        success: function (data) {
            let invoiceDetail
            for(let i=0;i<data.length;i++){
                if(data[i].product.id===product_detail.id){
                    data[i].hasFeedback=true;
                    invoiceDetail=data[i];
                    break;
                }
            }
            updateStatusFeedback(invoiceDetail)
        },
        error: function (err) {
            console.log(err);
            alert("Error")
        }
    })
}

function updateStatusFeedback(data) {
    console.log(data)
    $.ajax({
        type: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        },
        url: "http://localhost:8080/user/updateStatusFeedback",
        data: JSON.stringify(data),
        success: function () {

        },
        error: function (err) {
            console.log(err);
            alert("Error")
        }
    })
}

function checkAccount(){
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        },
        url: "http://localhost:8080/user/checkAccount/"+product_detail.id+"/"+account.id,
        success: function (data) {
            if(data===""){
                alert("Bạn chưa mua sản phẩm này")
            }else{
                checkAccountFeedback()
            }
        },
        error: function (err) {
            console.log(err);
            alert("Error")
        }
    })
}


function addToCart() {
    let check=false;
    let orderDetails = JSON.parse(localStorage.getItem("orderDetails"));
    let quantity = $("#quantityProductOrder").val();
    let orderDetail = {quantity, product: product_detail}
    for(let i=0;i<orderDetails.length;i++){
        let productOld=JSON.stringify(orderDetails[i].product);
        let productNew=JSON.stringify(product_detail);
        if(productOld===productNew){
            check=true;
            let quantityCurrent=parseInt(orderDetails[i].quantity);
            orderDetails[i].quantity=parseInt(quantity)+quantityCurrent;

        }
    }
    if(check===false) {
        orderDetails.push(orderDetail);
    }
    localStorage.setItem("orderDetails",JSON.stringify(orderDetails));
    location.href = "/fontend/fontend/user/cart.html"
}