function register(username, password, fullName, avatar, phone, email, birthday, role) {
    if (role === 1) {
        let account = {username, password, fullName, avatar, phone, email, birthday, status: {id: 1}};
        $.ajax({
            type: "Post",
            contentType: "application/json",
            url: "http://localhost:8080/register/client",
            data: JSON.stringify(account),
            success: function () {
                alert("done")
                location.href = "signin.html"
            },
            error: function (err) {
                alert("Done2")
            }
        })
    } else if (role === 2) {
        {
            let nameShop = $("#nameshop").val();
            let address = $("#address").val();
            let avatarShop = $("#avatarShop").val();
            let account = {
                username,
                password,
                fullName,
                avatar,
                phone,
                email,
                birthday,
                nameShop,
                address,
                avatarShop,
                status: {id: 3}
            };
            $.ajax({
                type: "Post",
                contentType: "application/json",
                url: "http://localhost:8080/register/shop",
                data: JSON.stringify(account),
                success: function () {
                    location.href = "signin.html"
                },
                error: function (err) {
                    console.log(err)
                    alert("done3")

                }
            })
        }
    }
}

function showPlus() {
    let int = document.getElementById("role").value;
    if (int > 1) {
        let plus = document.getElementById("shop");
        let plus2 = document.getElementById("shop2");
        let plus3 = document.getElementById("shop3");
        plus.style.display = "block";
        plus2.style.display = "block";
        plus3.style.display = "block";
        let a = document.querySelector('#shop');
        let b = document.querySelector('#shop2');
        let c = document.querySelector('#shop3');
        a.requires = false;
        b.requires = false;
        c.requires = false;
    } else {
        let plus = document.getElementById("shop");
        let plus2 = document.getElementById("shop2");
        let plus3 = document.getElementById("shop3");
        plus.style.display = "none";
        plus2.style.display = "none";
        plus3.style.display = "none";
        let a = document.querySelector('#shop');
        let b = document.querySelector('#shop2');
        let c = document.querySelector('#shop3');
        a.requires = true;
        b.requires = true;
        c.requires = true;
    }
}

function printError(string) {
    // updating
}

function check() {
    let username = $("#username").val();
    let password = $("#password").val();
    let fullName = $("#fullName").val();
    let avatar = $("#avatar").val();
    let phone = $("#phone").val();
    let email = $("#email").val();
    let birthday = $("#birthday").val();
    let role = parseInt($("#role").val());
    let usernameRegex = /^[a-zA-Z0-9]{3,16}$/;
    let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    let fullNameRegex = /^[a-zA-Z0-9]{3,16}$/;
    let phoneRegex = /^[0-9]{10}$/;
    if (!usernameRegex.test(username)) {
        // $("#dropdown_category").html("từ 3-16 ký tự");
        // document.querySelector('#username').placeholder="từ 3-16 ký tự";
        $("#regexUsername").html("từ 3-16 ký tự")
    } else if (!passwordRegex.test(password)) {
        alert("có chữ và số và có 8 ký tự");
    } else if (!fullNameRegex.test(fullName)) {
        alert("từ 3-16 ký tự chữ");
    } else if (!phoneRegex.test(phone)) {
        alert("gồm 10 ký tự số ");
    } else {
        register(username, password, fullName, avatar, phone, email, birthday, role)
    }
}