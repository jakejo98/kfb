export function footer(){
  footerSiteControl();
}

function footerSiteControl(){
  const expandedItem = $('.footer-site-item');
  const expandedBtn = $('.btn-footer-site');
  const subList = $('.footer-site-sub');

  $(expandedBtn).click(function(){
    $(this).parent().find(subList).slideToggle(250);
    $(this).parent().siblings().find(subList).slideUp(250);
  })

  $(expandedItem).mouseleave(function(){
    $(subList).slideUp(250);
  })
}