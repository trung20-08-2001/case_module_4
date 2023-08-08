let orderDetails = JSON.parse(localStorage.getItem("orderDetails"))
if (orderDetails === null) {
    orderDetails = []
}

let checkQuantityProduct = true;

showCart()

function showCart() {
    let str = "";
    let subtotal=0;
    if(orderDetails.length>0) {
        for (const o of orderDetails) {
            str += `<tr>
            <td class="text-left"><img src="${o.product.img}" alt="${o.product.img}" style="width: 50px;"> ${o.product.name}</td>
            <td class="align-middle">${o.product.price}</td>
            <td class="align-middle">
                <div class="input-group quantity mx-auto" style="width: 100px;">
                    <div class="input-group-btn">
                        <button class="btn btn-sm btn-primary btn-minus" onclick="minus(${o.product.id},${o.product.price})" >
                            <i class="fa fa-minus" ></i>
                        </button>
                    </div>
                    <input type="text" class="form-control form-control-sm bg-secondary border-0 text-center" value="${o.quantity}" id="${o.product.id}">
                        <div class="input-group-btn">
                            <button class="btn btn-sm btn-primary btn-plus" onclick="plus(${o.product.id},${o.product.price})">
                                <i class="fa fa-plus"></i>
                            </button>
                        </div>
                </div>
            </td>
            <td class="align-middle" id="${o.product.id}t" >${o.product.price}</td>
            <td class="align-middle">
                   <a onclick="buttonRemove(${orderDetails.indexOf(o.product)})"> <button class="btn btn-sm btn-danger" ><i class="fa fa-times"></i></button><a>
            </td>
        </tr>`
            subtotal += o.product.price;
        }
        let shipping = subtotal / 10;
        let total = subtotal + shipping;
        $("#total").html(total);
        $("#subtotal").html(subtotal);
        $("#shipping").html(shipping);
    }else{
        str += `<h3 class="text-center">Chưa có sản phẩm nào trong giỏ hàng</h3>`
    }
    $("#cart").html(str);
}

function buttonRemove(id) {
    orderDetails.splice(id, 1);
    localStorage.setItem("orderDetails",JSON.stringify(orderDetails));
    showCart()
}

function plus(id, price) {
    let tag = document.getElementById(id);
    let number = +document.getElementById(id).value;
    tag.value = number + 1;
    let total = (number + 1) * price;
    document.getElementById(id + "t").innerHTML = total;
    calculation(price);
    let quantity=parseInt(tag.value)
    editQuantityProduct(id,quantity)
}

function minus(id,price) {
    let tag = document.getElementById(id);
    let number = +document.getElementById(id).value;
    if (number > 1) {
        tag.value = number - 1;
        let total = (number -1) * price;
        document.getElementById(id + "t").innerHTML = total
    }
    calculation(-price)
    let quantity=parseInt(tag.value)
    editQuantityProduct(id,quantity)
}


function editQuantityProduct(idProduct,quantity){
    for(let i=0;i<orderDetails.length;i++){
        if(orderDetails[i].product.id===idProduct){
            orderDetails[i].quantity=quantity;
            break;
        }
    }
    localStorage.setItem("orderDetails",JSON.stringify(orderDetails))
}
function calculation(magicNumber) {
    let subtotal=+document.getElementById("subtotal").textContent;
    let total=+document.getElementById("total").textContent;
    let shipping=+document.getElementById("shipping").textContent;
    subtotal+=magicNumber;
    shipping+=(magicNumber)/10;
    total+=magicNumber+(magicNumber)/10;
    if(subtotal>0) {
        $("#total").html(total);
        $("#subtotal").html(subtotal);
        $("#shipping").html(shipping);
    }
}

function checkPay() {
    for (let i = 0; i < orderDetails.length; i++) {
        if (parseInt(orderDetails[i].quantity) > orderDetails[i].product.quantity) {
            let str = `
            <p>Sản phẩm</p><p>${orderDetails[i].product.name} <img src="${orderDetails[i].product.img}" width="250" height="100"></p>
            <p> không có đủ số lượng để đặt hàng</p>            `
            $("#notification").modal("show")
            $("#content_notification").html(str)
            checkQuantityProduct = false;
            break;
        }else {
            checkQuantityProduct=true;
        }
    }
    if (checkQuantityProduct === true) {
        let account = JSON.parse(localStorage.getItem("account"));
        if (account === null) {
            let str = `
            <h4>Bạn chưa đăng nhập</h4>
            <a  class="btn btn-primary" href="/fontend/fontend/views/signin.html">Đăng nhập</a>
            `
            $("#notification").modal("show")
            $("#content_notification").html(str)
        } else {
            let str = `
            <label for="address">Nhập địa chỉ nhận hàng của bạn:</label>
            <textarea type="text" class="form-control" id="address" placeholder="Enter address" name="address" rows="6"></textarea>      
            <button type="button" class="btn btn-primary"  onclick="pay()">Submit</button>
            `
            $("#notification").modal("show")
            $("#content_notification").html(str)
        }
    }
}

function pay() {
    let address = $("#address").val();
    if (address === "") {
        $("#content_notification").html(`
        <label for="address">Nhập địa chỉ nhận hàng của bạn:</label>
            <textarea type="text" class="form-control" id="address" placeholder="Enter address" name="address" rows="6"></textarea>   
            <p style="color: red">Bạn chưa nhập địa chỉ</p>   
            <button type="button" class="btn btn-primary"  onclick="pay()">Submit</button>
        `)
        $("#notification").modal("show")
    } else {
        saveInvoice();
    }
}

function saveInvoice() {
    let receivingAddress = $("#address").val();
    let total=$("#total").text()
    let newInvoice = {
        dateCreate: new Date,
        account: {
            id: JSON.parse(localStorage.getItem("account")).id
        },
        total:total,
        receivingAddress: receivingAddress,
        status: {
            id: 3
        }
    }
    $.ajax({
        type: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        },
        url: "http://localhost:8080/shop/saveInvoice",
        data: JSON.stringify(newInvoice),
        success: function (data) {
            saveInvoiceDetail(data);
        },
        error: function (err) {
            console.log(err);
            alert("Error")
        }
    })
}

function saveInvoiceDetail(data) {
    for (let i = 0; i < orderDetails.length; i++) {
        orderDetails[i].invoice = data;
    }
    $.ajax({
        type: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        },
        url: "http://localhost:8080/shop/saveInvoiceDetail",
        data: JSON.stringify(orderDetails),
        success: function () {
            $("#content_notification").html("Đơn hàng của đang chờ xác nhận")
            $("#notification").modal("show")
            localStorage.removeItem("orderDetails")
            orderDetails = []
            showCart();
        },
        error: function (err) {
            console.log(err);
            alert("Error")
        }
    })
}


