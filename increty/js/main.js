$(document).ready(function () {
    init();
//    return;
    $('#main').fullpage({
        'verticalCentered': false,
//        'easing': 'easeInQuart',
//        'easing': 'easeInOutQuint',
//        'easingcss3': 'cubic-bezier(0.86, 0, 0.07, 1)',
        'css3': true,
        'autoScrolling': true,
        'navigation': true,
        'scrollingSpeed': 1000,
        'headerHeight': 128,
        'footerMode': true,
        'navigationPosition': 'right',
        'navigationTooltips': ['Homepage', 'Advertise', 'Web Integration', 'Works', 'Company', 'Mail Magazine', 'Contact'],
        'onLeave': function (index, nextIndex, direction) {
            pageLeave(index);
            pageAnimation(nextIndex);
        }
    });
});

function init() {
    $("#p1_footer_content").children().eq(1).children(":first-child").hide();
    $(".fc_hide").hide();
    $("#fc_b4").children().eq(2).show();
    setResponsive();
}

function setResponsive() {
    if ($(window).height() >= responsiveHeight && $(window).width() >= responsiveWidth) {
        responsive = false;
    } else {
        responsive = true;
    }
    if (!responsive) {
        $(".bottom_bar").css({opacity: 1});
    } else {
        $(".bottom_bar").css({opacity: 0});
    }

    if ($(window).height() > 728) {
        var moreHeight = ($(window).height() - 728);
        oneThird = moreHeight / 3;
        half = moreHeight / 2;

        //for contents of each page can be displayed in center of the screen
        $("#content1").children().css("margin-top", oneThird + "px");
        $("#content2").children().css("padding-top", half + "px");
        $("#p2_obj3").css("padding", 0 + "px");
        $("#p2_obj3").css("top", 149 + half + "px");
        $("#p2_obj4").css("padding-top", half + 243 + "px");
        $("#p2_obj5").css("padding-top", 0 + "px");

        $("#content3").children().css("padding-top", half + "px");
        $("#p3_obj15").css("padding-top", 0);
        $("#p3_obj15").css("margin-top", half + "px");

        $("#content4").children().css("padding-top", half + "px");
        $("#p4_obj7").css("padding-top", 0 + "px");
        $("#p4_obj7").css("margin-top", half + "px");

        $("#content5").children().css("padding-top", half + "px");
        $("#p5_obj5").css("padding-top", 0 + "px");
        $("#p5_obj5").css("margin-top", half + "px");

        $("#content6").children().css("padding-top", half + "px");
        $("#p6_obj2").css("padding-top", 0 + "px");
        $("#p6_obj2").css("margin-top", half + "px");

        $("#content7").children().css("padding-top", half + "px");
        $("#p7_obj2").css("padding-top", 0 + "px");
        $("#p7_obj2").css("margin-top", half + "px");
    } else {
        oneThird = 0;
        half = 0;
    }
}

window.onload = function () {
    if (firstIn) {
        $("#ltd").css({opacity: 0, "left": "240px"}).animate({opacity: 1, "left": "279px"}, 1000);
        $("#enter").css({opacity: 0, "top": "310px"}).animate({opacity: 1, "top": "270px"}, 1000);
    }
    firstIn = false;
}

