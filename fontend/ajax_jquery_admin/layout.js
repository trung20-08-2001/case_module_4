let name = JSON.parse(localStorage.getItem("account")).fullName;
let images = JSON.parse(localStorage.getItem("account")).avatar;
function layout(){
    let acc =JSON.parse(localStorage.getItem('account'));
  let  strLayout=`<div class="logo d-flex justify-content-between">
        <a class="large_logo" href="index.html"><img src="../css_html_admin/img/logo.png" alt=""></a>
        <a class="small_logo" href="index.html"><img src="../css_html_admin/img/mini_logo.png" alt=""></a>
        <div class="sidebar_close_icon d-lg-none">
            <i class="ti-close"></i>
        </div>
    </div>
    <ul id="sidebar_menu">
        <li class="">
            <a class="has-arrow" href="#" aria-expanded="false">
                <div class="nav_icon_small">
                    <img src="img/menu-icon/dashboard.svg" alt="">
                </div>
                <div class="nav_title">
                    <span>Tổng hợp</span>
                </div>
            </a>
            <ul>
                <li><a href="index.html">Doanh thu</a></li>
            </ul>
        </li>
        <li class="">
            <a class="has-arrow" href="#" aria-expanded="false">
                <div class="nav_icon_small">
                    <img src="../css_html_admin/img/menu-icon/2.svg" alt="">
                </div>
                <div class="nav_title">
                    <span> Ứng dụng </span>
                </div>
            </a>
            <ul>
                <li><a href="mail_box.html">Mail Box</a></li>
                <li><a href="chat.html">Chat</a></li>
            </ul>
        </li>
        <li class="">
            <a class="has-arrow" href="#" aria-expanded="false">
                <div class="nav_icon_small">
                    <img src="../css_html_admin/img/menu-icon/3.svg" alt="">
                </div>
                <div class="nav_title">
                    <span>Trang</span>
                </div>
            </a>
            <ul>
                <li><a href="login.html">Login</a></li>
                <li><a href="resister.html">Register</a></li>
                <li><a href="error_400.html">Error 404</a></li>
                <li><a href="error_500.html">Error 500</a></li>
                <li><a href="forgot_pass.html">Forgot Password</a></li>
            </ul>
        </li>
        <li class="">
            <a class="has-arrow" href="#" aria-expanded="false">
                <div class="nav_icon_small">
                    <img src="../css_html_admin/img/menu-icon/4.svg" alt="">
                </div>
                <div class="nav_title">
                    <span>All Shop</span>
                </div>
            </a>
            <ul>
                <li><a href="admin_list.html">Danh sách các shop</a></li>
                <li><a href="add_new_admin.html">Các shop đang chờ duyệt</a></li>
            </ul>
        </li>
        <li class="">
            <a class="has-arrow" href="#" aria-expanded="false">
                <div class="nav_icon_small">
                    <img src="../css_html_admin/img/menu-icon/17.svg" alt="">
                </div>
                <div class="nav_title">
                    <span>Loại sẩn phẩm</span>
                </div>
            </a>
            <ul>
                <li><a href="data_table.html">Danh mục sản phẩm</a></li>
                <li><a href="datepicker.html">Voucher</a></li>

            </ul>
        </li>
        <li class="">
            <a class="has-arrow" href="#" aria-expanded="false">
                <div class="nav_icon_small">
                    <img src="../css_html_admin/img/menu-icon/11.svg" alt="">
                </div>
                <div class="nav_title">
                    <span>Quyền và vai trò</span>
                </div>
            </a>
            <ul>
                <li><a href="module_setting.html">Cài đặt </a></li>
                <li><a href="role_permissions.html">Quyền và vai trò</a></li>
            </ul>
        </li>
        <li class="">
            <a class="has-arrow" href="#" aria-expanded="false">
                <div class="nav_icon_small">
                    <img src="../css_html_admin/img/menu-icon/5.svg" alt="">
                </div>
                <div class="nav_title">
                    <span>Người dùng</span>
                </div>
            </a>
            <ul>
                <li><a href="user_list.html">Danh sách người dùng</a></li>
            </ul>
        </li>
        <li class="">
            <a href="calender.html" aria-expanded="false">
                <div class="nav_icon_small">
                    <img src="../css_html_admin/img/menu-icon/10.svg" alt="">
                </div>
                <div class="nav_title">
                    <span>Lịch</span>
                </div>
            </a>
        </li>
        <li class="">
            <a class="has-arrow" href="#" aria-expanded="false">
                <div class="nav_icon_small">
                    <img src="../css_html_admin/img/menu-icon/12.svg" alt="">
                </div>
                <div class="nav_title">
                    <span>Bản đồ</span>
                </div>
            </a>
            <ul>
                <li><a href="mapjs.html">Maps JS</a></li>
                <li><a href="vector_map.html">Bản đồ vecter</a></li>
            </ul>
        </li>
    </ul>`

let strHeader=`<div class="row">
            <div class="col-lg-12 p-0 ">
                <div class="header_iner d-flex justify-content-between align-items-center">
                    <div class="sidebar_icon d-lg-none">
                        <i class="ti-menu"></i>
                    </div>
                    <div class="line_icon open_miniSide d-none d-lg-block">
                        <img src="../css_html_admin/img/line_img.png" alt="">
                    </div>
                    <div class="serach_field-area d-flex align-items-center">
                        <div class="search_inner">
                            <form action="#">
                                <div class="search_field">
                                    <input type="text" placeholder="Search">
                                </div>
                                <button type="submit"><img src="../css_html_admin/img/icon/icon_search.svg" alt="">
                                </button>
                            </form>
                        </div>
                    </div>
                    <div class="header_right d-flex justify-content-between align-items-center">
                        <div class="header_notification_warp d-flex align-items-center">
                            <li>
                                <a class="bell_notification_clicker" href="#"> <img
                                        src="../css_html_admin/img/icon/bell.svg" alt="">
                                    <span>2</span>
                                </a>

                                <div class="Menu_NOtification_Wrap">
                                    <div class="notification_Header">
                                        <h4>Notifications</h4>
                                    </div>
                                    <div class="Notification_body">

                                        <div class="single_notify d-flex align-items-center">
                                            <div class="notify_thumb">
                                                <a href="#"><img src="../css_html_admin/img/staf/2.png" alt=""></a>
                                            </div>
                                            <div class="notify_content">
                                                <a href="#"><h5>Cool Marketing </h5></a>
                                                <p>Lorem ipsum dolor sit amet</p>
                                            </div>
                                        </div>

                                        <div class="single_notify d-flex align-items-center">
                                            <div class="notify_thumb">
                                                <a href="#"><img src="../css_html_admin/img/staf/4.png" alt=""></a>
                                            </div>
                                            <div class="notify_content">
                                                <a href="#"><h5>Awesome packages</h5></a>
                                                <p>Lorem ipsum dolor sit amet</p>
                                            </div>
                                        </div>

                                        <div class="single_notify d-flex align-items-center">
                                            <div class="notify_thumb">
                                                <a href="#"><img src="../css_html_admin/img/staf/3.png" alt=""></a>
                                            </div>
                                            <div class="notify_content">
                                                <a href="#"><h5>what a packages</h5></a>
                                                <p>Lorem ipsum dolor sit amet</p>
                                            </div>
                                        </div>

                                        <div class="single_notify d-flex align-items-center">
                                            <div class="notify_thumb">
                                                <a href="#"><img src="../css_html_admin/img/staf/2.png" alt=""></a>
                                            </div>
                                            <div class="notify_content">
                                                <a href="#"><h5>Cool Marketing </h5></a>
                                                <p>Lorem ipsum dolor sit amet</p>
                                            </div>
                                        </div>

                                        <div class="single_notify d-flex align-items-center">
                                            <div class="notify_thumb">
                                                <a href="#"><img src="../css_html_admin/img/staf/4.png" alt=""></a>
                                            </div>
                                            <div class="notify_content">
                                                <a href="#"><h5>Awesome packages</h5></a>
                                                <p>Lorem ipsum dolor sit amet</p>
                                            </div>
                                        </div>

                                        <div class="single_notify d-flex align-items-center">
                                            <div class="notify_thumb">
                                                <a href="#"><img src="../css_html_admin/img/staf/3.png" alt=""></a>
                                            </div>
                                            <div class="notify_content">
                                                <a href="#"><h5>what a packages</h5></a>
                                                <p>Lorem ipsum dolor sit amet</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="nofity_footer">
                                        <div class="submit_button text-center pt_20">
                                            <a href="#" class="btn_1">See More</a>
                                        </div>
                                    </div>
                                </div>

                            </li>
                            <li>
                                <a class="CHATBOX_open" href="#"> <img src="../css_html_admin/img/icon/msg.svg" alt="">
                                    <span>2</span> </a>
                            </li>
                        </div>
                        <div class="profile_info">
                            <img src="${images}" alt="#">
                            <div class="profile_info_iner">
                                <div class="profile_author_name">
                                    <p>Neurologist </p>
                                    <h5>${name}</h5>
                                </div>
                                <div class="profile_info_details">
                                    <a href="#">My Profile </a>
                                    <a href="#">Settings</a>
                                    <a href="#">Log Out </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
`

    document.getElementById("layout").innerHTML = strLayout;
    document.getElementById("layout_header").innerHTML = strHeader;

}
layout();