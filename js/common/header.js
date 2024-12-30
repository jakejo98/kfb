export function header(){
  gnbControl();
  subMenuControl();
  categoryControl();
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