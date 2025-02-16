import { loadFile } from "./common/include.js";
import { swiper } from "./lib/swiper.js";
import { list } from "./guide/list.js";
import { guide } from "./guide/guide.js";
import { fullPage, destroyFullPage } from "./common/fullPage.js";
import { commonHeader, desktopHeader, respondHeader, headerPageHandler, destroyHeaderPageHandler } from "./common/header.js";
import { footer } from "./common/footer.js";
import { remote } from "./common/remote.js";
import { commonMain, desktopMain, respondMain } from "./pages/main.js";
import { admin } from "./common/admin.js";
import { minwon } from "./pages/minwon.js";
import { desktopKfb, respondKfb } from "./pages/kfb.js";
import { disclosureData, resetDisclosureData } from "./pages/disclosureData.js";
import { selectChoiceHandler, resetSelectChoiceHandler } from "./pages/selectChoice.js";

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
  checkKfb();
  checkHeaderPage();
  checkDisclosureData();
  checkSelectChoice();
});

// 메인페이지 반응형 제어
function checkMain() {
  windowWidth = updateWidth();
  // 기본 반응형 제어
  if(windowWidth > 1399) {
    desktopMain();
    fullPage();
  } else {
    respondMain();
    destroyFullPage();
  }
}

// 헤더 반응형 제어(1200px)
function checkHeader(){
  windowWidth = updateWidth();
  // 반응형 제어
  if(windowWidth > 1199) {
    desktopHeader();
  } else {
    respondHeader();
  }
}

// 서브 페이지 제어(1200px)
function checkKfb(){
  windowWidth = updateWidth();
  // 반응형 제어
  if(windowWidth > 1199) {
    desktopKfb();
  } else {
    respondKfb();
  }
}

// 헤더 페이지 제어(767px)
function checkHeaderPage(){
  windowWidth = updateWidth();
  // 반응형 제어
  if(windowWidth > 767) {
    destroyHeaderPageHandler();
  } else {
    headerPageHandler();
  }
}

function checkDisclosureData() {
  windowWidth = updateWidth();
  if(windowWidth < 768) {
    disclosureData();
  } else {
    resetDisclosureData();
  }
}

function checkSelectChoice(){
  windowWidth = updateWidth();
  if(windowWidth < 1200) {
    selectChoiceHandler();
  } else {
    resetSelectChoiceHandler();
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
    checkKfb();
    checkHeaderPage()
    checkDisclosureData();
    checkSelectChoice();
    if(currentFile.startsWith("main")) {
      commonMain();
      checkMain();
    }
    if(currentFile === "apply_write.php") {
      minwon();
    }
  })
})
