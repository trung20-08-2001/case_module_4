function showInformation() {
    let account = JSON.parse(localStorage.getItem("account"));
    $("#accountName").html(account.username);
    let cart = JSON.parse(localStorage.getItem("cart"));
    $("#odderInCart").html(cart.length);
}
// showInformation();