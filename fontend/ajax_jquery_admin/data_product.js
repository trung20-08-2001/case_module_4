getAllCategory();
getAllShopActive();

function getAllShopActive(){
    $.ajax({
        type: "get",
        Accept: 'application/json',
        Content: 'application/json',
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
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
        type: "get",
        Accept: 'application/json',
        Content: 'application/json',
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
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
                   <td><img src="${c.image}" alt="${c.name}"style="height: 25px;width: 25px"></td>
                   <td>${c.name}</td>
                 </tr>`
    }
    $("#categories").html(str);
}

function showProductPending(id){
    $.ajax({
        type: "post",
        Accept: 'application/json',
        Content: 'application/json',
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
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
                    <td><img src="${p.img}" alt="${p.name}" style="width: 25px;height: 25px"></td>
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
        type: "post",
        Accept: 'application/json',
        Content: 'application/json',
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
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
        type: "post",
        Accept: 'application/json',
        Content: 'application/json',
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
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
function addCategory(){
    let name =$("#nameCategory").val();
    let img =$("#imgCategory").val();
    let category={
        name: name,
        image: img
    }
    $.ajax({
        type: "post",
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token"),
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        url: "http://localhost:8080/categories/addCategory",
        data: JSON.stringify(category),
        success: function (mes) {
            alert("thêm thành công");
          getAllCategory();
        },
        error: function (err) {
            console.log(err)
        }

    })
resetModal();
}
function resetModal(){
    $("#nameCategory").val("");
    $("#imgCategory").val("");
}