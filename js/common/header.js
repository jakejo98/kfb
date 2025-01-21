export function header(){
  gnbControl();
  subMenuControl();
  categoryControl();
  zoomControl();
}

function gnbControl(){
  const gnbLink = $('.header-gnb-link');
  const isActive = 'active';

  $(gnbLink).click(function(){
    $(this).addClass(isActive).parent().siblings().find(gnbLink).removeClass(isActive);
  })
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

function categoryControl(){
  const category = $('.category-area');
  const categoryActiveBtn = $('.btn-category');
  const categoryCloseBtn = $('.btn-category-close');

  $(categoryActiveBtn).click(function(){
    $(category).fadeIn(500);
  })

  $(categoryCloseBtn).click(function(){
    $(category).fadeOut(500);
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


