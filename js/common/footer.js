export function footer(){
  footerSiteControl();
}

function footerSiteControl(){
  const expandedItem = $('.footer-site-item')
  const expandedBtn = $('.btn-footer-site');
  const subList = $('.footer-site-sub');
  const isActive = 'active'

  $(expandedBtn).click(function(){
    $(this).parent().find(subList).addClass(isActive);
  })

  $(expandedItem).mouseleave(function(){
    $(this).parent().find(subList).removeClass(isActive);
  })
}