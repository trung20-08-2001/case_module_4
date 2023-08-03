function register() {
    let username = $("#username").val();
    let password = $("#password").val();
    let fullName = $("#fullName").val();
    let avatar = $("#avatar").val();
    let phone = $("#phone").val();
    let email = $("#email").val();
    let birthday = $("#birthday").val();
    let role = $("#role").val();
    if (role === 1) {
        let account = {username, password, fullName, avatar, phone, email, birthday};
        $.ajax({
            type: "Post",
            contentType: "application/json",
            url: "http://localhost:8080/register/client",
            data: JSON.stringify(account),
            success: function () {
                location.href = "signin.html"
            },
            error: function (err) {
                console.log(err)
            }
        })
    } else if (role === 2) {
        {
            let account = {username, password, fullName, avatar, phone, email, birthday};
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
                }
            })
        }
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