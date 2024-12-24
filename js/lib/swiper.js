export function swiper() {
  guidePopupSwiper();
  footerBannerSwiper();
}

function guidePopupSwiper() {
  const swiperContainer = document.querySelector('.popup-swiper');

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
      spaceBetween: 16,
      loop: true,
      autoplay: {
        delay: 2000,
      },
    });

    swiperControls(swiper); 
  }

  function swiperControls(swiper) {
    const controlBtn = $('.btn-swiper-control');
    const pauseBtn = $('.btn-swiper-pause');
    const startBtn = $('.btn-swiper-start');
    const isActive = 'active';

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

function footerBannerSwiper(){
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1, // 한번에 보이는 슬라이드 수
    loop: true, // 슬라이드 루프 활성화
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
}