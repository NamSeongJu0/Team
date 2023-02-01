// 미디어 중간, 모바일 사이즈 메뉴바

// 버튼 클릭 시 왼쪽에서 메뉴바 나오는 효과
$(function () {

    $('.spMenu_btn').click(function () {

        $("#side-nav").css("display", "block");

        $("#side-nav").toggleClass("wow");

        if ($("#side-nav").hasClass("wow")) {

            $("#side-nav").animate({ "left": "0px" }, '100%');

        } else {

            $("#side-nav").animate({ "left": "-10000px" }, '100%');

        }

    });

});


// section 이미지 전환
$(function () {
    function prev() {

        $('#slidewrap .slide li:last').prependTo('#slidewrap .slide');

        $('#slidewrap .slide').css('margin-left', 1100);

        $('#slidewrap .slide').stop().animate({ marginLeft: 0 }, 800);

    }

    function next() {

        $('#slidewrap .slide').stop().animate({ marginLeft: -1100 }, 800, function () {

            $('#slidewrap .slide li:first').appendTo('#slidewrap .slide');

            $('#slidewrap .slide').css({ marginLeft: 0 });

        });

    }

    setInterval(next, 3000);


    //버튼 슬라이드

    $('.prev').click(function () {

        prev();

    });


    $('.next').click(function () {

        next();

    });
});


// 호텔 스크롤 이벤트
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 6100) {
            $('.hotel_1').addClass('active1');
        } else {
            $('.hotel_1').removeClass('active1');
        }

        if ($(this).scrollTop() > 7500) {
            $('.hotel_2').addClass('active1');
        } else {
            $('.hotel_2').removeClass('active1');
        }

        if ($(this).scrollTop() > 8700) {
            $('.hotel_3').addClass('active1');
        } else {
            $('.hotel_3').removeClass('active1');
        }

        if ($(this).scrollTop() > 10000) {
            $('.hotel_4').addClass('active1');
        } else {
            $('.hotel_4').removeClass('active1');
        }

        if ($(this).scrollTop() > 11200) {
            $('.hotel_5').addClass('active1');
        } else {
            $('.hotel_5').removeClass('active1');
        }
    });
});