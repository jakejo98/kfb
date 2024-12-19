import { loadFile } from "./common/include.js";
import { swiper } from "./lib/swiper.js";
import { list } from "./guide/list.js";
import { guide } from "./guide/guide.js";
import { header } from "./common/header.js";
import { main } from "./pages/main.js";

$(document).ready(function(){
  // 선 실행 함수
  list();
  guide();
  swiper();
  // 로드 후 실행 함수
  loadFile(function(){
    header();
    main();
  })
})