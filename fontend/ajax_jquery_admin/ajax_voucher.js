getAllVoucher();
function getAllVoucher(){
    $.ajax({
        type: "get",
        Accept: 'application/json',
        Content: 'application/json',
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        url: "http://localhost:8080/vouchers/getAllVoucher",
        success: function (listVoucher) {
            console.log(listVoucher);
            showAllVoucher(listVoucher);
        },
        error: function (err) {
            console.log(err)
        }
    })
}
function showAllVoucher(listVoucher){
    let str=``
    for (const v of listVoucher) {
        str +=`   <tr>
                <td>${v.id}</td>
                <td>${v.name}</td>
                <td>${v.rate}</td>
                <td><button type="button" onclick="deleteVoucher(${v.id})" class="btn btn-primary" >xóa</button>
                </td>
            </tr>`
    }
    $("#showVoucher").html(str);
}

function deleteVoucher(id){
    $.ajax({
        type: "post",
        Accept: 'application/json',
        Content: 'application/json',
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        url: "http://localhost:8080/vouchers/deleteVoucher/" + id,
        success: function (mess) {
            alert("Xóa thành công")
            getAllVoucher();
        },
        error: function (err) {
            console.log(err)
        }
    })
}
function addVoucher(){
    let name = $("#nameVoucher").val();
    let rate = $("#rate").val();
    let voucher={
        name: name,
        rate: rate
    }
    $.ajax({
        type: "post",
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token"),
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        url: "http://localhost:8080/vouchers/addVoucher",
        data: JSON.stringify(voucher),
        success: function (mes) {
            alert("thêm thành công");
            getAllVoucher();
        },
        error: function (err) {
            console.log(err)
        }

    })
}