//call when leave page
function pageLeave(index) {
    switch (index) {
        case 1:
            $("#ltd").stop(true, false);
            $("#enter").stop(true, false);
            $("#ltd").css({opacity: 1, "left": "279px"}).animate({opacity: 0, "left": "340px"}, 300, 'easeOutCubic');
            $("#enter").css({opacity: 1, "top": "270px"}).animate({opacity: 0, "top": "200px"}, 300, 'easeOutCubic');
            break;
        case 2:
            $("#content2").children().stop(true, false);
            $("#p2_bottom_bar").stop(true, false);
            $("#p2_obj1").animate({opacity: 0, left: 388 }, 200);
            $("#p2_obj2").animate({opacity: 0}, 200);
            $("#p2_obj3").animate({top: -38}, 200);
            $("#p2_obj4").animate({color: 'rgb(178, 74, 80)'}, 200);
            $("#p2_obj6").animate({left: -90, opacity: 0}, 300, 'easeInQuint');
            $("#p2_obj7").animate({left: -90, opacity: 0}, 300, 'easeInQuint');
            $("#p2_obj8").animate({left: -90, opacity: 0}, 300, 'easeInQuint');
            $("#p2_obj9").animate({left: -90, opacity: 0}, 300, 'easeInQuint');
            $("#p2_obj10").animate({right: -90, opacity: 0}, 300, 'easeInQuint');
            $("#p2_obj11").animate({right: -90, opacity: 0}, 300, 'easeInQuint');
            $("#p2_obj12").animate({right: -90, opacity: 0}, 300, 'easeInQuint');
            $("#p2_obj13").animate({right: -90, opacity: 0}, 300, 'easeInQuint');
            $("#p2_obj14").animate({top: 305, opacity: 0}, 400, 'easeOutQuint');
            $("#p2_obj15").animate({top: 525, opacity: 0}, 400, 'easeOutQuint');
            $("#p2_bottom_bar").animate({opacity: 0}, 200);
            break;
        case 3:
            $("#content3").children().stop(true, false);
            $("#p3_bottom_bar").stop(true, false);
            $("#p3_obj1").delay(100).animate({left: -179, opacity: 0}, 300, 'easeInExpo');
            $("#p3_obj2").delay(100).animate({left: -179, top: 543, opacity: 0}, 300, 'easeInExpo');
            $("#p3_obj3").delay(100).animate({top: 543, opacity: 0}, 300, 'easeInExpo');
            $("#p3_obj4").delay(100).animate({top: 543, opacity: 0}, 300, 'easeInExpo');
            $("#p3_obj5").delay(100).animate({right: -179, top: 543, opacity: 0}, 300, 'easeInExpo');
            $("#p3_obj6").delay(100).animate({right: -179, opacity: 0}, 300, 'easeInExpo');

            $("#p3_obj7").animate({top: -178, opacity: 0}, 300, 'easeInExpo');
            $("#p3_obj8").animate({top: -178, opacity: 0}, 300, 'easeInExpo');

            $("#p3_obj9").delay(100).animate({left: -231, top: 469, opacity: 0}, 300, 'easeInExpo');
            $("#p3_obj10").delay(50).animate({left: -259, top: 496, opacity: 0}, 300, 'easeInExpo');
            $("#p3_obj11").animate({left: -286, top: 524, opacity: 0}, 300, 'easeInExpo');
            $("#p3_obj12").delay(100).animate({right: -231, top: 469, opacity: 0}, 300, 'easeInExpo');
            $("#p3_obj13").delay(50).animate({right: -259, top: 496, opacity: 0}, 300, 'easeInExpo');
            $("#p3_obj14").animate({right: -286, top: 524, opacity: 0}, 300, 'easeInExpo');

            $("#p3_obj15").animate({opacity: 0}, 400, 'easeInQuart');
            $("#p3_bottom_bar").animate({opacity: 0}, 200);
            break;
        case 4:
            $("#content4").children().stop(true, false);
            $("#p4_bottom_bar").stop(true, false);
            $("#p4_obj1").animate({left: -260, opacity: 0}, 300, 'easeOutQuint');
            $("#p4_obj2").delay(50).animate({left: -268, opacity: 0}, 300, 'easeOutQuint');
            $("#p4_obj3").delay(100).animate({left: -268, opacity: 0}, 300, 'easeOutQuint');

            $("#p4_obj4").animate({left: 226, opacity: 0}, 200, 'easeOutCubic');
            $("#p4_obj6").animate({right: 226, opacity: 0}, 200, 'easeOutCubic');
            $("#p4_obj5").animate({ color: 'rgb(133, 165, 88)'}, 300, 'easeOutCubic');

            $("#p4_obj7").animate({opacity: 0}, 400, 'easeOutCubic');
            $("#p4_bottom_bar").animate({opacity: 0}, 300);
            break;
        case 5:
            $("#content5").children().stop(true, false);
            $("#p5_bottom_bar").stop(true, false);
            $("#p5_obj2").animate({top: 300, opacity: 0}, 300, 'easeOutCubic');
            $("#p5_obj3").animate({top: 400, opacity: 0}, 300, 'easeOutCubic');

            $("#p5_obj1").animate({opacity: 0}, 300);
            $("#p5_obj4").animate({left: 460, opacity: 0}, 300, 'easeOutCubic');
            $("#p5_obj5").animate({left: 390, opacity: 0}, 300, 'easeOutCubic');
            $("#p5_bottom_bar").animate({opacity: 0}, 300);
            break;
        case 6:
            $("#content6").children().stop(true, false);
            $("#p6_bottom_bar").stop(true, false);
            $("#p6_obj1").animate({left: 400, opacity: 0}, 300, 'easeOutCubic');
            $("#p6_obj2").delay(100).animate({left: 400, opacity: 0}, 300, 'easeOutCubic');
            $("#p6_obj3").animate({top: 250, opacity: 0}, 300, 'easeOutCubic');
            $("#p6_obj4").animate({top: 340, opacity: 0}, 300, 'easeOutCubic');
            $("#p6_bottom_bar").animate({opacity: 0}, 300);
            break;
        case 7:
            $("#content7").children().stop(true, false);
            $("#p7_bottom_bar").stop(true, false);
            $("#p7_obj3").animate({left: -235, top: -65, opacity: 0}, 300, 'easeOutCubic');
            $("#p7_obj4").animate({right: -235, top: -65, opacity: 0}, 300, 'easeOutCubic');
            $("#p7_obj1").animate({top: 170, opacity: 0}, 300, 'easeOutCubic');
            $("#p7_obj2").animate({left: 400, opacity: 0}, 300, 'easeOutCubic');
            $("#p7_obj5").animate({opacity: 0}, 300);
            $("#p7_obj6").animate({opacity: 0, left: 210}, 200);
            $("#p7_obj7").animate({opacity: 0, left: 200}, 200);
            break;
    }
}

