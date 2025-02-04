export function commonHeader(){
  zoomControl();
  categoryControl();
}

export function desktopHeader(){
  desktopHeaderBtnControl();
  checkDesktopCategory();
  gnbControl();
  subMenuControl();
}

export function respondHeader(){
  respondHeaderBtnControl();
  checkRespondCategory();
  resetGnbControl();
}

function gnbControl(){
  const gnbLink = $('.header-gnb-link');
  const isActive = 'active';

  $(gnbLink).click(function(){
    $(this).addClass(isActive).parent().siblings().find(gnbLink).removeClass(isActive);
  })
}

function resetGnbControl(){
  const gnbLink = $('.header-gnb-link');
  const isActive = 'active';

  $(gnbLink).removeClass(isActive);
}

function subMenuControl(){
  const gnb = $('.header-gnb')
  const gnbLink = $('.header-gnb-link');
  const subMenu = $('.sub-menu-wrap')

  $(gnbLink).mouseenter(function(){
    $(this).parent().find(subMenu).slideDown(300);
    $(this).parent().siblings().find(subMenu).slideUp(300);
  })

  $(gnb).mouseleave(function(){
    $(subMenu).slideUp(300);
  })
}

function desktopHeaderBtnControl(){
  const categoryActiveBtn = $('.btn-category');
  const categoryCloseBtn = $('.btn-category-close');
  const isRespond = 'respond';
  const isDesktop = 'desktop';

  $(categoryActiveBtn).removeClass(isRespond).addClass(isDesktop);
  $(categoryCloseBtn).removeClass(isRespond).addClass(isDesktop);
}

function respondHeaderBtnControl(){
  const categoryActiveBtn = $('.btn-category');
  const categoryCloseBtn = $('.btn-category-close');
  const isRespond = 'respond';
  const isDesktop = 'desktop';

  $(categoryActiveBtn).removeClass(isDesktop).addClass(isRespond);
  $(categoryCloseBtn).removeClass(isDesktop).addClass(isRespond);
}

function checkDesktopCategory(){
  const categoryRespond = $('.category-area.respond')
  $(categoryRespond).css('display', 'none');
}

function checkRespondCategory(){
  const categoryDesktop = $('.category-area.desktop');
  $(categoryDesktop).css('display', 'none');
}

function categoryControl(){
  const categoryDesktop = $('.category-area.desktop');
  const categoryRespond = $('.category-area.respond')
  const categoryActiveBtn = $('.btn-category');
  const categoryCloseBtn = $('.btn-category-close');
  const isDesktop = 'desktop';

  $(categoryActiveBtn).click(function(){
    if($(this).hasClass(isDesktop)){
      $(categoryDesktop).fadeIn(500);
    } else {
      $(categoryRespond).fadeIn(500);
    }
  })

  $(categoryCloseBtn).click(function(){
    if($(this).hasClass(isDesktop)){
      $(categoryDesktop).fadeOut(500);
    } else {
      $(categoryRespond).fadeOut(500);
    }
  })
}

function zoomControl() {
  const incBtn = $('.btn-header-zoom-in');
  const decBtn = $('.btn-header-zoom-out');
  const percent = $('.header-zoom-percent');
  const calPercent = 100;
  let index = parseFloat(localStorage.getItem('zoomLevel')) || 1; // Zoom 초기값 (localStorage에서 가져옴)

  // 초기 Zoom 값 적용
  $('body').css({
    'zoom': index
  });
  $(percent).text(Math.round(index * calPercent) + "%");

  // 확대 버튼 클릭 이벤트
  $(incBtn).click(function () {
    index += 0.05; // 0.05씩 증가
    index = parseFloat(index.toFixed(2)); // 소수점 두 자리로 고정
    updateZoom(index);
  });

  // 축소 버튼 클릭 이벤트
  $(decBtn).click(function () {
    index -= 0.05; // 0.05씩 감소
    index = parseFloat(index.toFixed(2)); // 소수점 두 자리로 고정
    updateZoom(index);
  });

  // Zoom 업데이트 함수
  function updateZoom(newZoom) {
    $('body').css({
      'zoom': newZoom
    });
    $(percent).text(Math.round(newZoom * calPercent) + "%"); // Zoom 값을 %로 표시
    localStorage.setItem('zoomLevel', newZoom); // Zoom 값 저장
  }
}


