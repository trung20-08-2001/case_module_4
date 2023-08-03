getAllShopActive();
getAllShopBlock();
getAllShopPending();

//hiển thị tất cả các shop đang chạy
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
            showShop(shopList)
        },
        error: function (err){
            console.log(err)
        }
    })
}
function showShop(shopList){
    let str = ``;

    for (const s of shopList) {
        str += `<tr>
                   <td>${s.id}</td>
                   <td>${s.avatarShop}</td>
                   <td>${s.fullName}</td>
                   <td>${s.nameShop}</td>
                   <td>${s.phone}</td>
                   <td>${s.address}</td>
                   <td>${s.email}</td>
                   <td>${s.status.name}</td>
                   <td>               
                       <button type="button" onclick="blockShop(${s.id})"  style="width: 50px">block</button>                  
                     </td>
                </tr>`
    }
    $("#showShop").html(str);
}

// hiện thị select




// hiển thị các shop bị khóa
function getAllShopBlock(){
    $.ajax({
        type:"GET",
        header:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'

        },
        url: "http://localhost:8080/admin/findShopBlock",
        success: function (shopBlock){
            console.log(shopBlock)
            showShopBlock(shopBlock)

        },
        error: function (err){
            console.log(err)
        }
    })
}

function showShopBlock(shopBlock){
    let str = ``;

    for (const sb of shopBlock) {
        str += `<tr>
                   <td>${sb.id}</td>
                   <td>${sb.avatarShop}</td>
                   <td>${sb.fullName}</td>
                   <td>${sb.nameShop}</td>
                   <td>${sb.phone}</td>
                   <td>${sb.address}</td>
                   <td>${sb.email}</td>
                   <td>${sb.status.name}</td>
                   <td>               
                       <input type="button" onclick="activeShop(${sb.id})" class="action_btn mr_10" value="Active" style="width: 50px">                  
                     </td>
                </tr>`
    }
    $("#showShopBlock").html(str);
}


// hiển thị các shop chờ duyệt
function getAllShopPending(){
    $.ajax({
        type:"GET",
        header:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'

        },
        url: "http://localhost:8080/admin/shopPending",
        success: function (shopPending){
            console.log(shopPending)
            showShopPending(shopPending)

        },
        error: function (err){
            console.log(err)
        }
    })
}

function showShopPending(shopPending){
    let str = ``;

    for (const sp of shopPending) {
        str += `<tr>
                   <td>${sp.id}</td>
                   <td>${sp.avatarShop}</td>
                   <td>${sp.fullName}</td>
                   <td>${sp.nameShop}</td>
                   <td>${sp.phone}</td>
                   <td>${sp.address}</td>
                   <td>${sp.email}</td>
                   <td>${sp.status.name}</td>
                   <td>               
                       <input type="button" onclick="activeShop(${sp.id})" class="action_btn mr_10" value="Active" style="width: 50px">                  
                     </td>
                </tr>`
    }
    $("#showShopPending").html(str);
}




// khóa shop
function blockShop(id){
    let ids = id;
    window.location.href="../viewsAdmin/admin_list.html";
    $.ajax({
        type: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/admin/block/" + ids,
        success: function (mess) {
        },
        error: function (err) {
            console.log(err);
        }
    })
}





// duyệt shop
function activeShop(id) {
    let ids = id;
    window.location.href="../viewsAdmin/admin_list.html";
    $.ajax({
        type: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/admin/activeShop/" + id,
        success: function (mess) {
            window.location.href="../viewsAdmin/admin_list.html";
        },
        error: function (err) {
            console.log(err);
        }
    })
}

