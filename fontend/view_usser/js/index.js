function showAllProduct() {
    $.ajax({
        type: "get",
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        url: "http://localhost:8080/user/show?page=" + page,
        success: function (data) {
            showProduct(data);
        },
        error: function (err) {
        }
    })
}

showAllProduct();

function showProduct(arr) {
    let str = "";
    for (const p of arr.content) {
        str += `<div class="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div class="product-item bg-light mb-4">
                <div class="product-img position-relative overflow-hidden">
                    <img class="img-fluid w-100" src="${p.img}" alt="">
                        <div class="product-action">
                            <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-shopping-cart"></i></a>
                            <a class="btn btn-outline-dark btn-square" href=""><i class="far fa-heart"></i></a>
                            <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-sync-alt"></i></a>
                            <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-search"></i></a>
                        </div>
                </div>
                <div class="text-center py-4">
                    <a class="h6 text-decoration-none text-truncate" href="">${p.name}</a>
                    <div class="d-flex align-items-center justify-content-center mt-2">
                        <h5>$123.00</h5><h6 class="text-muted ml-2"><del>${p.price}</del></h6>
                    </div>
                    <div class="d-flex align-items-center justify-content-center mb-1">
                        <small class="fa fa-star text-primary mr-1"></small>
                        <small class="fa fa-star text-primary mr-1"></small>
                        <small class="fa fa-star text-primary mr-1"></small>
                        <small class="fa fa-star text-primary mr-1"></small>
                        <small class="fa fa-star text-primary mr-1"></small>
                        <small onmousemove="reviewStar(${p.id})" id="pointReview"></small>
                    </div>
                </div>
            </div>
        </div>`
    }
}

function reviewStar(number) {
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        url: "http://localhost:8080/user/reviewStar?idProduct=" + number,
        success: function (data) {
            document.getElementById("pointReview").innerHTML=data;
        },
        error: function (err) {
        }
    })
}