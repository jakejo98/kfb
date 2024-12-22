export function main() {
  swiperPopup();
  fullPage();
  categoryControl();
  quickMenuControl();
  quickSearchControl();
  rateFeeControl();
  consInfoControl();
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
  const links = document.querySelectorAll('.remote-tab-link');
  let currentSectionIndex = 0;
  let isScrolling = false;

  if (sections.length === 0 || sections.length !== links.length) {
    console.error('조건에 맞는 섹션이 없거나 섹션과 링크의 수가 일치하지 않습니다!');
    return;
  }

  function goToSection(index) {
    if (index < 0 || index >= sections.length) {
      return;
    }

    sections.forEach(section => section.classList.remove('active'));
    sections[index].classList.add('active');

    links.forEach(link => link.classList.remove('active'));
    links[index].classList.add('active');

    window.scrollTo({
      top: sections[index].offsetTop,
      behavior: 'smooth'
    });

    currentSectionIndex = index;
  }

  links.forEach((link, index) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      goToSection(index);
    });
  });

  window.addEventListener('wheel', (e) => {
    e.preventDefault();

    if (isScrolling) {
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

    // 스크롤이 이동한 후 일정 시간이 지난 뒤 스크롤을 허용하도록 설정
    setTimeout(() => {
      isScrolling = false;
    }, 500); // 타임아웃 시간을 조금 늘려서 이동이 완료될 때까지 기다림
  }, { passive: false });

  goToSection(0);
}

function categoryControl() {
  const category = $('.category-area');
  const isActiveCategoryBtn = $('.btn-category');
  const nonActiveCategoryBtn = $('.btn-category-close');
  const isActive = 'active';
  const mainPage = $('.main-page'); // .main-page 선택자 추가

  $(isActiveCategoryBtn).click(function () {
    $(category).addClass(isActive);
    $(mainPage).css('overflow', 'hidden'); // 스크롤 비활성화
  });

  $(nonActiveCategoryBtn).click(function () {
    $(category).removeClass(isActive);
    $(mainPage).css('overflow', ''); // 원래 상태로 복원
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














