import { list } from "./guide/list.js";
import { guide } from "./guide/guide.js";
import { swiper } from "./lib/swiper.js";

$(document).ready(function(){
  list();
  guide();
  swiper();
})