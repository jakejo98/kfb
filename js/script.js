import { loadFile } from "./common/include.js";
import { swiper } from "./lib/swiper.js";
import { list } from "./guide/list.js";
import { guide } from "./guide/guide.js";
import { header } from "./common/header.js";
import { footer } from "./common/footer.js";
import { main } from "./pages/main.js";

$(document).ready(function(){
  const currentFile = window.location.pathname.split("/").pop();
  // 가이드 조건문
  if(currentFile === "list.html") {
    list();
  } else if(currentFile === "guide.html") {
    guide();
  }

  // 로드 후 실행 함수 (공통)
  loadFile(function(){
    swiper();
    header();
    footer();

    // main.html 일 경우
    if (currentFile === "main.html") {
      main();
    }
  })
})
