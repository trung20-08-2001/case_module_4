function category() {
   let idCategory= localStorage.getItem("category");
    $.ajax({
        type: "get",
        Accept: 'application/json',
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        url: "http://localhost:8080/user/listCategory?id=" + idCategory,
        success: function (data) {
            showListProductCategory(data);
        },
        error: function (err) {
            alert(err)
        }
    })
  function showListProductCategory(arr) {
      let str = "";
      if(arr.length>0) {
          for (const p of arr) {
              str += `  <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div class="product-item bg-light mb-4">
                <div class="product-img position-relative overflow-hidden">
                        <img class="img-fluid" style="width: 100%;height: 300px" src="${p.img}" alt="${p.name}">
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
      }else{
          str+=`<h1>Danh mục này tạm thời hết hàng</h1>`
      }

      $("#productByCategory").html(str);
  }
}
category()

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