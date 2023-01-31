// header active 효과
$(function() {
    $(window).resize(function(){
        if(window.innerWidth > 1199){
           $('.spMenu_btn').hide();
           $('.nav, .nav_R .navL').show();
           $("#side-nav").hide();
        }
        else{
            $('.spMenu_btn').show();
            $('.nav, .nav_R .navL').hide();
        }
       });
});


// 이미지 전환
$(function () {
    function prev(){

        $('#slidewrap .slide li:last').prependTo('#slidewrap .slide');
        
        $('#slidewrap .slide').css('margin-left', 1100);
        
        $('#slidewrap .slide').stop().animate({marginLeft: 0},800);
        
        }

        function next(){
        
        $('#slidewrap .slide').stop().animate({marginLeft: -1100},800, function(){
        
        $('#slidewrap .slide li:first').appendTo('#slidewrap .slide');
        
        $('#slidewrap .slide').css({marginLeft: 0});
        
        });
        
        }

        setInterval(next, 3000);

        
        //버튼 슬라이드
        
        $('.prev').click(function(){
        
        prev();
        
        });

        
        $('.next').click(function(){
        
        next();
        
        });
});


// product, activities 슬라이드 효과

$(function() {
    $('.navL_M > li:first-child > .navL_S, .navL_M > li:nth-of-type(2) > .navL_S').hide();

    $('.navL_M > li:first-child, .navL_M > li:nth-of-type(2)').hover(function(){
        $(this).children('.navL_S').stop().fadeIn(200);
    }, function(){
        $(this).children('.navL_S').stop().fadeOut(200);
    });
});


//  마우스 포인터 효과
const cursor = document.querySelector(".cursor");
const contentEm = document.querySelectorAll("header");
// const infoLi = document.querySelectorAll(".info.bottom li");

// 움직임 효과
$(function() {
    $('header').mousemove(function(e){
        gsap.to(".cursor", {duration: 0.4, left: e.pageX, top: e.pageY});
    });

    $('header').mouseover(function(e){
        $('.cursor').css("display", "block");
    });
    $('header').mouseout(function(e){
        $('.cursor').css("display", "none");
    });
    

    // 오버 효과
    $(".nav .navL .navL_M li, header .logo_1, .sns a, header .spMenu_btn ul").hover(function(){
        $(".cursor").addClass("active");
    }, function(){
        $(".cursor").removeClass("active");
    });
    
    // 제목에 마우스 오버 했을 때
    $(".sns ul li").hover(function(){
        $(this).children().css({'color': 'silver', 'transition': 'all 0.5s ease-in'});
    }, function(){
        $(this).children().css({'color': 'white', 'transition': 'all 0.5s ease-in'});
    });
});


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
  

    // 메뉴바
    $(function() {
        $('#side-nav > ul:first-child li:first-child > .navT_S, #side-nav > ul:first-child li:nth-of-type(2) > .navT_S').hide();
    
        $('#side-nav > ul:first-child li:first-child, #side-nav > ul:first-child li:nth-of-type(2)').click(function(){
            $(this).children('.navT_S').stop().slideToggle(800);
        });
    });