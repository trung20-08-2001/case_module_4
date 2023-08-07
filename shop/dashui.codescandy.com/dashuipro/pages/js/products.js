let account = JSON.parse(localStorage.getItem("account"))

function findAll(page) {

    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        url: "http://localhost:8080/shop?page="+page+"&id=" + account.id,
        success: function (data) {
            displayTable(data.content)
        },
        error: function (err) {
            console.log(err);
        }
    })
}

findAll(0);

function displayTable(arr) {
    let str = ""
    for (const p of arr) {
        str += `<tr>                   
                                                <td class="ps-0">
                                                    <div class="d-flex align-items-center">
                                                        <img src="${p.img}" alt="Image product"
                                                             class="img-4by3-sm rounded-3">
                                                        <div class="ms-3">
                                                            <h5 class="mb-0">
                                                                <a href="#!" class="text-inherit">${p.name}</a>
                                                            </h5>
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
                                                        <div id="eyeOne" class="d-none">
                                                            <span>View</span>
                                                        </div>
                                                    </a>
                                                    <a onclick="edit(${p.id})"
                                                       class="btn btn-ghost btn-icon btn-sm rounded-circle texttooltip"
                                                       data-template="editOne">
                                                        <i data-feather="edit" class="fa fa-edit"></i>
                                                        <div id="editOne" class="d-none">
                                                            <span>Edit</span>
                                                        </div>
                                                    </a>
                                                    <a 
                                                       class="btn btn-ghost btn-icon btn-sm rounded-circle texttooltip"
                                                       data-template="trashOne">`
        if (p.status.id === 1) {
            str += `
               <i onclick="changeStatus(${p.id})"  class="fa fa-lock"></i>
               `
        } else if (p.status.id === 4) {
            str += `
               <i onclick="changeStatus(${p.id})"  class="fa fa-unlock"></i>
               `
        }
        str += `
                                                        <div id="trashOne" class="d-none">
                                                            <span>Block</span>
                                                        </div>
                                                    </a>
                                                </td>
                                            </tr>`

    }

    $("#products").html(str);
}


function edit(id) {
    $.ajax({
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token"),
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/user/findProductById/" + id,
        type: "GET",
        success: function (data) {
            localStorage.setItem("product", JSON.stringify(data))
            location.href = "product-edit.html";

        },
        error: function (err) {
            console.log(err)
        }
    })
}

function changeStatus(id) {
    $.ajax({
        type: "POST",
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token"),
            'Accept': 'text/plain',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/shop/changeStatus/" + id,
        success: function (data) {
            console.log("complete")
            findAll();
        },
        error: function (err) {
            console.log(err)
        }
    })
}