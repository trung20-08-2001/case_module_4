
let account = JSON.parse(localStorage.getItem("account"));

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
                        <img class="img-fluid" onclick="detail(${p.id})" style="width: 100%;height: 300px" src="${p.img}" alt="${p.name}">
                </div>
                <div class="text-center py-4">
                    <a class="h6 text-decoration-none text-truncate" onclick="detail(${p.id})">${p.name}</a>
                    <div class="d-flex align-items-center justify-content-center mt-2">
                        <h5>${p.price}</h5><h6 class="text-muted ml-2"><del>${p.price}</del></h6>
                    </div>
                    <div class="d-flex align-items-center justify-content-center mb-1">
                        <small class="fa fa-star text-primary mr-1"></small>
                        <small class="fa fa-star text-primary mr-1"></small>
                        <small class="fa fa-star text-primary mr-1"></small>
                        <small class="fa fa-star text-primary mr-1"></small>
                        <small class="fa fa-star text-primary mr-1"></small>
                        <a onclick="reviewStar(${p.id})" id="pointReview+${p.id}"></a>
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


function showCategory(Page) {
    $.ajax({
        type: "GET",
        Accept: 'application/json',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        },
        url: "http://localhost:8080/user/category?page=" + Page,
        success: function (data) {
            getData(data)
        },
        error: function () {
        }
    })
}

function getData(data) {
    let str = "";
    for (const c of data.content) {
        str += `<div class="col-lg-3 col-md-4 col-sm-6 pb-1">
                <a class="text-decoration-none" onclick="selectorCategory(${c.id})">
                    <div class="cat-item d-flex align-items-center mb-4">
                        <div class="overflow-hidden" style="width: 100px; height: 100px;">
                            <img class="img-fluid" src="${c.image}" alt="${c.name}">
                        </div>
                        <div class="flex-fill pl-3">
                            <h6>${c.name}</h6>
                            <small class="text-body">100 Products</small>
                        </div>
                    </div>
                </a>
            </div>`
    }
    for (let i = 0; i < data.totalPages; i++) {
        if (i === data.number) {
            str += `<button class="btn btn-secondary" onclick="showCategory(${i})" > ${i + 1}  </button>`
        } else
            str += `<button class="btn btn-light" onclick="showCategory(${i})" > ${i + 1}  </button>`
    }
    $("#category").html(str);
}


showCategory(0);

function addProductToCart(idProduct) {
    let arr = localStorage.getItem("cart");
    if (arr === null) {
         arr = [];
        localStorage.setItem("cart", arr)
    }
    alert(product.id);
    $.ajax({
        type: "GET",
        Accept: 'application/json',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        },
        url: "http://localhost:8080/user/detail?idProduct=" + idProduct,
        success: function (data) {
            arr.push(data);
        },
        error: function () {
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
            localStorage.setItem("product_detail", JSON.stringify(data))
            location.href = "/fontend/fontend/user/detail.html"
        },
        error: function (err) {
            console.log(err);
            alert("Error")
        }
    })
}