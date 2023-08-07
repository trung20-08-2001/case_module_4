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
                        <img class="img-fluid" style="width: 100%;height: 300px" src="${p.img}" alt="${p.name}">
                        <div class="product-action">
                            <a class="btn btn-outline-dark btn-square" onclick="addProductToCart(${p.id})"><i class="fa fa-shopping-cart"></i></a>
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
                        <a onclick="reviewStar(${p.id})" id="pointReview+${p.id}"></a>
                    </div>
                </div>
            </div>
        </div>`
    }
    for (let i = 0; i < arr.totalPages; i++) {
        if (i === arr.number) {
            str += `<button class="btn btn-secondary" onclick="showAllProduct(${i})" > ${i + 1}  </button>`
        } else
            str += `<button class="btn btn-light" onclick="showAllProduct(${i})" > ${i + 1}  </button>`
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
            localStorage.setItem("product_detail", JSON.stringify(data))
            location.href = "detail.html"
        },
        error: function (err) {
            console.log(err);
            alert("Error")
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

}

showCategory(0);

function categoryAtNavbar() {
    $.ajax({
        type: "GET",
        Accept: 'application/json',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        },
        url: "http://localhost:8080/user/categories",
        success: function (data) {
            getData(data)
        },
        error: function () {
        }
    })


    function getData(data) {
        let str = "";
        for (const c of data) {
            str += `<a class="nav-item nav-link" onclick="selectorCategory(${c.id})">${c.name}</a>`
        }
        $("#dropdown_category").html(str);
    }
}

categoryAtNavbar();

function selectorCategory(id) {
    localStorage.setItem("category", id);
    location.href = "/fontend/fontend/user/category.html"
}

function addProductToCart(idProduct) {
    let cart = localStorage.getItem("cart");
    let array = JSON.parse(cart);
    if (array === null) {
        array = [];
        localStorage.setItem("cart", JSON.stringify(array))
    }
    $.ajax({
        type: "GET",
        Accept: 'application/json',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        },
        url: "http://localhost:8080/user/detail?idProduct=" + idProduct,
        success: function (data) {
            array.push(data);
            localStorage.setItem("cart", JSON.stringify(array));
        },
        error: function () {
        }
    })
}

