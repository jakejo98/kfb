export function main(){
  swiperPopup();
  fullPage();
  categoryControl();
}

// 메인페이지 팝업창
function swiperPopup(){
  const popup = $('.ly-pop-wrap');
  const btnIconClose = $('.btn-icon-popup-close');
  const btnDismiss = $('.btn-dismiss-today');
  const btnClose = $('.btn-popup-close');
  const isActive = 'active';

  $(btnIconClose).click(function(){
    $(popup).removeClass(isActive);
  })
  
  $(btnDismiss).click(function(){
    $(popup).removeClass(isActive);
  })

  $(btnClose).click(function(){
    $(popup).removeClass(isActive);
  })
}

function fullPage() {
  const sections = document.querySelectorAll('.common-section');
  const links = document.querySelectorAll('.remote-tab-link');
  const footer = document.querySelector('#footer');
  const footerHeight = footer ? footer.offsetHeight : 0;
  let currentSectionIndex = 0;
  let isScrolling = false;

  if (sections.length !== links.length) {
    console.error('섹션과 링크의 수가 일치하지 않습니다!');
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
      } else {
        window.scrollTo({
          top: document.body.scrollHeight - footerHeight,
          behavior: 'smooth'
        });
      }
    } else {
      if (sectionIndex > 0) {
        goToSection(sectionIndex - 1);
      }
    }
    // 스크롤이 이동한 후 일정 시간이 지난 뒤 스크롤을 허용하도록 설정
    setTimeout(() => {
      isScrolling = false;
    }, 1000); // 타임아웃 시간을 조금 늘려서 이동이 완료될 때까지 기다림
  }, { passive: false });

  window.addEventListener('scroll', () => {
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight - footerHeight) {
      currentSectionIndex = sections.length;
    }
  });

  goToSection(0);
}

function categoryControl(){
  const category = $('.category-area');
  const isActiveCategoryBtn = $('.btn-category');
  const nonActiveCategoryBtn = $('.btn-category-close');
  const isActive = 'active';

  $(isActiveCategoryBtn).click(function(){
    $(category).addClass(isActive);
  })

  $(nonActiveCategoryBtn).click(function(){
    $(category).removeClass(isActive);
  })
}
















