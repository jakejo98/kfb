import { loadFile } from "./common/include.js";
import { list } from "./guide/list.js";
import { guide } from "./guide/guide.js";
import { swiper } from "./lib/swiper.js";
import { main } from "./pages/main.js";

$(document).ready(function () {
  loadFile();
  list();
  guide();

  setTimeout(function () {
    swiper();
    main();
  }, 100);
});
