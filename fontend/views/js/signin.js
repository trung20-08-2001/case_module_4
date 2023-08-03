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
            if (data.role.name === "ROLE_USER") {
                location.href = "view_usser/index.html"
            } else if (data.role.name === "ROLE_SHOP") {
                location.href = "shop.html"
            } else if (data.role.name === "ROLE_ADMIN") {
                location.href = "admin.html"
            }
        },
        error: function (err) {
            location.href = "register.html"
            console.log(err);
        }

    })


}