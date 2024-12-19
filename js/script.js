import { loadFile } from "./common/include.js";
import { swiper } from "./lib/swiper.js";
import { header } from "./common/header.js";
import { main } from "./pages/main.js";

$(document).ready(function(){
  loadFile(function(){
    swiper();
    header(); 
    main();
  })
})