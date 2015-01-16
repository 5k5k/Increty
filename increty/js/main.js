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
    $('#main').fullpage({
        'verticalCentered': false,
        'easing': 'swing',
        'css3': true,
        'autoScrolling':false,
        'sectionsColor': ['#F0F2F4', '#B24A50', '#6233E6', '#fff'],
//        'sectionsColor': ['#F0F2F4', '#fff', '#fff', '#fff'],
        'navigation': true,
        'navigationPosition': 'right',
        'navigationTooltips': ['fullPage.js', 'Powerful', 'Amazing', 'Simple'],

        'afterLoad': function (anchorLink, index) {
//            if(index == 2){
//                $('#iphone3, #iphone2, #iphone4').addClass('active');
//            }
        },

        'onLeave': function (index, nextIndex, direction) {
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
            pageAnimation(nextIndex);
        }
    });
});

function pageAnimation(index) {
    switch (index) {
        case 1:
            break;
        case 2:
            $("#content2").children().stop();
            $("#p2_obj1").css({"opacity": "0", "left": 388 }).delay(500).animate({
                opacity: 1, left: 418}, 1500, function () {
//                $("#p2_obj1").removeAttr('style');
            });
//            $("#p2_obj1").before( $("#p2_obj1").clone(true) ).remove();

//            $("#p2_obj3").removeClass("animated flipped-horizontal-right");
//            var o=$("#p2_obj3");
//            var n=o.cloneNode(true);
//            o.before(n);
//            $("#p2_obj3").remove();

//            $("#p2_obj3").stop();
//            $("#p2_obj3").addClass("animated flipped-horizontal-right");
            $("#p2_obj2").css({"opacity": 0}).delay(1000).animate({opacity: 1}, 500);
            $("#p2_obj3").css({top: -38, opacity: 0}).delay(3000).css({opacity: 1}).animate({top: 160}, 1000, 'easeOutBounce');
//            $("#p2_obj3").parentNode.replaceChild(n,$("#p2_obj3"));
//            $("#p2_obj3").addClass("animated flipped-horizontal-right");

            $("#p2_obj4").css({color: 'rgb(178, 74, 80)'}).delay(1000).animate({color: '#000000'}, 3000);

            $("#p2_obj6").css({left: -90, opacity: 0}).delay(600).animate({left: 66, opacity: 1}, 500, 'easeInQuint');
            $("#p2_obj7").css({left: -90, opacity: 0}).delay(700).animate({left: 172, opacity: 1}, 500, 'easeInQuint');
            $("#p2_obj8").css({left: -90, opacity: 0}).delay(800).animate({left: 278, opacity: 1}, 500, 'easeInQuint');
            $("#p2_obj9").css({left: -90, opacity: 0}).delay(900).animate({left: 388, opacity: 1}, 500, 'easeInQuint');
            $("#p2_obj10").css({right: -90, opacity: 0}).delay(900).animate({right: 388, opacity: 1}, 500, 'easeInQuint');
            $("#p2_obj11").css({right: -90, opacity: 0}).delay(800).animate({right: 278, opacity: 1}, 500, 'easeInQuint');
            $("#p2_obj12").css({right: -90, opacity: 0}).delay(700).animate({right: 172, opacity: 1}, 500, 'easeInQuint');
            $("#p2_obj13").css({right: -90, opacity: 0}).delay(600).animate({right: 66, opacity: 1}, 500, 'easeInQuint');
            break;
        case
        3
        :
            break;
        case
        4
        :
            break;
    }
    if (index == 2) {
//                $("#p2_detail").show();

//                alert(1);
//                $("#p2_detail").fadeIn(3000);
    }
}

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