function register() {
    let username = $("#username").val();
    let password = $("#password").val();
    let fullName = $("#fullName").val();
    let avatar = $("#avatar").val();
    let phone = $("#phone").val();
    let email = $("#email").val();
    let birthday = $("#birthday").val();
    let role = parseInt($("#role").val());
    if (role === 1) {

        let account = {username, password, fullName, avatar, phone, email, birthday,status: {id:1}};
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
                console.log(err);
                alert("Done2")
            }
        })
    } else if (role === 2) {
        {
            let nameShop=$("#nameshop").val();
            let address=$("#address").val();
            let avatarShop=$("#avatarShop").val();
            let account = {username, password, fullName, avatar, phone, email, birthday,nameShop,address,avatarShop,status: {id:2}};
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
    } else {
        let plus = document.getElementById("shop");
        let plus2 = document.getElementById("shop2");
        let plus3 = document.getElementById("shop3");
        plus.style.display = "none";
        plus2.style.display = "none";
        plus3.style.display = "none";

    }
}

function printError(string) {
    // updating
}

// function check() {
//     var phoneInput = document.getElementById("phone");
//
//     phoneInput.addEventListener("input", function() {
//         var phoneNumber = phoneInput.value;
//         var regex = /^\d{3}-\d{3}-\d{4}$/;
//         if (regex.test(phoneNumber)) {
//             console.log("Số điện thoại hợp lệ");
//         } else {
//             console.log("Số điện thoại không hợp lệ");
//         }
//     });
// }