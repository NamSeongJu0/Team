// section 이미지 전환
$(function () {
// JavaScript (jQuery)에서 SameSite 속성이 적용된 쿠키 생성
$.cookie('cookie_name', 'cookie_value', {
    expires: 1, // 쿠키 만료 시간 설정 (예: 1일)
    path: '/', // 쿠키가 적용되는 경로 설정
    domain: '.example.com', // 쿠키가 적용되는 도메인 설정
    secure: true, // Secure 속성 설정 (HTTPS 연결에서만 쿠키 전송)
    samesite: 'None' // SameSite 속성 설정
  });  
});

$(function() {
    var slideWrap = $('#slidewrap .slide');
    var slideItems = $('#slidewrap .slide li');
    var slideCount = slideItems.length;
    var currentIndex = 0;
    var slideWidth = 1600;
    var slideAspectRatio = 16 / 9; // 가로:세로 비율 (16:9)
  
    function resizeSlide() {
      var windowWidth = $(window).width();
      var windowHeight = $(window).height();
      
      // 슬라이드 너비와 높이 조정
      slideWidth = Math.min(windowWidth, 1600); // 최대 너비를 1600으로 제한
      var slideHeight = slideWidth / slideAspectRatio; // 가로 너비에 따라 세로 높이 계산
      $('#slidewrap').css({
        width: slideWidth,
        height: slideHeight
      });
      slideItems.css({
        width: slideWidth,
        height: slideHeight
      });
    }
  
    // 윈도우 크기 변경 시 이벤트 처리
    $(window).on('resize', function() {
      resizeSlide();
    });
  
    // 초기 슬라이드 크기 조정
    resizeSlide();
  
    // 슬라이드 이동 함수
    function goToSlide(index) {
      if (index < 0) index = slideCount - 1;
      if (index >= slideCount) index = 0;
      currentIndex = index;
      var marginLeft = -slideWidth * currentIndex;
      slideWrap.stop().animate({ marginLeft: marginLeft }, 800);
    }
  
    // 이전 슬라이드 보기 함수
    function prev() {
      goToSlide(currentIndex - 1);
    }
  
    // 다음 슬라이드 보기 함수
    function next() {
      goToSlide(currentIndex + 1);
    }
  
    // 이전 버튼 클릭 이벤트
    $('.prev').click(function() {
      prev();
    });
  
    // 다음 버튼 클릭 이벤트
    $('.next').click(function() {
      next();
    });
  
    // 자동 슬라이드 기능 (3초마다 변경)
    setInterval(function() {
      next();
    }, 3000);
  });
  

  $(function() {
    var slideWrap = $('#slidewrap .slide');
    var slideItems = $('#slidewrap .slide li');
    var slideCount = slideItems.length;
    var currentIndex = 0;
    var slideWidth = 1600;
    var slideAspectRatio = 4 / 3; // 가로:세로 비율 (16:9)
  
    function resizeSlide() {
      var windowWidth = $(window).width();
      var slideWidth;
      var slideHeight;
  
      // 슬라이드 너비와 높이 조정
      if (windowWidth <= 767) {
        slideWidth = windowWidth * 0.65;
        slideHeight = slideWidth / slideAspectRatio;
      } else if (windowWidth <= 1199) {
        slideWidth = windowWidth * 0.65;
        slideHeight = slideWidth / slideAspectRatio;
      } else {
        slideWidth = 1600;
        slideHeight = slideWidth / slideAspectRatio;
      }
  
      $('#slidewrap').css({
        width: slideWidth,
        height: slideHeight
      });
  
      slideItems.css({
        width: slideWidth,
        height: slideHeight
      });
    }
  
    // 윈도우 크기 변경 시 이벤트 처리
    $(window).on('resize', function() {
      resizeSlide();
    });
  
    // 초기 슬라이드 크기 조정
    resizeSlide();
  
    // 슬라이드 이동 함수
    function goToSlide(index) {
      if (index < 0) index = slideCount - 1;
      if (index >= slideCount) index = 0;
      currentIndex = index;
      var marginLeft = -slideWidth * currentIndex;
      slideWrap.stop().animate({ marginLeft: marginLeft }, 800);
    }
  
    // 이전 슬라이드 보기 함수
    function prev() {
      goToSlide(currentIndex - 1);
    }
  
    // 다음 슬라이드 보기 함수
    function next() {
      goToSlide(currentIndex + 1);
    }
  
    // 이전 버튼 클릭 이벤트
    $('.prev').click(function() {
      prev();
    });
  
    // 다음 버튼 클릭 이벤트
    $('.next').click(function() {
      next();
    });
  
    // 자동 슬라이드 기능 (3초마다 변경)
    setInterval(function() {
      next();
    }, 3000);
  });
  
  
  


// 스크롤에 따른 이미지 나타내기

$(document).ready(function () {
    $(window).scroll(function () {
        $('.hotel_1').each(function () {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 2;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({'opacity': '1'}, 750);
            }
        });

        $('.hotel_2').each(function () {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 2;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({'opacity': '1'}, 750);
            }
        });

        $('.hotel_3').each(function () {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 2;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({'opacity': '1'}, 750);
            }
        });

        $('.hotel_4').each(function () {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 2;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({'opacity': '1'}, 750);
            }
        });

        $('.hotel_5').each(function () {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 2;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({'opacity': '1'}, 750);
            }
        });
    });
});