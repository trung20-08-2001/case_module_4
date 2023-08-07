const firebaseConfig = {
    apiKey: "AIzaSyC1HN8OeYScrl6IWC3rk37FxncDgt3WNE4",
    authDomain: "commerce-website-acf59.firebaseapp.com",
    databaseURL: "https://commerce-website-acf59-default-rtdb.firebaseio.com",
    projectId: "commerce-website-acf59",
    storageBucket: "commerce-website-acf59.appspot.com",
    messagingSenderId: "709514506361",
    appId: "1:709514506361:web:43c53da1978e3cad7764a8",
    measurementId: "G-STT0P32LY3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let product;
let account = JSON.parse(localStorage.getItem("account"))
let list_url_image = [];
let isCreate = true;
let validate = false;

getAllCategory();
setValueProduct();

function getAllCategory() {
    $.ajax({
        Accept: "application/json",
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token"),
        },
        url: "http://localhost:8080/categories",
        type: "GET",
        success: function (data) {
            displayCategory(data)
        },
        error: function (err) {
            console.log(err)
            alert("err get category")
        }
    })
}

function displayCategory(data) {
    let productEdit = JSON.parse(localStorage.getItem("product"));
    let idCategoryProduct;
    if (productEdit != null) {
        idCategoryProduct = productEdit.category.id;
    }
    let str = ""
    for (const c of data) {
        if (c.id === idCategoryProduct) {
            str += `
        <option value="${c.id}" selected>${c.name}</option>
        `
        } else {
            str += `
        <option value="${c.id}">${c.name}</option>
        `
        }
    }
    $("#category").html(str);
}

$('#img_main').on('change', function () {
    return new Promise((resolve, reject) => {
        const ref = firebase.storage().ref();
        const file = document.getElementById("img_main").files[0];
        const name = file.name;
        const metadata = {
            contentType: file.type
        }
        const task = ref.child(name).put(file, metadata);
        task.then(snapshot => {
            snapshot.ref.getDownloadURL()
                .then(url => {
                    resolve(url);
                    $("#img_edit_main").html(`<img src="${url}" id="url_product_main"  width="25%" height="90"> `)
                }).catch(error => {
                reject(error);
            });
        }).catch(error => {
            reject(error);
        });
    });
});


$('#img_sub').on('change', function () {
    return new Promise((resolve, reject) => {
        const ref = firebase.storage().ref();
        const file = document.getElementById("img_sub").files[0];
        const name = file.name;
        const metadata = {
            contentType: file.type
        }
        const task = ref.child(name).put(file, metadata);
        task.then(snapshot => {
            snapshot.ref.getDownloadURL()
                .then(url => {
                    resolve(url);
                    list_url_image.push(url)
                    displayListImageSub();
                }).catch(error => {
                reject(error);
            });
        }).catch(error => {
            reject(error);
        });
    });
});


function displayListImageSub() {
    let str = "";
    for (let i = 0; i < list_url_image.length; i++) {
        str += `
        <img src="${list_url_image[i]}" width="24%" height="90" onclick="deleteImage(${i})">
        `
    }
    $("#img_edit_sub").empty().append(str);
}

function getFormData() {
    let name = $("#name").val()
    let price = $("#price").val()
    let quantity = $("#quantity").val()
    let manufacture = $("#manufacture").val()
    let description = $("#editor").val()
    let statusId = 3
    let categoryId = $("#category").val()
    let img = $("#url_product_main").attr("src")
    if (name === "" || price === "" || quantity === "" || manufacture === "" || description === "" || description === "" || categoryId === "" || img === "") {
        $("#notification").modal("show")
        validate = false;
    } else {
        validate = true;
        if (isCreate === false) {
            product = {
                id: JSON.parse(localStorage.getItem("product")).id,
                name: name,
                price: price,
                quantity: quantity,
                manufacture: manufacture,
                description: description,
                category: {
                    id: categoryId
                },
                status: {
                    id: statusId
                },
                account: {
                    id: account.id
                },
                img: img
            }
        } else {
            product = {
                name: name,
                price: price,
                quantity: quantity,
                manufacture: manufacture,
                description: description,
                category: {
                    id: categoryId
                },
                status: {
                    id: statusId
                },
                account: {
                    id: account.id
                },
                img: img
            }
        }

    }
}

// function reset(){
//     $("#name").val("")
//     $("#price").val("")
//     $("#quantity").val("")
//     $("#manufacture").val("")
//     $("#editor").val("")
//     $("#category").val(1)
//     $("#img_edit_main").text("")
//     $("#img_edit_sub").text("")
// }
function saveProduct() {
    getFormData()
    if (validate === true) {
        $.ajax({
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            url: "http://localhost:8080/shop/saveProduct",
            type: "POST",
            data: JSON.stringify(product),
            success: function (data) {
                saveProductDetail(data)
                localStorage.removeItem("product");
                localStorage.removeItem("list_product_detail")

            },
            error: function (err) {
                alert("err")
                console.log(err);
            }
        })
    }
}

function saveProductDetail(product) {
    if (isCreate === false) {
        deleteProductDetail(product)
    }
    let product_detail_list = []
    for (let i = 0; i < list_url_image.length; i++) {
        let product_detail = {
            image: list_url_image[i],
            product: product
        }
        product_detail_list.push(product_detail)
    }
    $.ajax({
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token"),
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        url: "http://localhost:8080/shop/saveProductDetail",
        type: "POST",
        data: JSON.stringify(product_detail_list),
        success: function () {
            $("#notification").modal("show")
            if (isCreate === true) {
                $("#content_notification").text("Sản phẩm của bạn đang chờ được duyệt")
            } else {
                $("#content_notification").text("Thay đổi thông tin thành công, sản phẩm của bạn đang chờ được duyệt")
                isCreate = false;
            }

        },
        error: function (err) {
            console.log(err);
        }
    })
}

function deleteProductDetail(product) {
    $.ajax({
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token"),
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        url: "http://localhost:8080/shop/deleteProductDetail",
        type: "POST",
        data: JSON.stringify(product),
        success: function () {
            console.log("okkkkk")
        },
        error: function (err) {
            alert("err")
            console.log(err);
        }
    })
}

function setValueProduct() {
    let productEdit = JSON.parse(localStorage.getItem("product"));
    if (productEdit != null) {
        $("#name").val(productEdit.name)
        $("#price").val(productEdit.price)
        $("#quantity").val(productEdit.quantity)
        $("#manufacture").val(productEdit.manufacture)
        $("#editor").val(productEdit.description)
        let list_product_detail = JSON.parse(localStorage.getItem("list_product_detail"))
        for (let i = 0; i < list_product_detail.length; i++) {
            list_url_image.push(list_product_detail[i].image)
        }
        $("#img_edit_main").html(`<img src="${productEdit.img}" id="url_product_main"  width="25%" height="90"> `)
        displayListImageSub();
        isCreate = false;
    }
}

function deleteImage(index) {
    list_url_image.splice(index, 1);
    displayListImageSub();
}