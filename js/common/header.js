export function header(){
  subMenuControl();
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