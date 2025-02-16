export function selectChoiceHandler(){
    const expandedBtn = $('.btn-select-choice-group');
    const groupList = $('.select-choice-group-list');
    const isActive = 'active'
  
    $(expandedBtn).off('click');
  
    $(expandedBtn).click(function(){
      if(!$(this).siblings(groupList).hasClass(isActive)){
        $(this).siblings(groupList).addClass(isActive)
        $(this).parents('ul').siblings().find(groupList).removeClass(isActive);
      } else {
        $(this).siblings(groupList).removeClass(isActive)
      }
    })
  }
  
export function resetSelectChoiceHandler(){
const expandedBtn = $('.btn-select-choice-group');

$(expandedBtn).off('click');
}