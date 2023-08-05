const salesData = {
    labels: [], //lưu tháng
    data: [],   //lưu doanh số theo tháng
};


// Hàm để cập nhật biểu đồ khi có dữ liệu mới từ server

function updateChart(year) {
    let byYear= "";
    $.ajax({
        type: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/admin/revenues/revenueByYear/" + year,
        success: function (revenueByYear) {
            console.log(revenueByYear)
            // Xóa dữ liệu cũ trong biến salesData
            salesData.labels = [];
            salesData.data = [];

            for (const record of revenueByYear) {
                salesData.labels.push(record.month);
                salesData.data.push(record.revenue);
                byYear = record.year;
            }

            // Cập nhật biểu đồ
            updateLineChart(byYear);
        },
        error: function (err) {
            console.log(err);
        }
    });
}

// Hàm để cập nhật biểu đồ đường
function updateLineChart(byYear) {
    const ctx = document.getElementById('lineChart').getContext('2d');
    const lineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: salesData.labels,
            datasets: [{
                label: 'Doanh số năm ' + byYear,
                data: salesData.data,
                borderColor: 'rgb(75, 192, 192)',
                borderWidth: 2,
                fill: false,
            }],
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
function getRevenueByMonthMax(year){
    $.ajax({
        type:"POST",
        header:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/admin/revenues/revenueMonthMax/" + year,
        success: function (revenueMonthMax){
            console.log(revenueMonthMax)
            showRevenueByMonthMax(revenueMonthMax)

        },
        error: function (err){
            console.log(err)
        }
    })
}
function showRevenueByMonthMax(revenueMonthMax){
    let revenueMonth =``;
    revenueMonth =`<h4>Tháng ${revenueMonthMax.month} </h4>
                    <h4>Doanh thu ${revenueMonthMax.revenue} $</h4>
                    <p>Doanh thu tháng cao nhất trong năm</p>` ;
    $("#revenueMonthMax").html(revenueMonth);
}

// Gọi hàm cập nhật biểu đồ khi trang được tải lần đầu
const currentYear = new Date().getFullYear(); // tìm năm hiện tại
updateChart(currentYear);
getRevenueByMonthMax(currentYear);
function getRevenueByYear(year){
    updateChart(year);
    getRevenueByMonthMax(year);
}
function selectYear(){
    let str =``;
    for (let year = 2000; year <= currentYear; year++) {
        str +=`<option value="${year}">${year}</option>`
    }
    $("#byYear").html(str);
}
selectYear();

function getAccByUser(){
    $.ajax({
        type:"GET",
        header:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/admin/accountByUser/" ,
        success: function (listUser){
            showAccUser(listUser)

        },
        error: function (err){
            console.log(err)
        }
    })
}
function showAccUser(listUser){
    let str =``;
    str =`<h4>${listUser.length} </h4>
        <p>Các tài khoản đã đăng ký</p>` ;
    $("#sizeUser").html(str);
}

getAccByUser();

function getSizeShop(){
    $.ajax({
        type:"GET",
        header:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/admin/shopActive/" ,
        success: function (listShop){
            showSizeShop(listShop)

        },
        error: function (err){
            console.log(err)
        }
    })
}
function showSizeShop(listShop){
    let str =``;
    str =`<h4>${listShop.length} </h4>
        <p>Các shop đang hoặt động</p>` ;
    $("#sizeShop").html(str);
}
getSizeShop();

function getNewUser(){
    $.ajax({
        type:"GET",
        header:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/admin/getNewUser" ,
        success: function (newUser){
            showNewUser(newUser)

        },
        error: function (err){
            console.log(err)
        }
    })
}
function showNewUser(newUser){
    let str=``;
    for (const nu of newUser) {
        str +=`<div class="single_user_pil d-flex align-items-center justify-content-between">
    <div class="user_pils_thumb d-flex align-items-center">
        <div class="thumb_34 mr_15 mt-0"><img class="img-fluid radius_50"
                                              src="${nu.avatar}"
                                              alt="${nu.fullName}"></div>
        <span class="f_s_14 f_w_400 text_color_11">${nu.fullName}</span>
    </div>
    <div class="user_info">
        ${nu.role.name}
    </div>
    <div class="action_btns d-flex">
        <a href="#" class="action_btn mr_10">${nu.id}</a>
        <a href="#" class="action_btn"> <i class="fas fa-trash"></i> </a>
    </div>
</div>`
    }
$("#newUser").html(str);
}
getNewUser();