export function desktopKfb(){
  desktopBreadHandler();
}

export function respondKfb(){
  respondBreadHandler();
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