let account = JSON.parse(localStorage.getItem("account"))

function findAllInvoice(page) {
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        url: "http://localhost:8080/shop/shop-invoice?page="+page+"&id=" + account.id,
        success: function (data) {
            console.log(data.content)
            displayInvoiceTable(data.content)
        },
        error: function (err) {
            console.log(err);
        }
    })
}

findAllInvoice(0);

function displayInvoiceTable(arr) {
    let str = ""
    for (const i of arr) {
        str += `<tr>
                                                <td class="ps-1">
                                                    <a href="#!">${i.id}</a>
                                                </td>
                                                <td>${i.account.fullName}</td>
                                                <td>${i.dateCreate}</td>
                                                <td>${i.receivingAddress}</td>
                                                <td>${i.total}</td>
                                                <td><span class="badge badge-info-soft">${i.status.name}</span></td>
                                                <td>
                                                        <a class="btn btn-icon btn-sm btn-ghost rounded-circle"
                                                           href="#!" role="button"aria-expanded="false">
                                                            <i onclick="confirmStatusInvoice(${i.id})" class="fa fa-check" style="color:green"></i>
                                                        </a>
                                                        
                                                        <a class="btn btn-icon btn-sm btn-ghost rounded-circle"
                                                           href="#!" role="button" >
                                                            <i class="fa fa-close" style="color:red"></i>
                                                        </a>
                                                </td>
                                            </tr>
        `
    }
    $("#invoices").html(str)
}

function confirmStatusInvoice(id) {
    $.ajax({
        type: "POST",
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token"),
            'Accept': 'text/plain',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/shop/confirm-status/" + id,
        success: function (data) {
            console.log("complete")
            findAllInvoice(0);
        },
        error: function (err) {
            console.log(err)
        }
    })
}



