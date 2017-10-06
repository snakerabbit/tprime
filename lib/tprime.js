const Matter = window.Matter;
const p5 = window.p5;
const Engine = Matter.Engine,
      World = Matter.World,
      Bodies = Matter.Bodies,
      Render = Matter.Render,
      Composite = Matter.Composite;
let engine;
let world;
let ground;
let box;
let render;


render = Render.create({
    element: document.body,
    engine: engine,
    canvas: document.querySelector('canvas'),
    options: {
      height: window.innerHeight,
      width: window.innerWidth,
      wireframes: true,
      showAngleIndicator: false
    }
});
function run(){
  Engine.run(engine);
  Render.run(render);
}


function setToEarth(){
  // alert("set to earth!");
  engine = Engine.create(), world = engine.world;
  ground = Bodies.rectangle(599, canvas.height, canvas.width, 50, {isStatic: true});
  box = Bodies.rectangle(200, 200, 50, 50);
  render = Render.create({
      element: document.body,
      engine: engine,
      canvas: document.querySelector('canvas'),
      options: {
        height: window.innerHeight,
        width: window.innerWidth,
        wireframes: true,
        showAngleIndicator: false
      }
  });
  world.gravity.y = 1;
  World.add(world, [ground, box]);
  run();

}

function setToNull(){
  alert("set to null gravity!");
  engine = Engine.create(), world = engine.world;
  ground = Bodies.rectangle(599, canvas.height, canvas.width, 50, {isStatic: true});
  box = Bodies.rectangle(200, 200, 50, 50);
  render = Render.create({
      element: document.body,
      engine: engine,
      canvas: document.querySelector('canvas'),
      options: {
        height: window.innerHeight,
        width: window.innerWidth,
        wireframes: true,
        showAngleIndicator: false
      }
  });
  world.gravity.y = 0;
  World.add(world, [ground, box]);
  run();
}

function setToHigh(){
  alert("set to high gravity!");
  engine = Engine.create(), world = engine.world;
  ground = Bodies.rectangle(599, canvas.height, canvas.width, 50, {isStatic: true});
  box = Bodies.rectangle(200, 200, 50, 50);
  render = Render.create({
      element: document.body,
      engine: engine,
      canvas: document.querySelector('canvas'),
      options: {
        height: window.innerHeight,
        width: window.innerWidth,
        wireframes: true,
        showAngleIndicator: false
      }
  });
  world.gravity.y = 5;
  World.add(world, [ground, box]);
  run();

}

const canvas = document.querySelector("canvas");
canvas.style.width = "80%";
canvas.style.height = "500px";
const ctx = canvas.getContext('2d');

function off(){
  document.getElementById('initialize').style.display = "none";
}

let age = null;
function setAge(){
  age = parseInt(document.getElementById('age-input').value);
  off();
}

function openUserControls(){
  document.getElementById("user-bar").style.width = "200px";
}

function closeUserControls(){
  document.getElementById("user-bar").style.width="0";
}


document.addEventListener("DOMContentLoaded", ()=>{

});
