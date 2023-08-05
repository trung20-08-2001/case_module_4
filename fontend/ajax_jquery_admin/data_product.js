getAllCategory();
getAllShopActive();

function getAllShopActive(){
    $.ajax({
        type:"GET",
        header:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'

        },
        url: "http://localhost:8080/admin/findShopAccount",
        success: function (shopList){
            console.log(shopList)
            showShopSelect(shopList)
        },
        error: function (err){
            console.log(err)
        }
    })
}

function showShopSelect(shopActive){
    let str =``;
    for (const s of shopActive) {
        str +=`<option value="${s.id}">${s.nameShop}</option>`
    }
    $("#idShop").html(str);
}


function getAllCategory(){
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
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
                   <td><img src="${c.image}" alt="${c.name}"></img> </td>
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
            getAllCategory();
            getAllShopActive();
            showProductPendingByShop(productPendingByIdShop);
        },
        error: function (err) {
            console.log(err)
        }
    })
    // window.location.href ="../viewsAdmin/data_table.html";

}

function showProductPendingByShop(productPending){
    let str =``;
    let nameShop = ``;
    for (const p of productPending) {
        str +=`<tr>
                    <td>${p.id}</td>
                    <td>${p.category.name}</td>
                    <td>${p.name}</td>
                    <td><img src="${p.img}" alt="${p.name}" ></img></td>
                    <td>${p.account.nameShop}</td>
                     <td>${p.price}</td>
                    <td>${p.quantity}</td>
                    <td>
                    <button type="button" onclick="refuseProduct(${p.id})"  class="status_btn" >Từ chối</button>
                    <button type="button" onclick="confirmProduct(${p.id})" class="status_btn" >xác nhận</button>
                    </td>
               </tr>`;
        nameShop=`<h3>Shop: ${p.account.nameShop}</h3>`;
    }
    $("#nameShop").html(nameShop);
    $("#productPendingByIdShop").html(str);
}
function refuseProduct(id){
    $.ajax({
        type: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/products/refuseProduct/" +  id,
        success: function (mess) {
            alert(mess);
            getAllCategory();
            getAllShopActive();
        },
        error: function (err) {
            console.log(err)
        }
    })
}

function confirmProduct(id){
    $.ajax({
        type: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/products/confirmProduct/" +  id,
        success: function (mess) {
            alert(mess);
            getAllCategory();
            getAllShopActive();
        },
        error: function (err) {
            console.log(err)
        }
    })
}