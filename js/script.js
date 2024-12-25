import { loadFile } from "./common/include.js";
import { swiper } from "./lib/swiper.js";
import { list } from "./guide/list.js";
import { guide } from "./guide/guide.js";
import { header } from "./common/header.js";
import { main } from "./pages/main.js";

function guideControl() {
  list();
  guide();
  swiper();
}

$(document).ready(function(){
  const currentFile = window.location.pathname.split("/").pop();

  // 로드 후 실행 함수
  loadFile(function(){
    
    header();
    
    // main.html 일 경우
    if (currentFile === "main.html") {
      // 가이드 함수
      guideControl();

      swiper();
      main();
    }
  })
})