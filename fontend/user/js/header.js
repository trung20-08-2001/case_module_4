
displayTopBar();
categoryAtNavbar();
displayQuantityProductCart();
function displayQuantityProductCart(){
    let orderDetails=JSON.parse(localStorage.getItem("orderDetails"))
    if(orderDetails!=null){
        $("#quantityProductCart").text(orderDetails.length)
    }
}
function categoryAtNavbar() {
    $.ajax({
        type: "GET",
        Accept: 'application/json',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        },
        url: "http://localhost:8080/categories",
        success: function (data) {
            getData(data)
        },
        error: function () {
        }
    })


    function getData(data) {
        let str = "";
        for (const c of data) {
            str += `<a class="nav-item nav-link" onclick="selectorCategory(${c.id})">${c.name}</a>`
        }
        $("#dropdown_category").html(str);
    }
}


function selectorCategory(id) {
    localStorage.setItem("category", id);
    location.href = "/fontend/fontend/user/category.html"
}


function signOut(){
    localStorage.removeItem("account")
    localStorage.removeItem("cart")
    location.href="/fontend/fontend/user/index.html"
}


function displayTopBar(){
    let account=JSON.parse(localStorage.getItem("account"))
    if(account!=null) {
        let str = "";
        str += `
        <p>${account.fullName}<span> <img class="rounded-circle" src="${account.avatar}" alt="${account.fullName}" width="50" height="50"></span></p>
    `
        $("#info").html(str)
    }
}

