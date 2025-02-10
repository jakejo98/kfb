export function desktopKfb(){
  desktopBreadHandler();
}

export function respondKfb(){
  respondBreadHandler();
  timeCateSelExpanded();
  getTimeCateSel();
}

function desktopBreadHandler(){
  const bread = $('#bread-crumb');
  const breadItem = $('.bread-crumb-list-item');
  const breadIcon = $('.common-icon');
  const ty20 = 'ty-20';
  const ty24 = 'ty-24';

  if(bread) {
    $(breadItem).eq(0).find(breadIcon).removeClass(ty20).addClass(ty24);
  }
}

function respondBreadHandler(){
  const bread = $('#bread-crumb');
  const breadItem = $('.bread-crumb-list-item');
  const breadIcon = $('.common-icon');
  const ty20 = 'ty-20';
  const ty24 = 'ty-24';

  if(bread) {
    $(breadItem).eq(0).find(breadIcon).removeClass(ty24).addClass(ty20);
  }
}

function timeCateSelExpanded(){
  const timeCateSel = $('.timecateSel');
  const timeCateSelBtn = $('.btn-timeCateSel-filter')
  const timeCateSelList = $('.timecateSel .list');
  const isActive = 'active';

  if(timeCateSel.length > 0) {
    $(timeCateSelBtn).click(function(){
      $(this).parent().find(timeCateSelList).addClass(isActive);
    })
  } 
}

function getTimeCateSel(){
  const timeCateSel = $('.timecateSel');
  const timeCateSelLink = $('.timecateSel .list li a.show').text();
  const timeCateSelBtn = $('.btn-timeCateSel-filter')

  if(timeCateSel.length > 0) {
    timeCateSelBtn.text(timeCateSelLink);
  }
}