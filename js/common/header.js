export function commonHeader(){
  zoomControl();
  subMenuControl();
}

export function desktopHeader(){
  desktopHeaderBtnControl();
  desktopCategoryControl();
  disableDesktopCategory();
}

export function respondHeader(){
  respondHeaderBtnControl();
  respondCategoryControl();
  disableRespondCategory();
  respondCategoryHandler();
  repondCategoryBlockLink();
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

function disableDesktopCategory(){
  const doc = $('html');
  const categoryRespond = $('.category-area.respond')
  const respondFirstDepthLink = $('.category-area.respond .category-link');
  const respondSecondDepth = $('.category-area.respond .category-sub');
  const respondThirdDepth = $('.category-sub-detail');
  const isActive = 'active';

  $(categoryRespond).css('display', 'none');
  $(respondFirstDepthLink).off('click');
  $(respondFirstDepthLink).removeClass(isActive);
  $(respondSecondDepth).removeClass(isActive);
  $(respondThirdDepth).removeClass(isActive);
  $(doc).css('overflow-y', 'scroll');
}

function disableRespondCategory(){
  const doc = $('html');
  const categoryDesktop = $('.category-area.desktop');
  $(categoryDesktop).css('display', 'none');
  $(doc).css('overflow-y', 'scroll');
}

function desktopCategoryControl(){
  const doc = $('html');
  const desktopCategory = $('.category-area.desktop');
  const desktopActiveBtn = $('.btn-category.desktop');
  const desktopCloseBtn = $('.btn-category-close.desktop');
  const isDekstop = 'desktop';

  $(desktopActiveBtn).click(function(){
    if($(this).hasClass(isDekstop)){
      $(desktopCategory).fadeIn(500);
      $(doc).css('overflow-y', 'hidden');
    }
  })

  $(desktopCloseBtn).click(function(){
    if($(this).hasClass(isDekstop)) {
      $(desktopCategory).css('display', 'none');
      $(doc).css('overflow-y', 'scroll');
    }
  })
}

function respondCategoryControl(){ 
  const doc = $('html');
  const respondCategory = $('.category-area.respond');
  const respondActiveBtn = $('.btn-category.respond');
  const respondCloseBtn = $('.btn-category-close.respond');
  const respondFirstDepthLink = $('.category-area.respond .category-link');
  const respondSecondDepth = $('.category-area.respond .category-sub');
  const respondThirdDepth = $('.category-sub-detail');
  const isRespond = 'respond';
  const isActive = 'active';

  $(respondActiveBtn).click(function(){
    if($(this).hasClass(isRespond)) {
      $(respondCategory).fadeIn(500);
      $(doc).css('overflow-y', 'hidden');
    }
  })

  $(respondCloseBtn).click(function(){
    if($(this).hasClass(isRespond)) {
      $(respondCategory).css('display', 'none');
      $(respondFirstDepthLink).removeClass(isActive);
      $(respondSecondDepth).removeClass(isActive);
      $(respondThirdDepth).removeClass(isActive);
      $(doc).css('overflow-y', 'scroll');
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

function respondCategoryHandler(){
  firstDepthHandler();
  secondDepthHandler();
  thirdDepthHandler();

  function firstDepthHandler(){
    const firstDepthLink = $('.category-area.respond .category-link');
    const secondDepth = $('.category-area.respond .category-sub');
    const isActive = 'active';
  
    $(firstDepthLink).click(function(){
      if($(this).hasClass(isActive)) {
        $(this).removeClass(isActive)
        $(this).parent().find(secondDepth).removeClass(isActive);
      } else {
        $(this).addClass(isActive);
        $(this).parent().find(secondDepth).addClass(isActive);
      }
    })
  }

  function secondDepthHandler(){
    const secondDepthLink = $('.category-area.respond .category-sub-link');
    const thirdDepth = $('.category-area.respond .category-sub-detail');
    const hasChild = 'has-sub-link'
    const isActive = 'active';

    $(secondDepthLink).click(function(){
      if($(this).hasClass(hasChild)) {
        $(this).parent().find(thirdDepth).addClass(isActive);
      }
    })
  }

  function thirdDepthHandler(){
    const thirdDepth = $('.category-area.respond .category-sub-detail');
    const prveBtn = $('.category-area.respond .category-sub-detail .btn-category-sub-detail-prev');
    const isActive = 'active';

    $(prveBtn).click(function(){
      $(this).parent(thirdDepth).removeClass(isActive);
    })

    $(thirdDepth).click(function(event){
      let horizontalOffset = event.pageX;
      
      if(horizontalOffset <= 60 ) {
        $(thirdDepth).removeClass(isActive);
      }
    })
  }
}

function repondCategoryBlockLink(){
  const firstDepthLink = $('.category-area.respond .category-link');
  const secondDepthLink = $('.category-area.respond .category-sub-link')
  const isHasSubLink = 'has-sub-link'

  $(firstDepthLink).click(function(event){
    event.preventDefault();
  })

  $(secondDepthLink).click(function(event){
    if($(this).hasClass(isHasSubLink)) {
      event.preventDefault();
    }
  })
}

export function headerPageHandler(){
  isHeaderPage();
  getHeaderPageTitle();

  function isHeaderPage() {
    const currentFile = window.location.pathname.split("/").pop();
    const headerPage = $('.header-page-wrap');

    if(!currentFile.startsWith("main")){
      $(headerPage).css('display', 'flex');
    } else {
      $(headerPage).css('display', 'none');
    }
  }

  function getHeaderPageTitle(){
    const currentFile = window.location.pathname.split("/").pop();
    const headerPageTitle = $('.header-page-wrap .header-page-title');

    if(!currentFile.startsWith("main")) {
      const getTitle = $('#bread-crumb .bread-crumb-list-item span.active').text();
      $(headerPageTitle).text('').text(getTitle);
    }
  }
}

export function destroyHeaderPageHandler(){
  const headerPage = $('.header-page-wrap');

  $(headerPage).css('display', 'none');
}