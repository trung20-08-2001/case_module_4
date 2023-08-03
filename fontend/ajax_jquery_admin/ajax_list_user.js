getAlluser();
function getAlluser(){
    $.ajax({
        type:"GET",
        header:{
            'Accept': 'application/json'
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
                    <td>${u.avatar}</td>
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
        type: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/admin/block/" + id,
        success: function (mess) {

        },
        error: function (err) {
            console.log(err);
        }
    })
}