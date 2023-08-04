
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
function findAll() {

    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        url: "http://localhost:8080/shop?",
        success: function (data) {
            displayTable(data.content)
        },
        error: function (err) {
            console.log(err);
        }
    })
}

findAll();
function displayTable(arr) {
    let str = ""
    for (const p of arr) {
       str +=`<tr>
                                                 <td class="pe-0">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="contactCheckbox2">
                                                        <label class="form-check-label" for="contactCheckbox2">
                                                        </label>
                                                    </div>
                                                </td>
                                                <td class="ps-0">
                                                    <div class="d-flex align-items-center">
                                                        <img src="${p.img}" alt="Image product"
                                                             class="img-4by3-sm rounded-3">
                                                        <div class="ms-3">
                                                            <h5 class="mb-0">
                                                                <a href="#!" class="text-inherit">${p.name}</a>
                                                            </h5>
                                                            <span class="text-warning">
                                    <i class="mdi mdi-star"> </i>
                                    <i class="mdi mdi-star ms-n1"> </i>
                                    <i class="mdi mdi-star ms-n1"> </i>
                                    <i class="mdi mdi-star ms-n1"> </i>
                                    <i class="mdi mdi-star ms-n1"> </i>
                                  </span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>${p.category.name}</td>
                                                <td>${p.manufacture}</td>
                                                <td>${p.price}</td>
                                                <td>${p.quantity}</td>
                                                <td>
                                                    <span class="badge badge-success-soft">${p.status.name}</span>
                                                </td>
                                               <td>
                                                    <a href="#!"
                                                       class="btn btn-ghost btn-icon btn-sm rounded-circle texttooltip"
                                                       data-template="eyeOne">
                                                        <i data-feather="eye" class="fa fa-eye"></i>
<!--                                                        <i class="fa fa-eye"></i>-->

                                                        <div id="eyeOne" class="d-none">
                                                            <span>View</span>
                                                        </div>
                                                     
                                                    </a>
                                                    <a href="#!"
                                                       class="btn btn-ghost btn-icon btn-sm rounded-circle texttooltip"
                                                       data-template="editOne">
                                                        <i data-feather="edit" class="fa fa-edit"></i>
                                                        <div id="editOne" class="d-none">
                                                            <span>Edit</span>
                                                        </div>
                                                    </a>
                                                    <a href="#!"
                                                       class="btn btn-ghost btn-icon btn-sm rounded-circle texttooltip"
                                                       data-template="trashOne">
                                                        <i data-feather="trash-2" class="fa fa-lock"></i>
                                                        <div id="trashOne" class="d-none">
                                                            <span>Block</span>
                                                        </div>
                                                    </a>
                                                </td>
                                            </tr>`
    }
            $("#products").html(str);

}


function update() {

    let formData = getFormData()

    $.ajax({
        headers: {
            'Authorization': 'Bearer ' + sessionStorage.getItem("token"),
        },
        url: "http://localhost:8080/update/${id}",
        // processData: false,
        // contentType: false,
        type: "PUT",
        data: formData,
        success: function () {
            findAll();
        },
        error: function () {
            alert("Product not exists!")
        }
    })
}


function getFormData() {
    let name = $("#name").val()
    let price = $("#price").val()
    let quantity = $("#quantity").val()
    let manufacture = $("#manufacture").val()
    let description = $("#description").val()
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
        }
    }
}

getAllCategory();

function getAllCategory() {
    $.ajax({
        Accept: "application/json",
        headers: {
            'Authorization': 'Bearer ' + sessionStorage.getItem("token"),
        },
        url: "http://localhost:8080/categories",
        // processData: false,
        // contentType: false,
        type: "GET",
        success: function (data) {
            console.log(data)
            displayCategory(data)
        },
        error: function (err) {
            console.log(err)
            alert("Product not exists!")
        }
    })
}

function displayCategory(data) {
    let str = ""
    for (const c of data) {
        str += `
        <option value="${c.id}">${c.name}</option>
        `
    }
    $("#category").html(str);
}

function upload() {
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
                getFormData();
                product.img=url;
                console.log(product)
                create(product)
            }).catch(error => {
            reject(error);
        });
    }).catch(error => {
        reject(error);
    });
}

function create(data) {
    $.ajax({
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token"),
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

