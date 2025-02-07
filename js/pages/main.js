export function commonMain() {
  swiperPopup();
  quickMenuControl();
  quickSearchControl();
  finProdControl();
}

export function desktopMain(){
  rateFeeControl();
  desktopMainTabIconHandler();
  desktopConsBtnHandler();
  desktopEduBtnHandler();
  desktopFinProdIconHandler();
}

export function respondMain(){
  resetRateFeeControl();
  respondMainTabIconHandler();
  respondConsBtnHandler();
  respondEduBtnHandler();
  respondFinProdIconHandler();
}

// 메인페이지 팝업창
function swiperPopup() {
  const popup = $('.ly-pop-wrap');
  const btnIconClose = $('.btn-icon-popup-close');
  const btnDismiss = $('.btn-dismiss-today');
  const btnClose = $('.btn-popup-close');
  const isActive = 'active';

  $(btnIconClose).click(function () {
    $(popup).removeClass(isActive);
  })

  $(btnDismiss).click(function () {
    $(popup).removeClass(isActive);
  })

  $(btnClose).click(function () {
    $(popup).removeClass(isActive);
  })
}

function desktopMainTabIconHandler() {
  const mainIcon = $('.section-main .quick-menu-wrap .common-icon');
  const ty60 = 'ty-60';
  const ty90 = 'ty-90';

  $(mainIcon).removeClass(ty60).addClass(ty90);
}

function respondMainTabIconHandler(){
  const mainIcon = $('.section-main .quick-menu-wrap .common-icon');
  const ty60 = 'ty-60';
  const ty90 = 'ty-90';

  $(mainIcon).removeClass(ty90).addClass(ty60);
}

function quickMenuControl() {
  const secHeading = $('.section-main .section-heading-item');
  const quickMenuBtnItem = $('.section-main .quick-menu-tab-item');
  const quickMenuBtn = $('.section-main .btn-quick-menu');
  const quickMenuAreaItem = $('.section-main .quick-menu-area-item');
  const isActive = 'active';
  const v1 = 'radius_v1';
  const v2 = 'radius_v2';

  btnTab();

  function btnTab() {
    $(quickMenuBtn).click(function () {
      $(this).addClass(isActive).parent().siblings().find(quickMenuBtn).removeClass(isActive);
      const btnIndex = $(this).parent().index();

      $(quickMenuAreaItem).eq(btnIndex).addClass(isActive).siblings().removeClass(isActive);

      $(secHeading).eq(btnIndex).addClass(isActive).siblings().removeClass(isActive);

      if (quickMenuBtnItem.eq(0).find(quickMenuBtn).hasClass(isActive)) {
        quickMenuBtnItem.eq(1).find(quickMenuBtn).removeClass('radius_v2').addClass('radius_v1');
      } else if(quickMenuBtnItem.eq(1).find(quickMenuBtn).hasClass(isActive)) {
        quickMenuBtnItem.eq(1).find(quickMenuBtn).removeClass('radius_v1, radius_v2');
      } else if(quickMenuBtnItem.eq(2).find(quickMenuBtn).hasClass(isActive)) {
        quickMenuBtnItem.eq(1).find(quickMenuBtn).removeClass('radius_v1').addClass('radius_v2');
      }
      
    })
  }
}

function quickSearchControl(){
  const searchBtn = $('.section-main .btn-quick-search-tab');
  const searchFormItem = $('.section-main .quick-search-item')
  const isActive = 'active';

  $(searchBtn).click(function(){
    const BtnIndex = $(this).parent().index();

    $(this).addClass(isActive).parent().siblings().find(searchBtn).removeClass(isActive);
    $(searchFormItem).eq(BtnIndex).addClass(isActive).siblings().removeClass(isActive)
  })
}

function rateFeeControl(){
  const rateFeeLink = $('.section-rate-fee .rate-fee-box-link');
  const rateFeeIcon = $('.section-rate-fee .common-icon');
  const isBlack = 'icon-arrow-right-black';
  const isBlue = 'icon-arrow-right-blue';

  $(rateFeeLink).mouseenter(function(){
    $(this).find(rateFeeIcon).removeClass(isBlack).addClass(isBlue);
  })

  $(rateFeeLink).mouseleave(function(){
    $(this).find(rateFeeIcon).removeClass(isBlue).addClass(isBlack);
  })
}

