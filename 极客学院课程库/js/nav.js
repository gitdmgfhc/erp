//行头
$(function () {
    //极客APP二维码滑动显示效果
    $(".nav-right span.icon-app").mouseenter(function () {
        $(".icon-app>.submenu").css("display", "block");
        $(this).css({"background": 'url(./images/app-icon2.png) 0 /17px no-repeat'});
    });

    $(".nav-right span.icon-app").mouseleave(function () {
        $(".icon-app>.submenu").css("display", "none");
        $(this).css({"background": 'url(./images/app-icon.png) 0 /17px no-repeat'});
    });

    //极客登录滑动显示效果
    $(".nav-right span.icon-login").mouseenter(function () {
        $(".icon-login>.submenu").css("display", "block");
    });

    $(".nav-right span.icon-login").mouseleave(function () {
        $(".icon-login>.submenu").css("display", "none");
    });

    //行头标签滑动显示效果
    $(".nav-left li").mouseenter(function () {
        $(this).css("color", "#35B558");
    });

    $(".nav-left li").mouseleave(function () {
        $(this).css("color", "#000");
    });

    // 行头下拉列表显示控制
    $(".nav-left li").mouseenter(function () {
        $(this).children(".submenu").css("display", "block");
    });

    $(".nav-left li").mouseleave(function () {

        $(".nav-left>li>.submenu").css("display", "none");
    });
    //搜索框隐藏效果
    $(".search-box .tagbox .close-icon").click(function () {
        $(".search-box").hide();
    });
    //搜索框显示效果
    $(".nav-right span.icon-search").click(function () {
        $(".search-box").show(2000);
    });
});
