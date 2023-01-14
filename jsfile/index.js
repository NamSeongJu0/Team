// product, activities 슬라이드 효과

$(function() {
    $('.navL_M > li:first-child > .navL_S, .navL_M > li:nth-of-type(2) > .navL_S').hide();

    $('.navL_M > li:first-child, .navL_M > li:nth-of-type(2)').hover(function(){
        $(this).children('.navL_S').stop().slideDown();
    }, function(){
        $(this).children('.navL_S').stop().slideUp();
    });
});


//  마우스 포인터 효과

// 움직임 효과
$(document).mousemove(function(e){
    gsap.to(".cursor", {duration: 0.4, left: e.pageX, top: e.pageY})
});

// 오버 효과
$(".contents em").hover(function(){
    $(".cursor").addClass("active");
}, function(){
    $(".cursor").removeClass("active");
});

// 출력용
$(".info.bottom li").click(function(){

    const text = $(this).text();
    
    $(".info.bottom li").removeClass("active");
    $(this).addClass("active");
    $(".cursor").css("mix-blend-mode", text);
});

// 제목에 마우스 오버 했을 때
$(".info.left").hover(function(){
    $(".cursor").addClass("active2");
}, function(){
    $(".cursor").removeClass("active2");
});