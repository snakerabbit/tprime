const Matter = window.Matter;
const p5 = window.p5;
const Engine = Matter.Engine,
      World = Matter.World,
      Bodies = Matter.Bodies,
      Render = Matter.Render;



function off(){
  document.getElementById('initialize').style.display = "none";
}

let age;
function setAge(){
  age = document.getElementById('age-input').value;
  off();
}

document.addEventListener("DOMContentLoaded", ()=>{

});
