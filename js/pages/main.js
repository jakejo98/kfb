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

function fullPage() {
  console.log("Initializing fullPage function...");
  
  const sections = Array.from(document.querySelectorAll('.common-section')).filter(section => 
    section.parentElement.classList.contains('main-page')
  );

  console.log("Filtered sections:", sections);
  console.log(".common-section length:", sections.length);  // .common-section의 길이 출력

  // #footer를 섹션 목록에 마지막으로 추가합니다.
  const footer = document.querySelector('#footer');
  if (footer) {
    sections.push(footer);
    console.log("#footer added to sections:", footer);
  }

  const links = Array.from(document.querySelectorAll('.remote-tab-link'));
  console.log("Links:", links);

  let currentSectionIndex = 0;
  let isScrolling = false;

  if (sections.length === 0 || sections.length !== links.length + 1) {
    console.error('조건에 맞는 세션이 없거나 섂션과 링크의 수가 맞지 않습니다!');
    console.log("sections.length:", sections.length);
    console.log("links.length:", links.length);
    return;
  }

  function goToSection(index) {
    console.log(`Navigating to section ${index}`);
    
    if (index < 0 || index >= sections.length) {
      console.warn("Index out of bounds:", index);
      return;
    }

    sections.forEach((section, i) => {
      section.classList.toggle('active', i === index);
      console.log(`Section ${i} active state:`, i === index);
    });

    links.forEach((link, i) => {
      if (index === sections.length - 1) {
        link.classList.toggle('active', i === links.length - 1);
      } else {
        link.classList.toggle('active', i === index);
      }
      console.log(`Link ${i} active state:`, link.classList.contains('active'));
    });

    const remoteTab = document.querySelector('#remote-tab');
    
    // #footer로 이동할 때는 'abs' 클래스 추가
    if (index === sections.length - 1) {
      if (remoteTab) {
        remoteTab.classList.add('abs');
        console.log("#remote-tab added 'abs' class");
      }
    } else {
      // 그 외의 섹션으로 이동할 때는 'abs' 클래스 삭제
      if (remoteTab) {
        remoteTab.classList.remove('abs');
        console.log("#remote-tab removed 'abs' class");
      }
    }

    window.scrollTo({
      top: sections[index].offsetTop,
      behavior: 'smooth'
    });

    console.log("Scrolling to:", sections[index].offsetTop);

    currentSectionIndex = index;
  }

  links.forEach((link, index) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      console.log(`Link ${index} clicked`);
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
      console.log("Scrolling down...");
      if (sectionIndex < sections.length - 1) {
        goToSection(sectionIndex + 1);
      } else {
        console.log("Already at the last section.");
      }
    } else {
      console.log("Scrolling up...");
      if (sectionIndex > 0) {
        goToSection(sectionIndex - 1);
      } else {
        console.log("Already at the first section.");
      }
    }

    // 스크롤 후 'abs' 클래스를 다시 확인
    const remoteTab = document.querySelector('#remote-tab');
    if (remoteTab) {
      if (currentSectionIndex === sections.length - 1) {
        remoteTab.classList.add('abs');
        console.log("#remote-tab added 'abs' class after scroll");
      } else {
        remoteTab.classList.remove('abs');
        console.log("#remote-tab removed 'abs' class after scroll");
      }
    }

    setTimeout(() => {
      isScrolling = false;
      console.log("Scrolling unlocked.");
    }, 1000); // 타임아웃 후 스크롤을 다시 가능하게 설정
  }, { passive: false });

  console.log("Navigating to the first section...");
  goToSection(0); // 처음에는 첫 번째 섹션으로 이동
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












