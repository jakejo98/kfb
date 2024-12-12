export function swiper() {
  swiperSetting();
}

function swiperSetting() {
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
      console.log('Swiper autoplay 중지');
    });

    $(startBtn).click(function () {
      swiper.autoplay.start();
      console.log('Swiper autoplay 시작');
    });
  }
}
