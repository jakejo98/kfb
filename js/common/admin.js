export function admin() {
  remoteControl();
  subMenuControl();
  headerGnbControl();
}

function remoteControl() {
  // remote-tab-item을 클릭할 때
  $('.remote-tab-item').on('click', function () {
    const index = $('.remote-tab-item').index(this);
    // 클릭한 remote-tab-item이 이미 active인지 확인
    if ($(this).hasClass('active')) {
      // active가 있다면 제거
      $(this).removeClass('active');
      $('.header-gnb-item').removeClass('active');
    } else {
      // 모든 remote-tab-item에서 active 클래스 제거
      $('.remote-tab-item').removeClass('active');
      // 클릭된 remote-tab-item에 active 클래스 추가
      $(this).addClass('active');
      // remote-tab-item과 매칭되는 header-gnb-item 활성화
      $('.header-gnb-item').removeClass('active'); // 모든 header-gnb-item의 active 제거
      $('.header-gnb-item').eq(index).addClass('active'); // 매칭된 header-gnb-item에 active 추가
    }
  });
}

function subMenuControl() {
  $('.sub-menu-link').on('click', function (e) {
    e.preventDefault(); // 링크 기본 동작 방지
    e.stopPropagation(); // 이벤트 전파 중단

    // 현재 클릭된 sub-menu-link의 remote-tab-item을 찾음
    const currentTabItem = $(this).closest('.remote-tab-item');

    // 클릭된 remote-tab-item의 sub-menu 내에서만 active 제거
    currentTabItem.find('.sub-menu-link').removeClass('active');
    // 클릭된 sub-menu-link에 active 클래스 추가
    $(this).addClass('active');
  });
}

function headerGnbControl() {
  // header-gnb-item을 클릭할 때
  $('.header-gnb-item').on('click', function () {
    const index = $('.header-gnb-item').index(this); // 클릭된 header-gnb-item의 인덱스
    if ($(this).hasClass('active')) {
      // active가 있다면 제거
      $(this).removeClass('active');
      $('.remote-tab-item').removeClass('active'); // 모든 remote-tab-item의 active 제거
    } else {
      // 모든 header-gnb-item에서 active 클래스 제거
      $('.header-gnb-item').removeClass('active');
      // 클릭된 header-gnb-item에 active 클래스 추가
      $(this).addClass('active');
      // header-gnb-item과 매칭되는 remote-tab-item 활성화
      $('.remote-tab-item').removeClass('active'); // 모든 remote-tab-item의 active 제거
      $('.remote-tab-item').eq(index).addClass('active'); // 매칭된 remote-tab-item에 active 추가
    }
  });
}