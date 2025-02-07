export function fullPage() {
  // 'main-page'가 존재하는지 확인
  const mainPage = document.querySelector('.main-page');
  if (!mainPage) return;

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
        section.classList.remove('active'); // 푸터에는 active 클래스 추가 X
      } else if (index === sections.length - 1 && i === sections.length - 2) {
        section.classList.add('active'); // 마지막 섹션 유지 (푸터 이동 시에도)
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
    if (!e.target.closest('.main-page')) return;

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

  // wheelHandler를 fullPage._wheelHandler로 저장
  fullPage._wheelHandler = wheelHandler;

  window.addEventListener('wheel', fullPage._wheelHandler, { passive: false });

  goToSection(0);

  // fullPage 기능 해제 함수 내부에서 사용될 데이터 저장
  fullPage._observer = observer;
  fullPage._links = links;
  fullPage._sections = sections;
  fullPage._remoteTab = remoteTab;
}

export function destroyFullPage() {
  if (!fullPage._observer) return;

  console.log("FullPage 기능 해제됨");

  // Observer 해제
  fullPage._observer.disconnect();

  // 네비게이션 클릭 이벤트 제거
  fullPage._links.forEach(link => link.replaceWith(link.cloneNode(true)));

  // 휠 스크롤 이벤트 제거
  if (fullPage._wheelHandler) {
    window.removeEventListener('wheel', fullPage._wheelHandler);
  }

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
