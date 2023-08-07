let orderDetails = JSON.parse(localStorage.getItem("orderDetails"))
let invoice = JSON.parse(localStorage.getItem("invoice"))
if (orderDetails === null) {
    orderDetails = []
}
if (invoice === null) {
    invoice = {total: 0}
}
let checkPay = true;
displayCart()
displayInvoice();


function displayCart() {
    let str = ""
    if (orderDetails.length > 0) {
        for (let i = 0; i < orderDetails.length; i++) {
            str += `
        <tr>
            <td class="text-left"><img src="${orderDetails[i].product.img}" alt="" style="width: 50px;"> ${orderDetails[i].product.name}</td>
            <td class="align-middle">${orderDetails[i].product.price}</td>
            <td class="align-middle">
              <div class="input-group quantity mx-auto" style="width: 100px;">
                                    <div class="input-group-btn">
                                        <button class="btn btn-sm btn-primary btn-minus choose_quantity" >
                                        <i class="fa fa-minus"></i>
                                        </button>
                                    </div>
                                    <input type="text" class="form-control form-control-sm bg-secondary border-0 text-center quantityProduct"  id="${'product' + i}" value="${orderDetails[i].quantity}">
                                    <div class="input-group-btn">
                                        <button class="btn btn-sm btn-primary btn-plus choose_quantity">
                                            <i class="fa fa-plus"></i>
                                        </button>
                                    </div>
              </div>
            </td>
            <td class="align-middle" class="priceProduct">${orderDetails[i].quantity * orderDetails[i].product.price}</td>
            <td class="align-middle"><button class="btn btn-sm btn-danger" onclick="deleteProduct(${i})"><i class="fa fa-times"></i></button></td>
        </tr>
        `
        }
    } else {
        str += `<h3 class="text-center">Chưa có sản phẩm nào trong giỏ hàng</h3>`
    }
    $("#cart").html(str);
}


function deleteProduct(index) {
    let totalOrderOld = invoice.total;
    let totalOrderNew = totalOrderOld - orderDetails[index].quantity * orderDetails[index].product.price
    invoice.total = totalOrderNew;
    orderDetails.splice(index, 1)
    localStorage.setItem("orderDetails", JSON.stringify(orderDetails));
    localStorage.setItem("invoice", JSON.stringify(invoice))
    displayCart();
    displayQuantityProductCart();
    displayInvoice()
}

function displayInvoice() {
    let str = "";
    console.log(orderDetails)
    for (let i = 0; i < orderDetails.length; i++) {
        str += `
        <div class="border-bottom pb-2">
                    <div class="d-flex justify-content-between mb-3">
                        <h6>${orderDetails[i].product.name}</h6>
                        <h6>${orderDetails[i].quantity * orderDetails[i].product.price}</h6>
                    </div>
        `
    }
    str += `
     <div class="pt-2">
        <div class="d-flex justify-content-between mt-2">
            <h5>Total</h5>
            <h5>${invoice.total}</h5>
        </div>
        <button class="btn btn-block btn-primary font-weight-bold my-3 py-3" onclick="checkAccount()">Proceed To Checkout</button>
     </div>
    `
    $("#invoice").html(str);
}


function checkProduct() {
    for (let i = 0; i < orderDetails.length; i++) {
        if (parseInt(orderDetails[i].quantity) > orderDetails[i].product.quantity) {
            let str = `
            <p>Sản phẩm</p><p>${orderDetails[i].product.name} <img src="${orderDetails[i].product.img}" width="250" height="100"></p>
            <p> không có đủ số lượng để đặt hàng</p>            `
            $("#notification").modal("show")
            $("#content_notification").html(str)
            checkPay = false;
            break;
        }
    }
}

function checkAccount() {
    checkProduct();
    if (checkPay === true) {
        let account = JSON.parse(localStorage.getItem("account"));
        if (account === null) {
            let str = `
            <h4 >Bạn chưa đăng nhập</h4>
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
    let newInvoice = {
        dateCreate: new Date,
        account: {
            id: JSON.parse(localStorage.getItem("account")).id
        },
        total: invoice.total,
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
            localStorage.removeItem("invoice")
            displayCart()
            displayInvoice()
        },
        error: function (err) {
            console.log(err);
            alert("Error")
        }
    })

}


$('.choose_quantity').on('click', function () {
    let button = $(this);
    let oldValue = button.parent().parent().find('input').val();
    if (button.hasClass('btn-plus')) {
        var newVal = parseFloat(oldValue) + 1;
    } else {
        if (oldValue > 0) {
            var newVal = parseFloat(oldValue) - 1;
        } else {
            newVal = 0;
        }
    }
    button.parent().parent().find('input').val(newVal);
});