//call when page change to next
function pageAnimation(index) {
    switch (index) {
        case 1:
            $("#ltd").css({opacity: 0, "left": "200px"}).delay(700).animate({opacity: 1, "left": "279px"}, 500);
            $("#enter").css({opacity: 0, "top": "330px"}).delay(700).animate({opacity: 1, "top": "270px"}, 500);
            break;
        case 2:
            $("#content2").children().stop(true, false);
            $("#p2_bottom_bar").stop(true, false);
            $("#p2_obj1").css({"opacity": "0", "left": 388 }).delay(500).animate({opacity: 1, left: 418}, 1500);
            $("#p2_obj2").css({"opacity": 0}).delay(1000).animate({opacity: 1}, 500);
            $("#p2_obj3").css({top: -38}).delay(3000).animate({top: 149 + half}, 1000, 'easeOutBounce');
            $("#p2_obj4").css({color: 'rgb(178, 74, 80)'}).delay(1000).animate({color: '#000000'}, 3000);
            $("#p2_obj6").css({left: -90, opacity: 0}).delay(600).animate({left: 66, opacity: 1}, 500, 'easeInQuint');
            $("#p2_obj7").css({left: -90, opacity: 0}).delay(700).animate({left: 172, opacity: 1}, 500, 'easeInQuint');
            $("#p2_obj8").css({left: -90, opacity: 0}).delay(800).animate({left: 278, opacity: 1}, 500, 'easeInQuint');
            $("#p2_obj9").css({left: -90, opacity: 0}).delay(900).animate({left: 388, opacity: 1}, 500, 'easeInQuint');
            $("#p2_obj10").css({right: -90, opacity: 0}).delay(900).animate({right: 388, opacity: 1}, 500, 'easeInQuint');
            $("#p2_obj11").css({right: -90, opacity: 0}).delay(800).animate({right: 278, opacity: 1}, 500, 'easeInQuint');
            $("#p2_obj12").css({right: -90, opacity: 0}).delay(700).animate({right: 172, opacity: 1}, 500, 'easeInQuint');
            $("#p2_obj13").css({right: -90, opacity: 0}).delay(600).animate({right: 66, opacity: 1}, 500, 'easeInQuint');
            $("#p2_obj14").css({top: 305, opacity: 0}).delay(2000).animate({top: 335, opacity: 1}, 1000, 'easeOutQuint');
            $("#p2_obj15").css({top: 525, opacity: 0}).delay(2000).animate({top: 495, opacity: 1}, 1000, 'easeOutQuint');
            if (!responsive)
                $("#p2_bottom_bar").css({opacity: 0}).delay(4000).animate({opacity: 1}, 1000);
            else
                $("#p2_bottom_bar").css({opacity: 0});
            break;
        case 3:
            $("#content3").children().stop(true, false);
            $("#p3_bottom_bar").stop(true, false);
            $("#p3_obj1").css({left: -179, opacity: 0}).delay(800).animate({left: 108, opacity: 1}, 500, 'easeOutBack');
            $("#p3_obj2").css({left: -179, top: 543, opacity: 0}).delay(1100).animate({left: 204, top: 160, opacity: 1}, 500, 'easeOutBack');
            $("#p3_obj3").css({top: 543, opacity: 0}).delay(1300).animate({top: 259, opacity: 1}, 500, 'easeOutBack');
            $("#p3_obj4").css({top: 543, opacity: 0}).delay(900).animate({top: 259, opacity: 1}, 500, 'easeOutBack');
            $("#p3_obj5").css({right: -179, top: 543, opacity: 0}).delay(1200).animate({right: 204, top: 160, opacity: 1}, 500, 'easeOutBack');
            $("#p3_obj6").css({right: -179, opacity: 0}).delay(1000).animate({right: 108, opacity: 1}, 500, 'easeOutBack');

            $("#p3_obj7").css({top: -178, opacity: 0}).delay(2100).animate({opacity: 1}).delay(100).animate({top: 65}, 1500, 'easeOutBounce');
            $("#p3_obj8").css({top: -178, opacity: 0}).delay(2200).animate({opacity: 1}).delay(100).animate({top: 65}, 1500, 'easeOutBounce');

            $("#p3_obj9").css({left: -231, top: 469, opacity: 0}).delay(1800).animate({left: 78, top: 160, opacity: 1}, 500, 'easeInExpo');
            $("#p3_obj10").css({left: -259, top: 496, opacity: 0}).delay(1900).animate({left: 50, top: 187, opacity: 1}, 500, 'easeInExpo');
            $("#p3_obj11").css({left: -286, top: 524, opacity: 0}).delay(2000).animate({left: 23, top: 215, opacity: 1}, 500, 'easeInExpo');
            $("#p3_obj12").css({right: -231, top: 469, opacity: 0}).delay(2100).animate({right: 78, top: 160, opacity: 1}, 500, 'easeInExpo');
            $("#p3_obj13").css({right: -259, top: 496, opacity: 0}).delay(2200).animate({right: 50, top: 187, opacity: 1}, 500, 'easeInExpo');
            $("#p3_obj14").css({right: -286, top: 524, opacity: 0}).delay(2300).animate({right: 23, top: 215, opacity: 1}, 500, 'easeInExpo');
            $("#p3_obj15").css({opacity: 0}).delay(3000).animate({opacity: 1}, 1200, 'easeInQuart');
            if (!responsive)
                $("#p3_bottom_bar").css({opacity: 0}).delay(4500).animate({opacity: 1}, 1000);
            else
                $("#p3_bottom_bar").css({opacity: 0});
            break;
        case 4:
            $("#content4").children().stop(true, false);
            $("#p4_bottom_bar").stop(true, false);
            $("#p4_obj1").css({left: 980, opacity: 0}).delay(800).animate({left: 360, opacity: 1}, 500, 'easeOutQuint').delay(1000).animate({left: 230}, 500, 'easeOutQuint').delay(1000).animate({left: 100}, 500, 'easeOutQuint');
            $("#p4_obj2").css({left: 980, opacity: 0}).delay(1800).animate({left: 612, opacity: 1}, 500, 'easeInCubic').animate({left: 482}, 500, 'easeOutQuint').delay(1000).animate({left: 352}, 500, 'easeOutQuint');
            $("#p4_obj3").css({left: 980, opacity: 0}).delay(3300).animate({left: 742, opacity: 1}, 500, 'easeInCubic').animate({left: 612}, 500, 'easeOutQuint');

            $("#p4_obj4").css({left: 0, opacity: 0}).delay(1000).animate({left: 113, opacity: 1}, 1000, 'easeOutCubic');
            $("#p4_obj6").css({right: 0, opacity: 0}).delay(1500).animate({right: 113, opacity: 1}, 1000, 'easeOutCubic');
            $("#p4_obj5").css({color: 'rgb(133, 165, 88)'}).delay(2000).animate({ color: '#ffffff'}, 2000, 'easeOutCubic');
            $("#p4_obj7").css({opacity: 0}).delay(4000).animate({opacity: 1}, 1000, 'easeOutCubic');
            if (!responsive)
                $("#p4_bottom_bar").css({opacity: 0}).delay(4500).animate({opacity: 1}, 1000);
            else
                $("#p4_bottom_bar").css({opacity: 0});
            break;
        case 5:
            $("#p5_obj2").css({top: 360, opacity: 0}).delay(1000).animate({top: 337, opacity: 1}, 1000, 'easeOutCubic');
            $("#p5_obj3").css({top: 330, opacity: 0}).delay(1000).animate({top: 377, opacity: 1}, 1000, 'easeOutCubic');
            $("#p5_obj1").css({opacity: 0}).delay(2000).animate({opacity: 1}, 2000);
//                .css({opacity: 0, "transform": "rotate(-40deg)", "-ms-transform": 'rotate(-40deg)',
//                "-webkit-transform": 'rotate(-40deg)', "-o-transform": 'rotate(-40deg)', "-moz-transform": 'rotate(-40deg)'
//            }).delay(1500).animate({opacity: 1}, 1000).delay(1000).animate({opacity: 0}, 1000);
//            setTimeout(function () {
//                $("#p5_obj1").css({"transform": "rotate(0)", "-ms-transform": 'rotate(0)',
//                    "-webkit-transform": 'rotate(0)', "-o-transform": 'rotate(0)', "-moz-transform": 'rotate(0)'
//                }).delay(1000).animate({opacity: 1}, 1000);
//            }, 4500);
            $("#p5_obj4").css({left: 360, opacity: 0}).delay(4000).animate({left: 415, opacity: 1}, 1500, 'easeOutCubic');
            $("#p5_obj5").css({left: 450, opacity: 0}).delay(4000).animate({left: 420, opacity: 1}, 1500, 'easeOutCubic');

            if (!responsive)
                $("#p5_bottom_bar").css({opacity: 0}).delay(4500).animate({opacity: 1}, 1000);
            else
                $("#p5_bottom_bar").css({opacity: 0});
            break;
        case 6:
            $("#p6_obj1").css({left: 330, opacity: 0}).delay(1500).animate({left: 369, opacity: 1}, 1500, 'easeOutCubic');
            $("#p6_obj2").css({left: 330, opacity: 0}).delay(2500).animate({left: 367, opacity: 1}, 1500, 'easeOutCubic');
            $("#p6_obj3").css({top: 188, opacity: 0}).delay(800).animate({top: 221, opacity: 1}, 1500, 'easeOutCubic');
            $("#p6_obj4").css({top: 400, opacity: 0}).delay(800).animate({top: 366, opacity: 1}, 1500, 'easeOutCubic');
            if (!responsive)
                $("#p6_bottom_bar").css({opacity: 0}).delay(3000).animate({opacity: 1}, 1000);
            else
                $("#p6_bottom_bar").css({opacity: 0});
            break;
        case 7:
            $("#p7_obj3").css({left: -235, top: -65, opacity: 0}).delay(1000).animate({left: 65, top: 235, opacity: 1}, 1000, 'easeOutBack');
            $("#p7_obj4").css({right: -235, top: -65, opacity: 0}).delay(1100).animate({right: 65, top: 235, opacity: 1}, 1000, 'easeOutBack');
            $("#p7_obj1").css({top: 100, opacity: 0}).delay(1000).animate({top: 141, opacity: 1}, 1000, 'easeOutCubic');
            $("#p7_obj2").css({left: 300, opacity: 0}).delay(1000).animate({left: 367, opacity: 1}, 1000, 'easeOutCubic');
            $("#p7_obj5").css({opacity: 0}).delay(2000).animate({opacity: 1}, 1000);
            $("#p7_obj6").css({opacity: 0, left: 150}).delay(2500).animate({opacity: 1, left: 188}, 1000);
            $("#p7_obj7").css({opacity: 0, left: 260}).delay(2500).animate({opacity: 1, left: 239}, 1000);
            break;
    }
}

