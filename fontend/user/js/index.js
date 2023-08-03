function showAllProduct(page) {
    $.ajax({
        type: "get",
        Accept: 'application/json',
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        url: "http://localhost:8080/user/show?page=" + page,
        success: function (data) {
            showProduct(data.content);
        },
        error: function (err) {
            console.log(err)
        }
    })

}

showAllProduct(0)

function showProduct(arr) {
    let str = "";
    for (const p of arr) {
        str += `
        <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div class="product-item bg-light mb-4">
                <div class="product-img position-relative overflow-hidden">
                        <img class="img-fluid" style="width: 100%;height: 300px" src="${p.img}" alt="${p.name}">
                        <div class="product-action">
                            <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-shopping-cart"></i></a>
                            <a class="btn btn-outline-dark btn-square" href=""><i class="far fa-heart"></i></a>
                            <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-sync-alt"></i></a>
                            <a class="btn btn-outline-dark btn-square" onclick="detail(${p.id})"><i class="fa fa-search"></i></a>
                        </div>
                </div>
                <div class="text-center py-4">
                    <a class="h6 text-decoration-none text-truncate" href="detail.html">${p.name}</a>
                    <div class="d-flex align-items-center justify-content-center mt-2">
                        <h5>${p.price}</h5><h6 class="text-muted ml-2"><del>${p.price}</del></h6>
                    </div>
                    <div class="d-flex align-items-center justify-content-center mb-1">
                        <small class="fa fa-star text-primary mr-1"></small>
                        <small class="fa fa-star text-primary mr-1"></small>
                        <small class="fa fa-star text-primary mr-1"></small>
                        <small class="fa fa-star text-primary mr-1"></small>
                        <small class="fa fa-star text-primary mr-1"></small>
                        <a onclick="reviewStar(${p.id})" id="pointReview+${p.id}">a</a>
                    </div>
                </div>
            </div>
        </div>`
    }
    $("#featured_product").html(str);
}

function reviewStar(number) {
    $.ajax({
        type: "get",
        Accept: 'application/json',
        headers: {

            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        url: "http://localhost:8080/user/reviewStar?idProduct=" + number,
        success: function (data) {
            document.getElementById("pointReview" + number).innerHTML = data;
        },
        error: function (err) {
        }
    })
}

function detail(id) {
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        },
        url: "http://localhost:8080/user/findProductById/" + id,
        success: function (data) {
            displayDetail(data);
        },
        error: function (err) {
            console.log(err);
            alert("Error")
        }
    })

}


function displayDetail(product) {
    $('head').append('<link rel="stylesheet" href="/fontend/fontend/user/css/detail.css">')
    let str = `
    <!-- Shop Detail Start -->
<div class="container-fluid pb-5">
    <div class="row px-xl-5">
        <div class="col-lg-5 mb-30">
            <div id="product-carousel" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner bg-light" id="slide_image">
                    <div class="carousel-item active" id="img_active">
                        <img class="w-100" style="height: 470px" src="${product.img}" alt="${product.name}">
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
                <h3>${product.name}</h3>
                <div class="d-flex mb-3">
                    <div class="text-primary mr-2">
                        <small class="fas fa-star"></small>
                        <small class="fas fa-star"></small>
                        <small class="fas fa-star"></small>
                        <small class="fas fa-star-half-alt"></small>
                        <small class="far fa-star"></small>
                    </div>
                </div>
                <h3 class="font-weight-semi-bold mb-4">${product.price}</h3>
                <p class="mb-4">Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit
                    clita ea. Sanc ipsum et, labore clita lorem magna duo dolor no sea
                    Nonumy</p>
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
                        <div class="input-group-btn">
                            <button class="btn btn-primary btn-minus">
                                <i class="fa fa-minus"></i>
                            </button>
                        </div>
                        <input type="text" class="form-control bg-secondary border-0 text-center" value="1">
                        <div class="input-group-btn">
                            <button class="btn btn-primary btn-plus">
                                <i class="fa fa-plus"></i>
                            </button>
                        </div>
                    </div>
                    <button class="btn btn-primary px-3"><i class="fa fa-shopping-cart mr-1"></i> Add To
                        Cart
                    </button>
                </div>
                <div class="d-flex pt-2">
                    <strong class="text-dark mr-2">Share on:</strong>
                    <div class="d-inline-flex">
                        <a class="text-dark px-2" href="">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a class="text-dark px-2" href="">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a class="text-dark px-2" href="">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a class="text-dark px-2" href="">
                            <i class="fab fa-pinterest"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row px-xl-5">
        <div class="col">
            <div class="bg-light p-30">
                <div class="nav nav-tabs mb-4">
                    <a class="nav-item nav-link text-dark" data-toggle="tab" href="#tab-pane-1">Chi tiết sản
                        phẩm</a>
                    <a class="nav-item nav-link text-dark active" data-toggle="tab" href="#tab-pane-2">Bình luận</a>
                    <a class="nav-item nav-link text-dark" data-toggle="tab" href="#tab-pane-3">Reviews (0)</a>
                </div>
                <div class="tab-content">
                    <div class="tab-pane fade show " id="tab-pane-1">
                        <h4 class="mb-3">Product Description</h4>
                        <p>${product.description}</p>
                    </div>
                    <div class="tab-pane fade show bootdey active" id="tab-pane-2">
                        <div class="col-md-12 bootstrap snippets">
                            <div class="panel">
                                <div class="panel-body">
                                    <textarea class="form-control rounded" rows="2"
                                              placeholder="Nhập nội dung comment của bạn"></textarea>
                                    <div class="mar-top clearfix">
                                        <button class="btn btn-sm btn-primary pull-right" type="submit">Xác nhận</button>
                                    </div>
                                </div>
                            </div>
                            <div class="panel">
                                <div class="panel-body">
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
                                            <hr>
                                            <div id="commentAnswer"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="tab-pane-3">
                        <div class="row">
                            <div class="col-md-6">
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
                                <small>Your email address will not be published. Required fields are marked *</small>
                                <div class="d-flex my-3">
                                    <p class="mb-0 mr-2">Your Rating * :</p>
                                    <div class="text-primary">
                                        <i class="far fa-star"></i>
                                        <i class="far fa-star"></i>
                                        <i class="far fa-star"></i>
                                        <i class="far fa-star"></i>
                                        <i class="far fa-star"></i>
                                    </div>
                                </div>
                                <form>
                                    <div class="form-group">
                                        <label for="message">Your Review *</label>
                                        <textarea id="message" cols="30" rows="5" class="form-control"></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label for="name">Your Name *</label>
                                        <input type="text" class="form-control" id="name">
                                    </div>
                                    <div class="form-group">
                                        <label for="email">Your Email *</label>
                                        <input type="email" class="form-control" id="email">
                                    </div>
                                    <div class="form-group mb-0">
                                        <input type="submit" value="Leave Your Review" class="btn btn-primary px-3">
                                    </div>
                                </form>
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
    getListProductDetail(product.id)
    document.body.scrollIntoView(true)
}

function displaySlideProduct(data) {
    let str = "";
    for (const p of data) {
        str += `
        <div class="carousel-item">
            <img class="w-100" style="height: 470px"  src="${p.image}" alt="${p.product.name}">
        </div>
        `
    }
    $("#slide_image").append(str)
}


function getListProductDetail(id) {
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        },
        url: "http://localhost:8080/user/getListProductDetail/" + id,
        success: function (data) {
            displaySlideProduct(data);
        },
        error: function (err) {
            console.log(err);
            alert("Error")
        }
    })
}