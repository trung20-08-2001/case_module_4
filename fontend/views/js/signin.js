function login() {
    let username = $("#username").val();
    let password = $("#password").val();
    let account = {username, password};
    $.ajax({
        type: "Post",
        contentType: "application/json",
        url: "http://localhost:8080/login",
        data: JSON.stringify(account),
        success: function (data) {
            localStorage.setItem("token", data.token);
            localStorage.setItem("account", JSON.stringify(data));
            if (data.status.name !== "ACTIVE") {
                location.href = "signin.html"
            } else if (data.role.name === "ROLE_USER") {
                location.href = "/fontend/fontend/user/index.html"
            } else if (data.role.name === "ROLE_SHOP") {
                location.href = "/fontend/shop/dashui.codescandy.com/dashuipro/pages/index.html"
            } else if (data.role.name === "ROLE_ADMIN") {
                location.href = "/fontend/fontend/viewsAdmin/index.html"
            } else location.href = "/views/signin.html"
        },
        error: function (err) {
            location.href = "register.html"
            console.log(err);
        }

    })
}

function regex() {
    let username = $("#username").val();
    let password = $("#password").val();
    var usernameRegex = /^[a-zA-Z0-9]{3,16}$/;
    var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (usernameRegex.test(username) && passwordRegex.test(password)) {
        login(username,password)
    } else if (usernameRegex.test(username)) {
        $("#regexPass").html(" Phải có 1 chữ và 1 số   độ dài 8 ký tự ");
    } else {
        $("#regexId").html(" Độ dài từ 3-16 ");
    }
}