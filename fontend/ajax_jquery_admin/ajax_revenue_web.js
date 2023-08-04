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
            'Accept': 'application/json'
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

// Gọi hàm cập nhật biểu đồ khi trang được tải lần đầu
const currentYear = new Date().getFullYear();
updateChart(currentYear);
function getRevenueByYear(year){
    updateChart(year);
}
function selectYear(){
    let str =``;
    for (let year = 2000; year <= currentYear; year++) {
        str +=`<option value="${year}">${year}</option>`
    }
    $("#byYear").html(str);
}
selectYear();
// const salesData = {
//     labels: [], // Mảng lưu trữ tên các tháng (vd: ['Tháng 1', 'Tháng 2', ...])
//     data: [],   // Mảng lưu trữ doanh số tương ứng với từng tháng (vd: [100, 150, ...])
// };
//
// // Hàm để cập nhật biểu đồ khi có dữ liệu mới từ database
// function updateChart() {
//     // Giả sử dữ liệu được nhận từ database là một mảng các đối tượng, mỗi đối tượng là một bản ghi doanh số
//     const newDataFromDatabase = [
//         { month: 'Tháng 1', sales: 100 },
//         { month: 'Tháng 2', sales: 150 },
//         { month: 'Tháng 3', sales: 50 },
//         { month: 'Tháng 4', sales: 250 },
//         { month: 'Tháng 5', sales: 150 },
//         { month: 'Tháng 6', sales: 300 },
//         { month: 'Tháng 7', sales: 350 },
//         { month: 'Tháng 9', sales: 220 },
//         { month: 'Tháng 10', sales: 335 },
//         { month: 'Tháng 11', sales: 289 },
//         { month: 'Tháng 12', sales: 275 },
//         // Thêm các bản ghi còn lại từ database vào đây
//     ];
//
//     // Xóa dữ liệu cũ trong biến salesData
//     salesData.labels = [];
//     salesData.data = [];
//
//     // Duyệt qua dữ liệu mới từ database và thêm vào biến salesData
//     newDataFromDatabase.forEach((record) => {
//         salesData.labels.push(record.month);
//         salesData.data.push(record.sales);
//     });
//
//     // Cập nhật biểu đồ
//     updateLineChart();
// }
//
// // Hàm để cập nhật biểu đồ đường
// function updateLineChart() {
//     const ctx = document.getElementById('lineChart').getContext('2d');
//     const lineChart = new Chart(ctx, {
//         type: 'line',
//         data: {
//             labels: salesData.labels,
//             datasets: [{
//                 label: 'Doanh số',
//                 data: salesData.data,
//                 borderColor: 'rgb(75, 192, 192)',
//                 borderWidth: 2,
//                 fill: false,
//             }],
//         },
//         options: {
//             responsive: true,
//             scales: {
//                 y: {
//                     beginAtZero: true
//                 }
//             }
//         }
//     });
// }
//
// // Gọi hàm cập nhật biểu đồ khi trang được tải lần đầu
// updateChart();