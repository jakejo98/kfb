export function remote(){
  remoteHandler();
}

function remoteHandler(){
  const isRemote = $('#remote-wrap');
  const firstDepItem = $('.remote-item');
  const firstDepLink = $('.remote-link');
  const secondDep = $('.remote-sub');
  const secondDepItem = $('.remote-sub-item');
  const secondDepLink = $('.remote-sub-link');
  const isActive = 'active';

  if(isRemote) {
    // 리스트 활성화
    $(firstDepLink).click(function(){
      if($(this).hasClass(isActive)) {
        $(this).removeClass(isActive);
        $(this).find(secondDep).removeClass(isActive);
        $(this).find(secondDepLink).removeClass(isActive);
      }
      else if($(this).parent().has(secondDep).length > 0) {
      $(this).addClass(isActive).parent().siblings().find(firstDepLink).removeClass(isActive);
      $(this).parent().find(secondDep).addClass(isActive).parent().siblings().find(secondDep).removeClass(isActive);
      $(this).parent().find(secondDepItem).eq(0).find(secondDepLink).addClass(isActive).parents(firstDepItem).siblings().find(secondDepLink).removeClass(isActive);
      } 
      else {
        $(this).addClass(isActive).parent().siblings().find(firstDepLink).removeClass(isActive);
        $(secondDep).removeClass(isActive);
      }
    })
    // sub-menu-link 활성화
    $(secondDepLink).click(function(){
      $(this).addClass(isActive).parent().siblings().find(secondDepLink).removeClass(isActive);
    })
  }
}