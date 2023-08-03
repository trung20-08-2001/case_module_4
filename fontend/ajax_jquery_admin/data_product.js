getAllCategory();
function getAllCategory(){
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json'
        },
        url: "http://localhost:8080/categories",
        success: function (categoryList) {
            showAllCategory(categoryList)
        },
        error: function (err) {
            console.log(err)
        }
    })
}
function showAllCategory(categories){
     let str=``;
    for (const c of categories) {
        str +=`  <tr>
                   <td>${c.id}</td>
                   <td>${c.image} </td>
                   <td>${c.name}</td>
                 </tr>`
    }
    $("#categories").html(str);
}

function showProductPending(id){
    $.ajax({
        type: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/products/productPending/" +  id,
        success: function (productPendingByIdShop) {
            showProductPendingByShop(productPendingByIdShop)
        },
        error: function (err) {
            console.log(err)
        }
    })
}

function showProductPendingByShop(productPending){
    let str =``;
    for (const p of productPending) {
        str +=`<tr>
                                            <td>id</td>
                                            <td>tên thể loại</td>
                                            <td>tên sản phẩm</td>
                                            <td>giá</td>
                                            <td>số lượng đăng bán</td>
                                            <td>giá 1 sản phẩm</td>
                                            <td><input type="button"  class="status_btn" value="xác nhận"></input></td>
                                        </tr>`
    }
}