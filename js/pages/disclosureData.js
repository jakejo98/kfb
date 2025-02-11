export function disclosureData(){
  filterHandler();
  resetBankSelCheckBox();
}

export function resetDisclosureData(){
  resetFilterHandler();
}

function filterHandler(){
  const selFilter = $('.selFilter');
  const selFilterBtn = $('.btn-selFilter');
  const selFilterTxt = $('.btn-selFilter-txt');
  const bankArea = $('.bankSel');
  const itemArea = $('.itemArea');
  const btnArea = $('.btnArea');
  const isShow = 'show';
  const isHide = 'hide';

  $(selFilterBtn).click(function(){
    if($(this).hasClass(isShow)) {
      $(selFilter).css('border-radius', '16px 16px 16px 16px');
      $(this).removeClass(isShow).addClass(isHide);
      $(bankArea).css('display', 'none');
      $(itemArea).css('display', 'none');
      $(btnArea).css('display', 'none');
      $(selFilterTxt).text('필터 보기');
    } else {
      $(this).removeClass(isHide).addClass(isShow);
      $(selFilter).css('border-radius', '16px 16px 0px 0px');
      $(bankArea).css('display', 'block');
      $(itemArea).css('display', 'block');
      $(btnArea).css('display', 'block');
      $(selFilterTxt).text('필터 닫기');
    }
  })
}

function resetFilterHandler(){
  const selFilter = $('.selFilter');
  const selFilterBtn = $('.btn-selFilter');
  const selFilterTxt = $('.btn-selFilter-txt');
  const bankArea = $('.bankSel');
  const itemArea = $('.itemArea');
  const btnArea = $('.btnArea');
  const isShow = 'show';
  const isHide = 'hide';

  $(selFilter).css('border-radius', '16px 16px 0px 0px');
  $(selFilterBtn).removeClass(isHide).addClass(isShow);
  $(selFilterTxt).text('필터 닫기');
  $(bankArea).css('display', 'block');
  $(itemArea).css('display', 'block');
  $(btnArea).css('display', 'block');
}

function resetBankSelCheckBox(){
  const resetBtn = $('.btn-selFilter-reset');

  $(resetBtn).click(function(){
    $('.bankSel input[type="checkbox"]').prop('checked', false);
  })
}