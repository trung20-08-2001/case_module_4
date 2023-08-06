function showcart() {
    let cart = localStorage.getItem("cart");
    let array = JSON.parse(cart);
    let str = "";
    let subtotal=0;
    for (const p of array) {
        str += `<tr>
            <td class="align-middle"><img src="${p.img}" alt="${p.img}" style="width: 50px;"> ${p.name}</td>
            <td class="align-middle">${p.price}</td>
            <td class="align-middle">
                <div class="input-group quantity mx-auto" style="width: 100px;">
                    <div class="input-group-btn">
                        <button class="btn btn-sm btn-primary btn-minus" onclick="minus(${p.id},${p.price})" >
                            <i class="fa fa-minus" ></i>
                        </button>
                    </div>
                    <input type="text" class="form-control form-control-sm bg-secondary border-0 text-center" value="1" id="${p.id}">
                        <div class="input-group-btn">
                            <button class="btn btn-sm btn-primary btn-plus" onclick="plus(${p.id},${p.price})">
                                <i class="fa fa-plus"></i>
                            </button>
                        </div>
                </div>
            </td>
            <td class="align-middle" id="${p.id}t" >${p.price}</td>
            <td class="align-middle">
                   <a onclick="buttonRemove(${array.indexOf(p)})"> <button class="btn btn-sm btn-danger" ><i class="fa fa-times"></i></button><a>
            </td>
        </tr>`
        subtotal+=p.price;
    }
    let shipping=subtotal/10;
    let total=subtotal+shipping;
    $("#Cart").html(str);
    $("#total").html(total);
    $("#subtotal").html(subtotal);
    $("#shipping").html(shipping);
}

showcart();

function buttonRemove(id) {
    let cart = localStorage.getItem("cart");
    let array = JSON.parse(cart);
    array.splice(id, 1);
    localStorage.setItem("cart", JSON.stringify(array));
    showcart();
}

function plus(id, price) {
    let tag = document.getElementById(id);
    let number = +document.getElementById(id).value;
    tag.value = number + 1;
    let total = (number + 1) * price;
    document.getElementById(id + "t").innerHTML = total;
    calculation(price);
}

function minus(id,price) {
    let tag = document.getElementById(id);
    let number = +document.getElementById(id).value;
    if (number > 1) {
        tag.value = number - 1;
        let total = (number -1) * price;
        document.getElementById(id + "t").innerHTML = total
    }

  calculation(-price)
}

function calculation(magicNumber) {
    let subtotal=+document.getElementById("subtotal").textContent;
    let total=+document.getElementById("total").textContent;
    let shipping=+document.getElementById("shipping").textContent;
    subtotal+=magicNumber;
    shipping+=(magicNumber)/10;
    total+=magicNumber+(magicNumber)/10;
    $("#total").html(total);
    $("#subtotal").html(subtotal);
    $("#shipping").html(shipping);
}

