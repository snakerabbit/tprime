const World1 = require("./world1.js");
const World2 = require("./world2.js");
const World3 = require("./world3.js");

document.addEventListener("DOMContentLoaded", ()=>{
  const world1 = document.getElementById("world1");
  const world2 = document.getElementById("world2");
  const world3 = document.getElementById("world3");
  const gravityButton = document.getElementById("gravity-button");
  world1.onclick = function() {
    let currentCanvas = document.querySelector("canvas");
    if(currentCanvas){
      currentCanvas.remove();
    }
    new World1();
  };

  world2.onclick = function(){
    let currentCanvas = document.querySelector("canvas");
    if(currentCanvas){
      currentCanvas.remove();
    }
    new World2();
  };

  world3.onclick = function(){
    let currentCanvas = document.querySelector("canvas");
    if(currentCanvas){
      currentCanvas.remove();
    }
    new World3();
  };

  // gravityButton.onclick = function(){
  //   let
  // };

});
