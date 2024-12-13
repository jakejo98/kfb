export function main(){
  swiperPopup();
  remoteTab();
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

// 메인페이지 사이드바
function remoteTab(){
  const remoteBtn = $('.btn-remote-tab');
  const isActive = 'active';

  $(remoteBtn).click(function(){
    $(this).addClass(isActive).parent().siblings().find(remoteBtn).removeClass(isActive);
  })
}