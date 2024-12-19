export function main(){
  swiperPopup();
  fullpage();
}

// 메인페이지 팝업창
function swiperPopup(){
  const popup = $('.ly-pop-wrap');
  const btnIconClose = $('.btn-icon-popup-close');
  const btnDismiss = $('.btn-dismiss-today');
  const btnClose = $('.btn-popup-close');
  const isActive = 'active';

  $(btnIconClose).click(function(){
    $(popup).removeClass(isActive);
  })
  
  $(btnDismiss).click(function(){
    $(popup).removeClass(isActive);
  })

  $(btnClose).click(function(){
    $(popup).removeClass(isActive);
  })
}

function fullpage() {
  var sectionHeight = $('.common-section').outerHeight(); // 각 섹션의 높이

  // 네비게이션 클릭 시 해당 섹션으로 스크롤 이동
  $('.remote-tab-link').on('click', function(e) {
    e.preventDefault(); // 기본 동작인 앵커 링크 이동 방지
    
    // 클릭된 링크의 href 속성 값 (즉, 해당 섹션의 ID)
    var targetSection = $(this).attr('href');
    
    // 애니메이션을 이용하여 스크롤 이동
    var targetOffset = $(targetSection).offset().top;
    $('html, body').animate({
      scrollTop: targetOffset
    }, 500);
    
    // 네비게이션 메뉴에서 active 클래스 처리
    $('.remote-tab-link').removeClass('active');  // 기존 active 클래스 제거
    $(this).addClass('active');  // 클릭된 항목에 active 클래스 추가
  });

  // 스크롤 시 섹션 높이만큼 이동
  var isScrolling = false; // 연속된 스크롤을 방지하기 위한 변수

  $(window).on('wheel', function(e) {
    if (isScrolling) return; // 연속된 스크롤 방지

    var scrollDirection = e.originalEvent.deltaY; // 휠 방향 감지
    var currentScroll = $(window).scrollTop(); // 현재 스크롤 위치
    var nextScroll = currentScroll;

    // 휠 방향에 따라 섹션의 높이만큼 이동
    if (scrollDirection > 0) {
      // 아래로 스크롤 (다음 섹션으로 이동)
      nextScroll = Math.ceil(currentScroll / sectionHeight) * sectionHeight + sectionHeight;
    } else {
      // 위로 스크롤 (이전 섹션으로 이동)
      nextScroll = Math.floor(currentScroll / sectionHeight) * sectionHeight - sectionHeight;
    }

    // 이동 범위를 벗어나지 않도록 조정
    nextScroll = Math.max(0, nextScroll); // 최소값을 0으로 설정
    nextScroll = Math.min(nextScroll, $('.common-section').length * sectionHeight - $(window).height()); // 최대값을 마지막 섹션으로 설정

    // 부드럽게 스크롤 이동
    isScrolling = true;
    $('html, body').animate({
      scrollTop: nextScroll
    }, 500, function() {
      isScrolling = false; // 애니메이션 종료 후 스크롤 허용
    });
  });

  // 페이지 로드 시 현재 스크롤 위치에 맞는 탭에 active 클래스 적용
  $(window).on('scroll', function() {
    var scrollPosition = $(window).scrollTop();
    $('.common-section').each(function() {
      var sectionTop = $(this).offset().top;
      var sectionBottom = sectionTop + $(this).outerHeight();
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        var currentId = $(this).attr('id');
        $('.remote-tab-link').removeClass('active');
        $('.remote-tab-link[href="#' + currentId + '"]').addClass('active');
      }
    });
  });
}




