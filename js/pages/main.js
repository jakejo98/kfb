export function commonMain() {
  swiperPopup();
  quickMenuControl();
  quickSearchControl();
  finProdControl();
}

export function desktopMain(){
  rateFeeControl();
  // fullPage();
  desktopMainTabIconHandler();
  desktopConsBtnHandler();
  desktopEduBtnHandler();
  desktopFinProdIconHandler();
}

export function respondMain(){
  resetRateFeeControl();
  // destroyFullPage();
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

function fullPage() {
  const sections = Array.from(document.querySelectorAll('.common-section')).filter(section => 
    section.parentElement.classList.contains('main-page')
  );

  const footer = document.querySelector('#footer');
  if (footer) sections.push(footer);

  const links = Array.from(document.querySelectorAll('.remote-tab-link'));
  let currentSectionIndex = 0;
  let isScrolling = false;

  if (sections.length === 0 || sections.length !== links.length + 1) return;

  const remoteTab = document.querySelector('#remote-tab');

  function goToSection(index) {
    if (index < 0 || index >= sections.length) return;
  
    sections.forEach((section, i) => {
      if (i === sections.length - 1) {
        // 푸터에는 active 클래스 추가 X
        section.classList.remove('active');
      } else if (index === sections.length - 1 && i === sections.length - 2) {
        // 마지막 섹션 유지 (푸터 이동 시에도)
        section.classList.add('active');
      } else {
        section.classList.toggle('active', i === index);
      }
    });
  
    links.forEach((link, i) => {
      link.classList.toggle('active', index === sections.length - 1 ? i === links.length - 1 : i === index);
    });
  
    window.scrollTo({
      top: sections[index].offsetTop,
      behavior: 'smooth'
    });
  
    currentSectionIndex = index;
  }
  
  

  // IntersectionObserver 설정
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const index = sections.indexOf(entry.target);
        if (remoteTab) {
          if (index === sections.length - 1) {
            remoteTab.classList.add('abs');
          } else {
            remoteTab.classList.remove('abs');
          }
        }
      }
    });
  }, { threshold: 0.8 });

  // 각 섹션에 Observer 연결
  sections.forEach(section => observer.observe(section));

  // 네비게이션 클릭 이벤트 등록
  links.forEach((link, index) => {
    link.addEventListener('click', function onClick(e) {
      e.preventDefault();
      goToSection(index);
    });
  });

  // 휠 스크롤 이벤트 등록
  function wheelHandler(e) {
    e.preventDefault();
    if (isScrolling) return;

    isScrolling = true;
    const sectionIndex = currentSectionIndex;

    if (e.deltaY > 0 && sectionIndex < sections.length - 1) {
      goToSection(sectionIndex + 1);
    } else if (e.deltaY < 0 && sectionIndex > 0) {
      goToSection(sectionIndex - 1);
    }

    setTimeout(() => {
      isScrolling = false;
    }, 1000);
  }

  window.addEventListener('wheel', wheelHandler, { passive: false });

  goToSection(0);

  // fullPage 기능 해제 함수 내부에서 사용될 데이터 저장
  fullPage._observer = observer;
  fullPage._wheelHandler = wheelHandler;
  fullPage._links = links;
  fullPage._sections = sections;
  fullPage._remoteTab = remoteTab;
}

function destroyFullPage() {
  if (!fullPage._observer) return;

  console.log("FullPage 기능 해제됨");

  // Observer 해제
  fullPage._observer.disconnect();

  // 네비게이션 클릭 이벤트 제거
  fullPage._links.forEach(link => link.replaceWith(link.cloneNode(true)));

  // 휠 스크롤 이벤트 제거
  window.removeEventListener('wheel', fullPage._wheelHandler);

  // 클래스 제거
  fullPage._sections.forEach(section => section.classList.remove('active'));
  if (fullPage._remoteTab) fullPage._remoteTab.classList.remove('abs');

  // 저장된 속성 제거
  delete fullPage._observer;
  delete fullPage._wheelHandler;
  delete fullPage._links;
  delete fullPage._sections;
  delete fullPage._remoteTab;
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

