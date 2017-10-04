const World1 = require("./world1");
const World2 = require("./world2");
const World3 = require("./world3");

const GameView = require('./game-view');




document.addEventListener("DOMContentLoaded", function(){
   const rootEl = $('.tprime-root');
  //  const canvas = document.getElementById("canvas");
  //  const ctx = canvas.getContext("2d");
  //  ctx.height = window.innerHeight;
  //  ctx.width = window.innerWidth;
  //
  //  window.addEventListener("resize", function(){
  //    ctx.height = window.innerHeight;
  //    ctx.width = window.innerWidth;
  //  });
  // new World1(canvas);
  // new World2(canvas);
  // new World3(canvas);

  new World1();
});
