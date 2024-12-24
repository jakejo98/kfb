export function header(){
  gnbControl();
  subMenuControl();
}

function gnbControl(){
  const gnbLink = $('.header-gnb-link');
  const isActive = 'active';

  $(gnbLink).click(function(){
    $(this).addClass(isActive).parent().siblings().find(gnbLink).removeClass(isActive);
  })
}

function subMenuControl(){
  const gnb = $('.header-gnb-area');
  const gnbLink = $('.header-gnb-link');
  const subMenu = $('.sub-menu-wrap');
  const isActive = 'active';

  $(gnbLink).mouseenter(function(){
    $(this).parent().find(subMenu).addClass(isActive);
    $(this).parent().siblings().find(subMenu).removeClass(isActive);
  })

  $(gnb).mouseleave(function(){
    $(subMenu).removeClass(isActive);
  })
}