function resetRateFeeControl(){
  const rateFeeLink = $('.section-rate-fee .rate-fee-box-link');

  $(rateFeeLink).off('click mouseenter mouseleave');
}

function finProdControl(){
  const faqLibraryBtn = $('.section-fin-prod .btn-faq-library-tab');
  const faqLibraryItem = $('.section-fin-prod .faq-library-item');
  const faqLibraryMoreLink = $('.section-fin-prod .faq-library-more-link');
  const isActive = 'active';
  let btnIndex = 0;

  $(faqLibraryBtn).click(function(){
    btnIndex = $(this).parent().index();
    
    $(this).addClass(isActive).parent().siblings().find(faqLibraryBtn).removeClass(isActive);
    $(faqLibraryItem).eq(btnIndex).addClass(isActive).siblings().removeClass(isActive);

    // 추후 실제 URL
    if(btnIndex === 0) {
      $(faqLibraryMoreLink).attr('href', '/minwon/faq.php')
    } else if(btnIndex === 1) {
      $(faqLibraryMoreLink).attr('href', '/finedu/data.php')
    }
  })
}

function desktopFinProdIconHandler(){
  const finprodItem = $('.financial-product-wrap .financial-product-item');
  const finprodIcon = $('.common-icon');
  const typeBlack = 'icon-arrow-right-black';
  const typeWhite = 'icon-arrow-right-white';

  $(finprodItem).eq(0).find(finprodIcon).removeClass(typeBlack).addClass(typeWhite);
  $(finprodItem).eq(1).find(finprodIcon).removeClass(typeBlack).addClass(typeWhite);
}

function respondFinProdIconHandler(){
  const finprodItem = $('.financial-product-wrap .financial-product-item');
  const finprodIcon = $('.common-icon');
  const typeBlack = 'icon-arrow-right-black';
  const typeWhite = 'icon-arrow-right-white';

  $(finprodItem).eq(0).find(finprodIcon).removeClass(typeWhite).addClass(typeBlack);
  $(finprodItem).eq(1).find(finprodIcon).removeClass(typeWhite).addClass(typeBlack);
}

function desktopConsBtnHandler(){
  const consumerBtn = $('.section-cons-info .btn-shortcut');
  const consumerIcon = $('.section-cons-info .common-icon');
  const typeSmall = 'ty-sm'
  const typeLarge = 'ty-lg';
  const ty18 = 'ty-18';
  const ty24 = 'ty-24';

  $(consumerBtn).removeClass(typeSmall).addClass(typeLarge);
  $(consumerIcon).removeClass(ty18).addClass(ty24);
}

function respondConsBtnHandler(){
  const consumerBtn = $('.section-cons-info .btn-shortcut');
  const consumerIcon = $('.section-cons-info .common-icon');
  const typeSmall = 'ty-sm'
  const typeLarge = 'ty-lg';
  const ty18 = 'ty-18';
  const ty24 = 'ty-24';

  $(consumerBtn).removeClass(typeLarge).addClass(typeSmall);
  $(consumerIcon).removeClass(ty24).addClass(ty18);
}

function desktopEduBtnHandler(){
  const eduBtn = $('.section-fin-edu .btn-shortcut');
  const eduIcon = $('.section-cons-info .common-icon');
  const typeSmall = 'ty-sm'
  const typeLarge = 'ty-lg';
  const ty18 = 'ty-18';
  const ty24 = 'ty-24';

  $(eduBtn).removeClass(typeSmall).addClass(typeLarge);
  $(eduIcon).removeClass(ty18).addClass(ty24);
}

function respondEduBtnHandler(){
  const eduBtn = $('.section-fin-edu .btn-shortcut');
  const eduIcon = $('.section-cons-info .common-icon');
  const typeSmall = 'ty-sm'
  const typeLarge = 'ty-lg';
  const ty18 = 'ty-18';
  const ty24 = 'ty-24';

  $(eduBtn).removeClass(typeLarge).addClass(typeSmall);
  $(eduIcon).removeClass(ty24).addClass(ty18);
}

