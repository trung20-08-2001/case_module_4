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
let changeImage=false;

function getFormData(isCreate) {
    if (isCreate===true) {
        let name = $("#name").val()
        let price = $("#price").val()
        let quantity = $("#quantity").val()
        let manufacture = $("#manufacture").val()
        let description = $("#editor").val()
        let statusId = 3
        let categoryId = $("#category").val()
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
            }
        }
    }
}

getAllCategory();
setValueProduct();

function getAllCategory() {
    $.ajax({
        Accept: "application/json",
        headers: {
            'Authorization': 'Bearer ' + sessionStorage.getItem("token"),
        },
        url: "http://localhost:8080/categories",
        type: "GET",
        success: function (data) {
            displayCategory(data)
        },
        error: function (err) {
            console.log(err)
            alert("Product not exists!")
        }
    })
}

function displayCategory(data) {
    let productEdit = JSON.parse(localStorage.getItem("product"));
    let idCategoryProduct;
    if(productEdit!=null){
        idCategoryProduct=productEdit.category.id;
    }
    let str = ""
    for (const c of data) {
        if(c.id===idCategoryProduct) {
            str += `
        <option value="${c.id}" selected>${c.name}</option>
        `
        }else{
            str += `
        <option value="${c.id}">${c.name}</option>
        `
        }
    }
    $("#category").html(str);
}

function save() {
    return new Promise((resolve, reject) => {
        const ref = firebase.storage().ref();
        const file = document.getElementById("img").files[0];
        const name = file.name;
        const metadata = {
            contentType: file.type
        }
        const task = ref.child(name).put(file, metadata);
        task.then(snapshot => {
            snapshot.ref.getDownloadURL()
                .then(url => {
                    resolve(url);
                    getFormData(true);
                    product.img = url;
                    create(product)
                }).catch(error => {
                reject(error);
            });
        }).catch(error => {
            reject(error);
        });
    });
}
function create(data) {
    $.ajax({
        headers: {
            'Authorization': 'Bearer ' + sessionStorage.getItem("token"),
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        url: "http://localhost:8080/shop/create",
        type: "POST",
        data: JSON.stringify(data),
        success: function () {
            alert("Complete")
        },
        error: function (err) {
            console.log(err);
        }
    })
}


