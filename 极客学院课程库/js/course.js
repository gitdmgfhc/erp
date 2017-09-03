//课程库
$(function () {
    //课程库二级菜单滑动效果
    $(".kechengku .level2").mouseenter(function () {
        $(this).css({
            borderLeft: "1px solid #ddd",
            borderRight: "0",
            "box-shadow": "1px 2px 4px rgba(0,0,0,.1)",
            "margin-top": "-1px",
            "margin-left": "-1px",
            "padding-left": "24px",
            "color": "#35b558"
        });
        var index = $(".kechengku .level2").index($(this));
        $(".left-course .level2bq").eq(index).css("display", "block");
    });

    //课程库二级菜单离开效果
    $(".kechengku .level2").mouseleave(function () {
        $(".kechengku .level2").css({
            borderLeft: "1px solid #35b558",
            borderRight: "1px solid #35b558",
            "box-shadow": "0 0 0 rgba(0,0,0,.1)",
            "margin-top": "0",
            "margin-left": "0",
            "padding-left": "32px",
            "color": "#666"
        });
        $(".left-course .level2bq").css("display", "none");
    });

    //一级级菜单滑动效果
    $(".zhiyelujing .level1").mouseenter(function () {
        $(this).css({
            "backgroundColor": "#f5f5f5",
            "color": "#35b558"
        });
        var index = $(".zhiyelujing .level1").index($(this));
        $(".zhiyelujing .level1 .quanbu").eq(index).css({
            "display": "block"
        });
    });

    //一级菜单滑动离开效果
    $(".zhiyelujing .level1").mouseleave(function () {
        $(".zhiyelujing .level1").css({
            "backgroundColor": "#fff",
            "color": "#333"
        });
        $(".zhiyelujing .level1 .quanbu").css({
            "display": "none"
        });
    });

    //初始化最左侧元素加右外边距
    $(".lesson-position").each(function (index, dome) {
        if ((index + 1) % 3 == 0) {
            $(dome).css("marginRight", "0");
        }
    });

    //平铺显示效果
    $("li.kuai-icon").click(function () {
        $(".lesson-box").off();
        $(".lesson-position").removeClass("lesson-position-2");
        $(".lesson-play").removeClass("lesson-play-2");
        $(".play-icon").removeClass("play-icon-2");
        $(".lessonimg").removeClass("lessonimg-2");
        $(".lesson-box").removeClass("lesson-box-2");
        $(".lesson-h2").removeClass("lesson-h2-2");
        $(".lesson-timer").removeClass("lesson-timer-2");
        $(".lesson-number").removeClass("lesson-number-2");
        $(".lesson-level").removeClass("lesson-level-2");
        $(".lesson-h1").removeClass("lesson-h1-2");
        $(".cf-bottom").removeClass("cf-bottom-2");
        $(".lesson-cloud").removeClass("lesson-cloud-2");
        $(".lesson-word").removeClass("lesson-word-2");
        $(".lesson-info").removeClass("lesson-info-2");
        $(".time-icon").removeClass("time-icon-2");
        $(".xinhao-icon2").removeClass("xinhao-icon2-2");

        //    课程播放滑动效果
        $(".lesson-box").mouseenter(function () {
            var index = $(".lesson-box").index($(this));
            $(".lesson-h1").eq(index).slideDown();
            $(".lesson-h2 .cf-bottom").eq(index).slideDown();
            $(".lesson-box .cf .lesson-number").eq(index).show();
            $(".lesson-box .cf .lesson-level").eq(index).show();
            $(".lesson-play .play-video").eq(index).animate({"opacity": 1}, 100);
        });

        //课程播放滑动离开效果
        $(".lesson-box").mouseleave(function () {
            $(".lesson-h1").stop(true).slideUp();
            $(".lesson-h2 .cf-bottom").stop(true).slideUp();
            $(".lesson-box .cf .lesson-number").stop(true).hide();
            $(".lesson-box .cf .lesson-level").stop(true).hide();
            $(".lesson-play .play-video").stop(true).animate({"opacity": 0}, 100);
        });
    });

    //列表切换显示效果
    $("li.list-icon").click(function () {
        $(".lesson-box").off();
        $(".lesson-position").addClass("lesson-position-2");
        $(".lesson-play").addClass("lesson-play-2");
        $(".play-icon").addClass("play-icon-2");
        $(".lessonimg").addClass("lessonimg-2");
        $(".lesson-box").addClass("lesson-box-2");
        $(".lesson-h2").addClass("lesson-h2-2");
        $(".lesson-timer").addClass("lesson-timer-2");
        $(".lesson-number").addClass("lesson-number-2");
        $(".lesson-level").addClass("lesson-level-2");
        $(".lesson-h1").addClass("lesson-h1-2");
        $(".cf-bottom").addClass("cf-bottom-2");
        $(".lesson-cloud").addClass("lesson-cloud-2");
        $(".lesson-word").addClass("lesson-word-2");
        $(".lesson-info").addClass("lesson-info-2");
        $(".time-icon").addClass("time-icon-2");
        $(".xinhao-icon2").addClass("xinhao-icon2-2");

        $(".lesson-box").mouseenter(function () {
            var index = $(".lesson-box").index($(this));
            $(".lesson-play-2 .play-video").eq(index).animate({"opacity": 1}, 100);
        });
        //课程播放滑动离开效果
        $(".lesson-box").mouseleave(function () {
            $(".lesson-play-2 .play-video").stop(true).animate({"opacity": 0}, 100);
        });
    });

    //    课程播放滑动效果
    $(".lesson-box").mouseenter(function () {
        var index = $(".lesson-box").index($(this));
        $(".lesson-h1").eq(index).slideDown();
        $(".lesson-h2 .cf-bottom").eq(index).slideDown();
        $(".lesson-box .cf .lesson-number").eq(index).show();
        $(".lesson-box .cf .lesson-level").eq(index).show();
        $(".lesson-play .play-video").eq(index).animate({"opacity": 1}, 100);
    });
    //课程播放滑动离开效果
    $(".lesson-box").mouseleave(function () {
        $(".lesson-h1").stop(true).slideUp();
        $(".lesson-h2 .cf-bottom").stop(true).slideUp();
        $(".lesson-box .cf .lesson-number").stop(true).hide();
        $(".lesson-box .cf .lesson-level").stop(true).hide();
        $(".lesson-play .play-video").stop(true).animate({"opacity": 0}, 100);
    });

    //搜索栏滑动显示效果

    $(".wrap .search dl").mouseenter(function () {
        $(this).css({
            "box-shadow": "1px 2px 4px rgba(0,0,0,.3)",
            "paddingRight": "35px"
        });
        $(this).children("dd").css("display", "block");
        $(this).children("dt").children(".arrow").css("display", "none");

    });
    //搜索栏滑动离开效果
    $(".wrap .search dl").mouseleave(function () {
        $(this).css("paddingRight", "20px");
        $(this).children("dt").children(".arrow").css("display", "inline");
        $(".wrap .search dd").css("display", "none");
        $(".wrap .search dl").css({"box-shadow": ""});
    });

});
