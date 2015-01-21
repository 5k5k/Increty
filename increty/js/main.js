//$(document).ready(function () {
//
//    $(".main").onepage_scroll({
//        sectionContainer: "section",
////        easing: "cubic-bezier(0.175, 0.885, 0.420, 1.310)",
//        animationTime: 800,
//        pagination: true,
//
////        responsiveFallback: 600,
//        beforeMove: function (index) {
//            pageAnimation(index);
//        },
//        afterMove: function (index) {
//            if (index == 3) {
////                $(".main").class = null;
////                $(".main")
//
////                $("#p2_obj3").before( $("#p2_obj3").clone(true) ).remove();
////                $("#p2_obj3").addClass("animated flipped-horizontal-right");
//
////                $("body").addClass("disabled-onepage-scroll");
////                $(document).unbind('mousewheel DOMMouseScroll MozMousePixelScroll');
////                $(this).swipeEvents().unbind("swipeDown swipeUp");
//            }
//        },
//        loop: false
//    });
//});


$(document).ready(function () {
//    resizeContent1Height();
//    $.fn.fullpage.setAllowScrolling(false);
//    $.fn.fullpage.setKeyboardScrolling(false);
    $(".fc_hide").hide();
//    return;
    $('#main').fullpage({
        'verticalCentered': false,
        'easing': 'easeInQuart',
//        'easing': 'easeInExpo',
//        'easing': 'easeInOutExpo',
//        'easing': 'easeInOutQuint',
//        'easing': 'swing',
        'css3': true,
        'autoScrolling': true,
        'navigation': true,
        'scrollingSpeed': 1000,
        'navigationPosition': 'right',
        'navigationTooltips': ['Homepage', 'Advertise', 'Web Integration', 'Works', 'Company', 'Mail Magazine', 'Contact'],

        'afterLoad': function (anchorLink, index) {
//            alert(anchorLink + " " + index);
//            if(index == 2){
//                $('#iphone3, #iphone2, #iphone4').addClass('active');
//            }
//            pageAnimation(index);
//            pageLoadAnimation(index);
            switch (index) {
                case 5:
//                    $("#content4").children().hide();
                    break;
            }
        },

        'onLeave': function (index, nextIndex, direction) {
//            alert(nextIndex + " " + index);
//            if(index==3){
////                alert(1);
//            }

            $("#content1").children().stop();
            $("#content2").children().stop();
//            if (index == 3 && direction == 'down'){
//                $('.section').eq(index -1).removeClass('moveDown').addClass('moveUp');
//            }
//            else if(index == 3 && direction == 'up'){
//                $('.section').eq(index -1).removeClass('moveUp').addClass('moveDown');
//            }
//
//            $('#staticImg').toggleClass('active', (index == 2 && direction == 'down' ) || (index == 4 && direction == 'up'));
//            $('#staticImg').toggleClass('moveDown', nextIndex == 4);
//            $('#staticImg').toggleClass('moveUp', index == 4 && direction == 'up');
            pageLeave(index);
            pageAnimation(nextIndex);
        },

        'onSlideLeave': function () {
            alert(111);
        }
    });

});


window.onload = function () {
//    alert("1");
//    var c1_h = $(window).height() - 228;
//    if (c1_h < 130) {
//        $("#content1").css({height: "130px"});
//    } else {
//        $("#content1").css({height: c1_h});
//    }

    if (firstIn) {
//        $('#main').show();
        $("#ltd").css({opacity: 0, "left": "240px"}).animate({opacity: 1, "left": "279px"}, 1000);
        $("#enter").css({opacity: 0, "top": "310px"}).animate({opacity: 1, "top": "270px"}, 1000);
//        $.fn.fullpage.setAllowScrolling(true);
//        $.fn.fullpage.setKeyboardScrolling(true);

    }
    firstIn = false;

}

//function pageLoadAnimation(index) {
//    switch (index) {
//        case 1:
//
//            break;
//    }
//}

