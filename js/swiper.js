const swiper = new Swiper(".popup-swiper", {
  navigation: {
    nextEl: ".swiper-button-next", // 다음 버튼 클래스
    prevEl: ".swiper-button-prev", // 이전 버튼 클래스
  },
  pagination: {
    el: ".swiper-pagination", // 페이지네이션 요소 설정
    clickable: true, // 페이지네이션 클릭 활성화
  },
  spaceBetween: 16, // 슬라이드 간의 간격
  loop: true, // 슬라이드 루프 설정
  // autoplay: {
  //   delay: 3000, // 자동 재생 간격 (ms)
  // },
});
