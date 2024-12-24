export function main() {
  swiperPopup();
  fullPage();
  categoryControl();
  quickMenuControl();
  quickSearchControl();
  rateFeeControl();
  consInfoControl();
  finProdControl();
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

// 풀페이지 원본
// function fullPage() {
//   const sections = Array.from(document.querySelectorAll('.common-section')).filter(section =>
//     section.parentElement.classList.contains('main-page')
//   );

//   // #footer를 섹션 목록에 마지막으로 추가합니다.
//   const footer = document.querySelector('#footer');
//   if (footer) {
//     sections.push(footer);
//   }

//   const links = document.querySelectorAll('.remote-tab-link');

//   const footerLink = document.createElement('a');
//   footerLink.href = '#';
//   footerLink.classList.add('remote-tab-link');
//   footerLink.textContent = 'Footer Section';  // 푸터 섹션에 대한 링크 텍스트 추가
//   document.querySelector('#footer').appendChild(footerLink);  // 추가한 링크를 #footer에 붙여 넣음
  
//   // links에 footerLink 추가
//   const newLinks = [...links, footerLink];

//   let currentSectionIndex = 0;
//   let isScrolling = false;

//   if (sections.length === 0 || sections.length !== newLinks.length) {
//     console.error('조건에 맞는 섹션이 없거나 섹션과 링크의 수가 일치하지 않습니다!');
//     return;
//   }

//   function goToSection(index) {
//     if (index < 0 || index >= sections.length) {
//       return;
//     }

//     sections.forEach(section => section.classList.remove('active'));
//     sections[index].classList.add('active');

//     newLinks.forEach(link => link.classList.remove('active'));
    
//     // 마지막 섹션일 경우, 직전 인덱스의 링크에 active 클래스 추가
//     if (index === sections.length - 1) {
//       newLinks[index - 1].classList.add('active');
//     } else {
//       newLinks[index].classList.add('active');
//     }

//     window.scrollTo({
//       top: sections[index].offsetTop,
//       behavior: 'smooth'
//     });

//     currentSectionIndex = index;
//   }

//   newLinks.forEach((link, index) => {
//     link.addEventListener('click', (e) => {
//       e.preventDefault();
//       goToSection(index);
//     });
//   });

//   window.addEventListener('wheel', (e) => {
//     e.preventDefault();

//     if (isScrolling) {
//       return;
//     }

//     isScrolling = true;
//     let sectionIndex = currentSectionIndex;

//     if (e.deltaY > 0) {
//       if (sectionIndex < sections.length - 1) {
//         goToSection(sectionIndex + 1);
//       }
//     } else {
//       if (sectionIndex > 0) {
//         goToSection(sectionIndex - 1);
//       }
//     }

//     setTimeout(() => {
//       isScrolling = false;
//     }, 1000); // 타임아웃 후 스크롤을 다시 가능하게 설정
//   }, { passive: false });

//   goToSection(0);  // 처음에는 첫 번째 섹션으로 이동
// }

function fullPage() {
  const sections = Array.from(document.querySelectorAll('.common-section')).filter(section =>
    section.parentElement.classList.contains('main-page')
  );

  // #footer를 섹션 목록에 마지막으로 추가합니다.
  const footer = document.querySelector('#footer');
  if (footer) {
    sections.push(footer);
  }

  const links = document.querySelectorAll('.remote-tab-link');

  const footerLink = document.createElement('a');
  footerLink.href = '#';
  footerLink.classList.add('remote-tab-link');
  footerLink.textContent = 'Footer Section';  // 푸터 섹션에 대한 링크 텍스트 추가
  document.querySelector('#footer').appendChild(footerLink);  // 추가한 링크를 #footer에 붙여 넣음
  
  // links에 footerLink 추가
  const newLinks = [...links, footerLink];

  let currentSectionIndex = 0;
  let isScrolling = false;

  if (sections.length === 0 || sections.length !== newLinks.length) {
    console.error('조건에 맞는 섹션이 없거나 섹션과 링크의 수가 일치하지 않습니다!');
    return;
  }

  function goToSection(index) {
    if (index < 0 || index >= sections.length) {
      return;
    }

    sections.forEach(section => section.classList.remove('active'));
    sections[index].classList.add('active');

    newLinks.forEach(link => link.classList.remove('active'));
    
    // 마지막 섹션일 경우, 직전 인덱스의 링크에 active 클래스 추가
    if (index === sections.length - 1) {
      newLinks[index - 1].classList.add('active');
    } else {
      newLinks[index].classList.add('active');
    }

    window.scrollTo({
      top: sections[index].offsetTop,
      behavior: 'smooth'
    });

    currentSectionIndex = index;
  }

  newLinks.forEach((link, index) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      goToSection(index);
    });
  });

  window.addEventListener('wheel', (e) => {
    e.preventDefault();

    if (isScrolling || document.querySelector('.category-area.active')) {
      return;
    }

    isScrolling = true;
    let sectionIndex = currentSectionIndex;

    if (e.deltaY > 0) {
      if (sectionIndex < sections.length - 1) {
        goToSection(sectionIndex + 1);
      }
    } else {
      if (sectionIndex > 0) {
        goToSection(sectionIndex - 1);
      }
    }

    setTimeout(() => {
      isScrolling = false;
    }, 1000); // 타임아웃 후 스크롤을 다시 가능하게 설정
  }, { passive: false });

  goToSection(0);  // 처음에는 첫 번째 섹션으로 이동
}


