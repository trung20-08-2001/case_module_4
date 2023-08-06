getAlluser();
function getAlluser(){
    $.ajax({
        type: "get",
        Accept: 'application/json',
        Content: 'application/json',
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        url: "http://localhost:8080/admin/findUserAccount",
        success: function (userList){
            console.log(userList)
            showUser(userList)

        },
        error: function (err){
            console.log(err)
        }
    })
}
function showUser(userList){
    let str = ``;
    for (const u of userList) {
        str += `<tr>
                    <td>${u.id}</td>
                    <td><img src="${u.avatar}" alt="${u.fullName}" style="width: 25px; height: 25px"></td>
                    <td>${u.fullName}</td>
                    <td>${u.birthday}</td>
                    <td>${u.phone}</td>
                    <td>${u.email}</td>
                    <td>${u.role.name}</td>
                     <td>                 
                     <input type="button" onclick="blockUser(${u.id})" class="action_btn mr_10" value="block" style="width: 50px"> </i>
                     </td>
                </tr>`
    }
    $("#showUser").html(str);
}

function blockUser(id){
    window.location.href="../viewsAdmin/user_list.html"
    $.ajax({
        type: "post",
        Accept: 'application/json',
        Content: 'application/json',
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        url: "http://localhost:8080/admin/block/" + id,
        success: function (mess) {

        },
        error: function (err) {
            console.log(err);
        }
    })
}
function getAllUserBlock(){
    $.ajax({
        type: "get",
        Accept: 'application/json',
        Content: 'application/json',
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        url: "http://localhost:8080/admin/allUserBlock",
        success: function (listUserBlock){
            console.log(listUserBlock)
            showUserBlock(listUserBlock)

        },
        error: function (err){
            console.log(err)
        }
    })
}
function showUserBlock(listUserBlock){
    let str = ``;
    for (const u of listUserBlock) {
        str += `<tr>
                    <td>${u.id}</td>
                    <td><img src="${u.avatar}" alt="${u.fullName}" style="width: 25px; height: 25px"></td>
                    <td>${u.fullName}</td>
                    <td>${u.birthday}</td>
                    <td>${u.phone}</td>
                    <td>${u.email}</td>
                    <td>${u.role.name}</td>
                     <td>                 
                     <input type="button" onclick="unlockUser(${u.id})" class="action_btn mr_10" value="unlock" style="width: 50px"> </i>
                     </td>
                </tr>`
    }
    $("#showUserBlock").html(str);
}
getAllUserBlock();
function unlockUser(id){
    window.location.href="../viewsAdmin/user_list.html"
    $.ajax({
        type: "post",
        Accept: 'application/json',
        Content: 'application/json',
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        url: "http://localhost:8080/admin/activeShop/" + id,
        success: function (mess) {

        },
        error: function (err) {
            console.log(err);
        }
    })
}

function findUserActiveById(){
    let userId = $("#idUserActive").val();
    $.ajax({
        type: "post",
        Accept: 'application/json',
        Content: 'application/json',
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        url: "http://localhost:8080/admin/findUserActive/" + userId,
        success: function (userActive) {
            console.log(userActive);
            showUserActiveById(userActive);
        },
        error: function (err) {
            console.log(err);
        }
    })
}
function showUserActiveById(u){
    let str=`<tr>
                    <td>${u.id}</td>
                    <td><img src="${u.avatar}" alt="${u.fullName}" style="width: 25px; height: 25px"></td>
                    <td>${u.fullName}</td>
                    <td>${u.birthday}</td>
                    <td>${u.phone}</td>
                    <td>${u.email}</td>
                    <td>${u.role.name}</td>
                     <td>                 
                     <input type="button" onclick="unlockUser(${u.id})" class="action_btn mr_10" value="unlock" style="width: 50px"> </i>
                     </td>
                </tr>`;
    $("#showUser").html(str);

}
function findUserBlockById(){
    let userId = $("#idShopBlock").val();
    $.ajax({
        type: "post",
        Accept: 'application/json',
        Content: 'application/json',
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        url: "http://localhost:8080/admin/findUserBlock/" + userId,
        success: function (userActive) {
            console.log(userActive);
            showUserBlockById(userActive);
        },
        error: function (err) {
            console.log(err);
        }
    })
}

function showUserBlockById(u) {
  let  str = `<tr>
                    <td>${u.id}</td>
                    <td><img src="${u.avatar}" alt="${u.fullName}" style="width: 25px; height: 25px"></td>
                    <td>${u.fullName}</td>
                    <td>${u.birthday}</td>
                    <td>${u.phone}</td>
                    <td>${u.email}</td>
                    <td>${u.role.name}</td>
                     <td>                 
                     <input type="button" onclick="unlockUser(${u.id})" class="action_btn mr_10" value="unlock" style="width: 50px"> </i>
                     </td>
                </tr>`

$("#showUserBlock").html(str);
}