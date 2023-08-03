function showAllProduct() {
    let page=0;
    $.ajax({
        type: "get",
        Accept: 'application/json',
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        url: "http://localhost:8080/user/show?page=" + page,
        success: function (data) {
            showProduct(data.content);
            console.log(data);
        },
        error: function (err) {
        }
    })

}
showAllProduct();
function showProduct(arr) {
    let str = '';
    for (const p of arr) {
        str += `<div class="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div class="product-item bg-light mb-4">
                <div class="product-img position-relative overflow-hidden">
                    <img class="img-fluid w-100" src="${p.img}" >
                        <div class="product-action">
                            <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-shopping-cart"></i></a>
                            <a class="btn btn-outline-dark btn-square" href=""><i class="far fa-heart"></i></a>
                            <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-sync-alt"></i></a>
                            <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-search"></i></a>
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
    document.getElementById("listProduct").innerHTML = str;
}

function reviewStar(number) {
    $.ajax({
        type:"get",
        Accept: 'application/json',
        headers: {

            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        url: "http://localhost:8080/user/reviewStar?idProduct=" + number,
        success: function (data) {
            document.getElementById("pointReview"+number).innerHTML = data;
        },
        error: function (err) {
        }
    })
}