function pageLeave(index) {
    switch (index) {
        case 1:
            $("#ltd").css({opacity: 1, "left": "279px"}).animate({opacity: 0, "left": "340px"}, 300, 'easeOutCubic');
            $("#enter").css({opacity: 1, "top": "270px"}).animate({opacity: 0, "top": "200px"}, 300, 'easeOutCubic');
            break;
        case 2:
            $("#content2").children().stop();
            $("#p2_obj1")
//                .css({"opacity": "1", "left": 418  })
                .animate({
                    opacity: 0, left: 388 }, 200);
            $("#p2_obj2")
//                .css({"opacity": 1})
                .animate({opacity: 0}, 200);
            $("#p2_obj3")
//                .css({top: 149 })
                .animate({top: -38}, 200);
            $("#p2_obj4")
//                .css({color: '#000000'})
                .animate({color: 'rgb(178, 74, 80)'}, 200);
            $("#p2_obj6")
//                .css({left: 66, opacity: 1})
                .animate({left: -90, opacity: 0}, 300, 'easeInQuint');
            $("#p2_obj7")
//                .css({left: 172, opacity: 1})
                .animate({left: -90, opacity: 0}, 300, 'easeInQuint');
            $("#p2_obj8")
//                .css({left: 278, opacity: 1})
                .animate({left: -90, opacity: 0}, 300, 'easeInQuint');
            $("#p2_obj9")
//                .css({left: 388, opacity: 1})
                .animate({left: -90, opacity: 0}, 300, 'easeInQuint');
            $("#p2_obj10")
//                .css({right: 388, opacity: 1})
                .animate({right: -90, opacity: 0}, 300, 'easeInQuint');
            $("#p2_obj11")
//                .css({right: 278, opacity: 1})
                .animate({right: -90, opacity: 0}, 300, 'easeInQuint');
            $("#p2_obj12")
//                .css({right: 172, opacity: 1})
                .animate({right: -90, opacity: 0}, 300, 'easeInQuint');
            $("#p2_obj13")
//                .css({right: 66, opacity: 1})
                .animate({right: -90, opacity: 0}, 300, 'easeInQuint');
            $("#p2_obj14")
//                .css({top: 335, opacity: 1})
                .animate({top: 305, opacity: 0}, 400, 'easeOutQuint');
            $("#p2_obj15")
//                .css({top: 495, opacity: 1})
                .animate({top: 525, opacity: 0}, 400, 'easeOutQuint');
            $("#p2_bottom_bar").animate({opacity: 0}, 200);
            break;
        case 3:
            $("#content3").children().stop();
            $("#p3_bottom_bar").stop();
            $("#p3_obj1").delay(100).animate({left: -179, opacity: 0}, 300, 'easeInExpo');
            $("#p3_obj2").delay(100).animate({left: -179, top: 543, opacity: 0}, 300, 'easeInExpo');
            $("#p3_obj3").delay(100).animate({top: 543, opacity: 0}, 300, 'easeInExpo');
            $("#p3_obj4").delay(100).animate({top: 543, opacity: 0}, 300, 'easeInExpo');
            $("#p3_obj5").delay(100).animate({right: -179, top: 543, opacity: 0}, 300, 'easeInExpo');
            $("#p3_obj6").delay(100).animate({right: -179, opacity: 0}, 300, 'easeInExpo');

            $("#p3_obj7").animate({top: -178}, 300, 'easeInExpo');
            $("#p3_obj8").animate({top: -178}, 300, 'easeInExpo');

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
            $("#content4").children().stop();
            $("#p4_bottom_bar").stop();
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
            $("#content5").children().stop();
            $("#p5_bottom_bar").stop();
            $("#p5_obj2").animate({top: 300, opacity: 0}, 300, 'easeOutCubic');
            $("#p5_obj3").animate({top: 400, opacity: 0}, 300, 'easeOutCubic');

            $("#p5_obj1").animate({opacity: 0}, 300);
            $("#p5_obj4").animate({left: 460, opacity: 0}, 300, 'easeOutCubic');
            $("#p5_obj5").animate({left: 390, opacity: 0}, 300, 'easeOutCubic');

            $("#p5_bottom_bar").css({opacity: 0}).delay(4500).animate({opacity: 1}, 1000);
            break;
        case 6:
            $("#content6").children().stop();
            $("#p6_bottom_bar").stop();
            $("#p6_obj1").animate({left: 400, opacity: 0}, 300, 'easeOutCubic');
            $("#p6_obj2").delay(100).animate({left: 400, opacity: 0}, 300, 'easeOutCubic');
            $("#p6_obj3").animate({top: 250, opacity: 0}, 300, 'easeOutCubic');
            $("#p6_obj4").animate({top: 340, opacity: 0}, 300, 'easeOutCubic');

            $("#p6_bottom_bar").animate({opacity: 0}, 300);
            break;
        case 7:
            $("#content7").children().stop();
            $("#p7_bottom_bar").stop();

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
function pageAnimation(index) {
    switch (index) {
        case 1:
            $("#ltd").css({opacity: 0, "left": "200px"}).delay(700).animate({opacity: 1, "left": "279px"}, 500);
            $("#enter").css({opacity: 0, "top": "330px"}).delay(700).animate({opacity: 1, "top": "270px"}, 500);
            break;
        case 2:
            //            $("#p2_obj3").parentNode.replaceChild(n,$("#p2_obj3"));
//            $("#p2_obj3").addClass("animated flipped-horizontal-right");
            $("#content2").children().stop();
            $("#p2_bottom_bar").stop();

            $("#p2_obj1").css({"opacity": "0", "left": 388 }).delay(500).animate({
                opacity: 1, left: 418}, 1500);
            $("#p2_obj2").css({"opacity": 0}).delay(1000).animate({opacity: 1}, 500);
            $("#p2_obj3").css({top: -38}).delay(3000).animate({top: 149}, 1000, 'easeOutBounce');
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

            $("#p2_bottom_bar").css({opacity: 0}).delay(4000).animate({opacity: 1}, 1000);
            break;
        case 3:
            $("#content3").children().stop();
            $("#p3_bottom_bar").stop();

            $("#p3_obj1").css({left: -179, opacity: 0}).delay(800).animate({left: 108, opacity: 1}, 500, 'easeOutBack');
//            $("#p3_obj2").css({left: -179, top: 543, opacity: 0}).delay(900).animate({left: 204, top: 160, opacity: 1}, 500, 'easeOutBack');
//            $("#p3_obj3").css({top: 543, opacity: 0}).delay(1000).animate({top: 259, opacity: 1}, 500, 'easeOutBack');
//            $("#p3_obj4").css({top: 543, opacity: 0}).delay(1100).animate({top: 259, opacity: 1}, 500, 'easeOutBack');
//            $("#p3_obj5").css({right: -179, top: 543, opacity: 0}).delay(1200).animate({right: 204, top: 160, opacity: 1}, 500, 'easeOutBack');
//            $("#p3_obj6").css({right: -179, opacity: 0}).delay(1300).animate({right: 108, opacity: 1}, 500, 'easeOutBack');
            $("#p3_obj2").css({left: -179, top: 543, opacity: 0}).delay(1100).animate({left: 204, top: 160, opacity: 1}, 500, 'easeOutBack');
            $("#p3_obj3").css({top: 543, opacity: 0}).delay(1300).animate({top: 259, opacity: 1}, 500, 'easeOutBack');
            $("#p3_obj4").css({top: 543, opacity: 0}).delay(900).animate({top: 259, opacity: 1}, 500, 'easeOutBack');
            $("#p3_obj5").css({right: -179, top: 543, opacity: 0}).delay(1200).animate({right: 204, top: 160, opacity: 1}, 500, 'easeOutBack');
            $("#p3_obj6").css({right: -179, opacity: 0}).delay(1000).animate({right: 108, opacity: 1}, 500, 'easeOutBack');

            $("#p3_obj7").css({top: -178}).delay(2200).animate({top: 65}, 1500, 'easeOutBounce');
            $("#p3_obj8").css({top: -178}).delay(2300).animate({top: 65}, 1500, 'easeOutBounce');

            $("#p3_obj9").css({left: -231, top: 469, opacity: 0}).delay(1800).animate({left: 78, top: 160, opacity: 1}, 500, 'easeInExpo');
            $("#p3_obj10").css({left: -259, top: 496, opacity: 0}).delay(1900).animate({left: 50, top: 187, opacity: 1}, 500, 'easeInExpo');
            $("#p3_obj11").css({left: -286, top: 524, opacity: 0}).delay(2000).animate({left: 23, top: 215, opacity: 1}, 500, 'easeInExpo');
            $("#p3_obj12").css({right: -231, top: 469, opacity: 0}).delay(2100).animate({right: 78, top: 160, opacity: 1}, 500, 'easeInExpo');
            $("#p3_obj13").css({right: -259, top: 496, opacity: 0}).delay(2200).animate({right: 50, top: 187, opacity: 1}, 500, 'easeInExpo');
            $("#p3_obj14").css({right: -286, top: 524, opacity: 0}).delay(2300).animate({right: 23, top: 215, opacity: 1}, 500, 'easeInExpo');

            $("#p3_obj15").css({opacity: 0}).delay(3000).animate({opacity: 1}, 1200, 'easeInQuart');

            $("#p3_bottom_bar").css({opacity: 0}).delay(4500).animate({opacity: 1}, 1000);
            break;
        case 4:
            $("#content4").children().stop();
            $("#p4_bottom_bar").stop();
//100
//            $("#p4_obj1").css({left: 980, opacity: 0}).delay(800).animate({left: 360, opacity: 1}, 500, 'easeOutQuint').delay(1000).animate({left: 180}, 500, 'easeOutQuint').delay(1000).animate({left: 100}, 500, 'easeOutQuint');
//            $("#p4_obj2").css({left: 980, opacity: 0}).delay(1800).animate({left: 612, opacity: 1}, 500, 'easeInCubic').animate({left: 432}, 500, 'easeOutQuint').delay(1000).animate({left: 352}, 500, 'easeOutQuint');
            $("#p4_obj1").css({left: 980, opacity: 0}).delay(800).animate({left: 360, opacity: 1}, 500, 'easeOutQuint').delay(1000).animate({left: 230}, 500, 'easeOutQuint').delay(1000).animate({left: 100}, 500, 'easeOutQuint');
            $("#p4_obj2").css({left: 980, opacity: 0}).delay(1800).animate({left: 612, opacity: 1}, 500, 'easeInCubic').animate({left: 482}, 500, 'easeOutQuint').delay(1000).animate({left: 352}, 500, 'easeOutQuint');
            $("#p4_obj3").css({left: 980, opacity: 0}).delay(3300).animate({left: 742, opacity: 1}, 500, 'easeInCubic').animate({left: 612}, 500, 'easeOutQuint');

            $("#p4_obj4").css({left: 0, opacity: 0}).delay(1000).animate({left: 113, opacity: 1}, 1000, 'easeOutCubic');
            $("#p4_obj6").css({right: 0, opacity: 0}).delay(1500).animate({right: 113, opacity: 1}, 1000, 'easeOutCubic');
            $("#p4_obj5").css({color: 'rgb(133, 165, 88)'}).delay(2000).animate({ color: '#ffffff'}, 2000, 'easeOutCubic');

            $("#p4_obj7").css({opacity: 0}).delay(4000).animate({opacity: 1}, 1000, 'easeOutCubic');
            $("#p4_bottom_bar").css({opacity: 0}).delay(4500).animate({opacity: 1}, 1000);
            break;

        case 5:
//            $("#p5_obj1").removeClass("animated rotate40");
//            setTimeout(function () {
//                $("#p5_obj1").removeClass("animated rotate40");
//            }, 1500);
            $("#p5_obj2").css({top: 360, opacity: 0}).delay(1000).animate({top: 337, opacity: 1}, 1000, 'easeOutCubic');
            $("#p5_obj3").css({top: 330, opacity: 0}).delay(1000).animate({top: 377, opacity: 1}, 1000, 'easeOutCubic');

            $("#p5_obj1").css({opacity: 0, "transform": "rotate(-40deg)", "-ms-transform": 'rotate(-40deg)',
                "-webkit-transform": 'rotate(-40deg)', "-o-transform": 'rotate(-40deg)', "-moz-transform": 'rotate(-40deg)'
            }).delay(1500).animate({opacity: 1}, 1000).delay(1000).animate({opacity: 0}, 1000);
            setTimeout(function () {
                $("#p5_obj1").css({"transform": "rotate(0)", "-ms-transform": 'rotate(0)',
                    "-webkit-transform": 'rotate(0)', "-o-transform": 'rotate(0)', "-moz-transform": 'rotate(0)'
                }).delay(1000).animate({opacity: 1}, 1000);
            }, 4500);
            $("#p5_obj4").css({left: 360, opacity: 0}).delay(4000).animate({left: 415, opacity: 1}, 1500, 'easeOutCubic');
            $("#p5_obj5").css({left: 450, opacity: 0}).delay(4000).animate({left: 420, opacity: 1}, 1500, 'easeOutCubic');

            $("#p5_bottom_bar").css({opacity: 0}).delay(4500).animate({opacity: 1}, 1000);
//            $("#p5_obj1").addClass("animated rotate40");
//            $("#p5_obj1").css({opacity: 1, "transform": "rotate(-40deg)"
//                , "-ms-transform": 'rotate(-40deg)',
//                "-webkit-transform": 'rotate(-40deg)', "-o-transform": 'rotate(-40deg)', "-moz-transform": 'rotate(-40deg)'
//            });
//            $("#p5_obj1").css({opacity: 0});
//            $("#p5_obj1").delay(3000).animate({opacity: 1}, 100, 'easeOutCubic').addClass("animated");
//            setTimeout(function () {
//                $("#p5_obj1").removeClass("animated rotate40");
//            }, 5500);
//                .delay(2000)
//                .animate({opacity: 1}, 500)
//                .animate({opacity: 1, transform: 'rotate(40)'
//                    , "-ms-transform": 'rotate(40)',
//                "-webkit-transform": 'rotate(40)', "-o-transform": 'rotate(40)', "-moz-transform": 'rotate(40)'
//                }, 1000, 'easeOutCubic');
            break;
        case 6:
            $("#p6_obj1").css({left: 330, opacity: 0}).delay(1500).animate({left: 369, opacity: 1}, 1500, 'easeOutCubic');
            $("#p6_obj2").css({left: 330, opacity: 0}).delay(2500).animate({left: 367, opacity: 1}, 1500, 'easeOutCubic');
            $("#p6_obj3").css({top: 188, opacity: 0}).delay(800).animate({top: 221, opacity: 1}, 1500, 'easeOutCubic');
            $("#p6_obj4").css({top: 400, opacity: 0}).delay(800).animate({top: 366, opacity: 1}, 1500, 'easeOutCubic');

            $("#p6_bottom_bar").css({opacity: 0}).delay(3000).animate({opacity: 1}, 1000);
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
    if (index == 2) {
//                $("#p2_detail").show();

//                alert(1);
//                $("#p2_detail").fadeIn(3000);
    }
}

function moveTo(index) {
    $.fn.fullpage.moveTo(index);
}

function resizeContent1Height() {

//    $("#page1").css({height: $(window).height() - 128 + "px"});

//    var c1_h = $(window).height() - 228;
//    if (c1_h < 130) {
//        $("#content1").css({height: "130px"});
//        console.log("resizeContent1Height 130px");
//    } else {
//        $("#content1").css({height: c1_h + "px"});
//        console.log("resizeContent1Height " + c1_h + "px");
//    }


//    console.log("resizeContent1Height");
}
$(window).resize(function () {
    resizeContent1Height();
})
//$(".main").onepage_scroll({
//    sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
//    easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
//    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
//    animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
//    pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
//    updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
//    beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
//    afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
//    loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
//    keyboard: true,                  // You can activate the keyboard controls
//    responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
//    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
//    // the browser's width is less than 600, the fallback will kick in.
//    direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".
//});
function fc(id) {
//    if()
    var src = $("#" + id).children(":first").attr("src");
    if (src == "img/footer/arrow_off.png") {
        $("#" + id).children(":first").attr("src", "img/footer/arrow_on.png");
    } else {
        $("#" + id).children(":first").attr("src", "img/footer/arrow_off.png");
    }

    $("#" + id).children().eq(2).toggle();
//    $("#" + id + " div:first-child").toggle();
}

function open() {
    if ($("#open").attr('src') == "img/page1/open_off.png") {
        $("#open").attr('src', 'img/page1/open_on.png');
    } else {
        $("#open").attr('src', 'img/page1/open_off.png');
    }
}

var firstIn = true;