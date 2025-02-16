export function desktopKfb(){
  desktopBreadHandler();
  resetTimeCateSelToggle();
}

export function respondKfb(){
  respondBreadHandler();
  timeCateSelToggle();
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

function timeCateSelToggle(){
  const timeCateSelBtn = $('.btn-timeCateSel-filter')
  const timeCateSelList = $('.timecateSel .list');
  const isActive = 'active';

  $(timeCateSelBtn).click(function(){
    if($(this).siblings(timeCateSelList).hasClass(isActive)) {
      $(timeCateSelList).removeClass(isActive)
    } else {
      $(timeCateSelList).addClass(isActive);
    }
  })
}

function resetTimeCateSelToggle(){
  const timeCateSelBtn = $('.btn-timeCateSel-filter');

  $(timeCateSelBtn).off('click');
}

function getTimeCateSel(){
  const timeCateSelLink = $('.timecateSel .list li a.show').text();
  const timeCateSelBtn = $('.btn-timeCateSel-filter')

  timeCateSelBtn.text(timeCateSelLink);
}