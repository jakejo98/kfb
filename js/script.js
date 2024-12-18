import { loadFile } from "./common/include.js";
import { list } from "./guide/list.js";
import { guide } from "./guide/guide.js";
import { swiper } from "./lib/swiper.js";
import { header } from "./common/header.js";
import { main } from "./pages/main.js";

$(document).ready(async function () {
  await loadFile();
  await list();
  await guide();

  setTimeout(function () {
    swiper();
    header(); 
    main();
  }, 100);
});
