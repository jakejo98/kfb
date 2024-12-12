import { list } from "./guide/list.js";
import { guide } from "./guide/guide.js";
import { swiper } from "./lib/swiper.js";
import { popup } from "./common/popup.js";

$(document).ready(function(){
  list();
  guide();
  swiper();
  popup();
})