function categoryControl() {
  const category = $('.category-area');
  const isActiveCategoryBtn = $('.btn-category');
  const nonActiveCategoryBtn = $('.btn-category-close');
  const isActive = 'active';

  $(isActiveCategoryBtn).click(function () {
    $(category).addClass(isActive);
  });

  $(nonActiveCategoryBtn).click(function () {
    $(category).removeClass(isActive);
  });
}

function quickMenuControl() {
  const secHeading = $('.section-main .section-heading-item');
  const quickMenuBtnItem = $('.section-main .quick-menu-tab-item');
  const quickMenuBtn = $('.section-main .btn-quick-menu');
  const quickMenuAreaItem = $('.section-main .quick-menu-area-item');
  const isActive = 'active';

  btnTab();

  function btnTab() {
    $(quickMenuBtn).click(function () {
      $(this).addClass(isActive).parent().siblings().find(quickMenuBtn).removeClass(isActive);
      const btnIndex = $(this).parent().index();

      $(quickMenuAreaItem).eq(btnIndex).addClass(isActive).siblings().removeClass(isActive);

      $(secHeading).eq(btnIndex).addClass(isActive).siblings().removeClass(isActive);

      if (quickMenuBtnItem.eq(0).find(quickMenuBtn).hasClass(isActive)) {
        quickMenuBtnItem.eq(1).find(quickMenuBtn).css('border-radius', '0px 16px 0px 0px');
      }
      else if (quickMenuBtnItem.eq(1).find(quickMenuBtn).hasClass(isActive)) {
        quickMenuBtnItem.eq(1).find(quickMenuBtn).css('border-radius', '0px 0px 0px 0px');
      }
      else if (quickMenuBtnItem.eq(2).find(quickMenuBtn).hasClass(isActive)) {
        quickMenuBtnItem.eq(1).find(quickMenuBtn).css('border-radius', '0px 0px 16px 0px');
      }
      else {
        quickMenuBtnItem.eq(1).find(quickMenuBtn).css('border-radius', '');
      }
    })
  }
}

function quickSearchControl(){
  const searchBtn = $('.section-main .btn-quick-search-tab');
  const searchFormItem = $('.section-main .quick-search-area-item')
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

function consInfoControl(){
  const applyCivil = $('.apply-civil');
  const applyCivilIcon = $('.common-icon');
  const isWhite = 'icon-arrow-right-white';
  const isBlack = 'icon-arrow-right-black';

  $(applyCivil).mouseenter(function(){
    $(this).find(applyCivilIcon).removeClass(isBlack).addClass(isWhite);
  })
  
  $(applyCivil).mouseleave(function(){
    $(this).find(applyCivilIcon).removeClass(isWhite).addClass(isBlack);
  })
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
      $(faqLibraryMoreLink).attr('href', '자주하는 질문 페이지')
    } else if(btnIndex === 1) {
      $(faqLibraryMoreLink).attr('href', '자료실 페이지')
    }
  })
  
}












