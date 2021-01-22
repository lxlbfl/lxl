$(function () {
    //1.    鼠标经过对应文本高亮
    $(".content_nav li").hover(function () {
        $(this).siblings().stop().fadeTo(400, 0.5);
        $(this).addClass("li_blue").siblings().removeClass('li_blue')
    }, function () {
        //鼠标离开
        $(this).siblings().stop().fadeTo(400, 1);
    });
    //事件委托
    $(".content_nav").click(function (e) {
        var a = ".box-" + e.target.dataset.index
        $(a).show().siblings().hide();
        e.stopPropagation();
    });
    //循环
    for (let i = 0; i < 5; i++) {
        let a = ".box-" + i
        $(a).hide()
    };
    $(".text-0").click(function () {
        let a = $(".pull_text-0");
        if (a.css("display") == "none") {
            a.show();
        } else {
            a.hide();
        }
    });
    $(".text-1").click(function () {
        let a = $(".pull_text-1");
        if (a.css("display") == "none") {
            a.show();
        } else {
            a.hide();
        }
    });
    $(".text-2").click(function () {
        let a = $(".pull_text-2");
        if (a.css("display") == "none") {
            a.show();
        } else {
            a.hide();
        }
    }); $(".text-3").click(function () {
        let a = $(".pull_text-3");
        if (a.css("display") == "none") {
            a.show();
        } else {
            a.hide();
        }
    });
    $(".text-4").click(function () {
        let a = $(".pull_text-4");
        if (a.css("display") == "none") {
            a.show();
        } else {
            a.hide();
        }
    });

});