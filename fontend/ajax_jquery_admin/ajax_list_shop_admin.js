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
            showProductPending(shopList)
        },
        error: function (err){
            console.log(err)
        }
    })
}
function showShop(shopList){
    let str = ``;

    for (const s of shopList) {
        let accShop=JSON.stringify(s);
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
                       <button type="button" onclick="blockShop(${accShop})" class="action_btn mr_10"  style="width: 50px">block</button>                  
                     </td>
                </tr>`
    }
    $("#showShop").html(str);
}

// hiện thị select
function showProductPending(shopActive){
    let str =``;
    for (const s of shopActive) {
        str +=`<option value="${s.id}">${s.nameShop}</option>`
    }
    $("#idShop").html(str);
}




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
        let shopBlock=JSON.stringify(sb);
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
                       <input type="button" onclick="activeShop(${shopBlock})" class="action_btn mr_10" value="Active" style="width: 50px">                  
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
        let shopPending=JSON.stringify(sp);
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
                       <input type="button" onclick="activeShop(${shopPending})" class="action_btn mr_10" value="Active" style="width: 50px">                  
                     </td>
                </tr>`
    }
    $("#showShopPending").html(str);
}




// khóa shop
function blockShop(accShop){
    let obj = JSON.parse(accShop)
    console.log(obj);
    $.ajax({
        type: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/admin/block",
        data: JSON.stringify(obj),
        success: function (mess) {
            getAllShopActive();
        },
        error: function (err) {
            console.log(err);
        }
    })
}





// duyệt shop
function activeShop(shop) {
  let  obj = JSON.parse(shop);
    $.ajax({
        type: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/admin/block",
        data: JSON.stringify(obj),
        success: function (mess) {
            getAllShopBlock();
            getAllShopPending();
        },
        error: function (err) {
            console.log(err);
        }
    })
}

