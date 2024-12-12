export function popup(){
  swiperPopup();
}

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