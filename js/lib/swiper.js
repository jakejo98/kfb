export function swiper() {
  guidePopupSwiper();
  footerBannerSwiper();
}

function guidePopupSwiper() {
  const swiperContainer = document.querySelector('.popup-swiper');
  const controlBtn = $('.btn-swiper-control');
  const pauseBtn = $('.popup-swiper .btn-swiper-pause');
  const startBtn = $('.popup-swiper .btn-swiper-start');
  const isActive = 'active';

  if (swiperContainer) {
    const swiper = new Swiper(".popup-swiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 2000,
        disableOnInteraction: false
      },
      slidesPerView: 1,
      slidesPerGroup: 1, 
      loop: true,
    });

    $(controlBtn).click(function () {
      $(this).removeClass(isActive).siblings().addClass(isActive);
    });

    $(pauseBtn).click(function () {
      swiper.autoplay.stop(); 
    });

    $(startBtn).click(function () {
      swiper.autoplay.start();
    });
  }
}

function footerBannerSwiper() {
  const swiperContainer = document.querySelector('.footer-banner-swiper');
  const pauseBtn = $('#footer .btn-swiper-pause');
  const startBtn = $('#footer .btn-swiper-start');
  const isActive = 'active';

  if(swiperContainer) {
    var swiper = new Swiper(".footer-banner-swiper", {
      slidesPerGroup: 1, // 그룹으로 이동하는 슬라이드 개수
      autoplay: {
        delay: 2000, // 자동 재생 간격 2초
        disableOnInteraction: false, 
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      loop: true,
      breakpoints: {
        1200: {
          slidesPerView: 7,
        },
        768: {
          slidesPerView: 5,
        }, 
        0: {
          slidesPerView: 2,
        }
      }
    });

    $(pauseBtn).click(function(){
      $(this).removeClass(isActive);
      $(startBtn).addClass(isActive)
    })

    $(startBtn).click(function(){
      $(this).removeClass(isActive);
      $(pauseBtn).addClass(isActive);
    })

    $(pauseBtn).click(function () {
      swiper.autoplay.stop(); 
    });

    $(startBtn).click(function () {
      swiper.autoplay.start();
    });
  }
}
