const World1 = require("./world1");
const GameView = require('./game-view');


document.addEventListener("DOMContentLoaded", function(){
   const rootEl = $('.tprime-root');
   const canvas = document.getElementById("canvas");
   const ctx = canvas.getContext("2d");
   new GameView (ctx, canvas);
   new World1();
});
