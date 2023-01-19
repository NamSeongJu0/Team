// header active 효과
$(function() {
    $(window).resize(function(){
        if(window.innerWidth > 1099){
           $('.spMenu_btn').hide();
           $('.nav, .nav_R .navL').show();
        //    $('header container .logo_1').addClass('on');
        }
        else{
            $('.spMenu_btn').show();
            $('.nav, .nav_R .navL').hide();
            // $('header container .logo_1').removeClass('on');
        }
       });
});


// 이미지 전환
$(function () {
    function prev(){

        $('#slidewrap .slide li:last').prependTo('#slidewrap .slide');
        
        $('#slidewrap .slide').css('margin-left', -1000); // $('.slide').css({marginLeft:-1000}); 
        
        $('#slidewrap .slide').stop().animate({marginLeft: 0},800);
        
        }

        function next(){
        
        $('#slidewrap .slide').stop().animate({marginLeft: -1000},800, function(){
        
        $('#slidewrap .slide li:first').appendTo('#slidewrap .slide');
        
        $('#slidewrap .slide').css({marginLeft: 0});
        
        });
        
        }

        setInterval(next, 3000); //자동슬라이드

        
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
    $(document).mousemove(function(e){
        gsap.to(".cursor", {duration: 0.4, left: e.pageX, top: e.pageY});
    });
    
    // 오버 효과
    $(".nav .navL .navL_M > li:first-child").hover(function(){
        $(".cursor").addClass("active");
    }, function(){
        $(".cursor").removeClass("active");
    });
    
    // 출력용
    // $(".info.bottom li").click(function(){
    
    //     const text = $(this).text();
        
    //     $(".info.bottom li").removeClass("active");
    //     $(this).addClass("active");
    //     $(".cursor").css("mix-blend-mode", text);
    // });
    
    // 제목에 마우스 오버 했을 때
    $(".sns ul li").hover(function(){
        $(this).children().css({'color': 'silver', 'transition': 'all 0.5s ease-in'});
    }, function(){
        $(this).children().css({'color': 'white', 'transition': 'all 0.5s ease-in'});
    });
});
