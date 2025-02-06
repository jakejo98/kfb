import { loadFile } from "./common/include.js";
import { swiper } from "./lib/swiper.js";
import { list } from "./guide/list.js";
import { guide } from "./guide/guide.js";
import { commonHeader, desktopHeader, respondHeader } from "./common/header.js";
import { footer } from "./common/footer.js";
import { remote } from "./common/remote.js";
import { commonMain, desktopMain, respondMain } from "./pages/main.js";
import { admin } from "./common/admin.js";

let windowWidth = 0;

// 윈도우 너비 업데이트 함수
function updateWidth(){
  return $(window).width();
}
// 윈도우 리사이즈 너비 값 재설정
$(window).resize(function(){
  windowWidth = updateWidth();
  checkMain();
  checkHeader();
});

// 메인페이지 반응형 제어
function checkMain() {
  windowWidth = updateWidth();
  // 기본 반응형 제어
  if(windowWidth > 1399) {
    desktopMain();
  } else {
    respondMain();
  }
}

// 헤더 반응형 제어(1200px)
function checkHeader(){
  windowWidth = updateWidth();
  // 기본 반응형 제어
  if(windowWidth > 1199) {
    desktopHeader();
  } else {
    respondHeader();
  }
}

$(document).ready(function(){
  const currentFile = window.location.pathname.split("/").pop();
  // 가이드 조건문
  if(currentFile === "list.html") {
    list();
  } else if(currentFile === "guide.html") {
    guide();
    swiper();
  } else if (currentFile.startsWith("admin")) {
    admin();
    swiper();
  } 
  
  // 로드 후 실행 함수 (공통)
  loadFile(function(){
    swiper();
    commonHeader();
    checkHeader();
    footer();
    remote();
    if(currentFile.startsWith("main")) {
      commonMain();
      checkMain();
    }
  })
})