function moveTo(index) {
    $.fn.fullpage.moveTo(index);
}

$(window).resize(function () {
    setResponsive();
})

//footer content click event
function fc(id) {
    var src = $("#" + id).children(":first").attr("src");
    if (src == "img/footer/arrow_off.png") {
        $("#" + id).children(":first").attr("src", "img/footer/arrow_on.png");
    } else {
        $("#" + id).children(":first").attr("src", "img/footer/arrow_off.png");
    }

//    $("#" + id).children().eq(2).slideToggle("slow", "cubic-bezier(0.86, 0, 0.07, 1)", function () {
//    });
    $("#" + id).children().eq(2).toggle();
//    $("#" + id).children().eq(2).slideToggle();


    $("#main").css({'margin-top': "-" + $("#footer").height() + "px", 'margin-bottom': '-128px'});
    $("#main").stop(true, false);

}

//homepage page1 'open' button toggle
function open() {
    if ($("#open").attr('src') == "img/page1/open_off.png") {
        $("#open").attr('src', 'img/page1/open_on.png');
    } else {
        $("#open").attr('src', 'img/page1/open_off.png');
    }

    $("#p1_footer_content").children().eq(1).children(":first-child").toggle();
}

var firstIn = true;
var responsiveHeight = 688;
var responsiveWidth = 900;
var responsive = false;
var oneThird = 0;
var half = 0;