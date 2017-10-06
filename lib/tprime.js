const Matter = window.Matter;
const Timer = window.Timer;

let currentWorld = undefined;
const Engine = Matter.Engine,
      World = Matter.World,
      Bodies = Matter.Bodies,
      Body = Matter.Body,
      Runner = Matter.Runner,
      Render = Matter.Render,
      Composites = Matter.Composites,
      Composite = Matter.Composite,
      Events = Matter.Events,
      Mouse = Matter.Mouse,
      Constraints = Matter.Constraints,
      Constraint = Matter.Constraint,
      MouseConstraint = Matter.MouseConstraint;


let engine;
let world;
let render;
let cradle, comp1, comp2, comp3, ground;


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
let runner = Runner.create();
function run(){
  Engine.run(engine);
  Render.run(render);
  Runner.run(runner, engine);
}


function setToEarth(){
  reset();
  currentWorld = "earth";
  document.getElementById('current-gravity').innerHTML = '1G';
  engine = Engine.create(), world = engine.world;
  ground = Bodies.rectangle(599, canvas.height, canvas.width, 50, {isStatic: true});
  console.log(ground);
  cradle = Composites.newtonsCradle(280, 0, 5, 30, 200);
  Body.translate(cradle.bodies[0], { x: -180, y: -100 });
  comp1 = Composites.softBody(650, 100, 5, 5, 0, 0, true, 18);
  comp2 =Composites.softBody(500, 300, 8, 3, 0, 0, true, 15);
  comp3 = Composites.softBody(550, 400, 4, 4, 0, 0, true, 15);
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
  const mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            stiffness: 0.2,
            render: {
                visible: false
            }
        }
    });
    render.mouse = mouse;
  world.gravity.y = 1;
  World.add(world, [ground, cradle, comp1, comp2, comp3]);
  run();
}

function setToNull(){
  reset();
  currentWorld="null";
  document.getElementById('current-gravity').innerHTML = '0G';
  engine = Engine.create(), world = engine.world;
  ground = Bodies.rectangle(599, canvas.height, canvas.width, 50, {isStatic: true});
  cradle = Composites.newtonsCradle(280, 0, 5, 30, 200);
  Body.translate(cradle.bodies[0], { x: -180, y: -100 });
  comp1 = Composites.softBody(650, 100, 5, 5, 0, 0, true, 18);
  comp2 =Composites.softBody(500, 300, 8, 3, 0, 0, true, 15);
  comp3 = Composites.softBody(550, 400, 4, 4, 0, 0, true, 15);
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
  World.add(world, [ground, cradle, comp1, comp2, comp3]);
  run();
}

function setToHigh(){
  reset();
  currentWorld= "high";
  document.getElementById('current-gravity').innerHTML = '5G';
  engine = Engine.create(), world = engine.world;
  ground = Bodies.rectangle(599, canvas.height, canvas.width, 50, {isStatic: true});
  cradle = Composites.newtonsCradle(280, 0, 5, 30, 200);
  Body.translate(cradle.bodies[0], { x: -180, y: -100 });
  comp1 = Composites.softBody(650, 100, 5, 5, 0, 0, true, 18);
  comp2 =Composites.softBody(500, 300, 8, 3, 0, 0, true, 15);
  comp3 = Composites.softBody(550, 400, 4, 4, 0, 0, true, 15);
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
  World.add(world, [ground, cradle, comp1, comp2, comp3]);
  run();
}

const canvas = document.querySelector("canvas");
canvas.style.width = "80%";
canvas.style.height = "500px";
const ctx = canvas.getContext('2d');

function off(){
  document.getElementById('initialize').style.display = "none";
}

let age = 0;
function setAge(){
  age = parseInt(document.getElementById('age-input').value);
  if(age){
    document.getElementById('current-age').innerHTML = age + " years";
  } else {
    document.getElementById('current-age').innerHTML = 0 + " years";
  }

  off();
}

function reset(){
  document.getElementById("atmosphere").value = "0.01";
  document.getElementById("pendulum-mass").value = "1000";
  document.getElementById("box-mass").value = "1000";

}

function openUserControls(){
  document.getElementById("user-bar").style.width = "200px";
}

function closeUserControls(){
  document.getElementById("user-bar").style.width="0";
}

function changeAtmosphere(){

  let atmosphere = document.getElementById("atmosphere").value;
  if(currentWorld === "earth"){
    document.getElementById('current-gravity').innerHTML = '1G';
    engine = Engine.create(), world = engine.world;
    ground = Bodies.rectangle(599, canvas.height, canvas.width, 50, {isStatic: true});
    let options = {
      frictionAir: atmosphere
    };
    cradle = Composites.newtonsCradle(280, 0, 5, 30, 200, options);
    Body.translate(cradle.bodies[0], { x: -180, y: -100 });
    comp1 = Composites.softBody(650, 100, 5, 5, 0, 0, true, 18, options);
    comp2 =Composites.softBody(500, 300, 8, 3, 0, 0, true, 15, options);
    comp3 = Composites.softBody(550, 400, 4, 4, 0, 0, true, 15, options);
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
    const mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
          mouse: mouse,
          constraint: {
              stiffness: 0.2,
              render: {
                  visible: false
              }
          }
      });
      render.mouse = mouse;
    world.gravity.y = 1;
    World.add(world, [ground, cradle, comp1, comp2, comp3]);
    run();
  } else if(currentWorld === "null") {
    engine = Engine.create(), world = engine.world;
    ground = Bodies.rectangle(599, canvas.height, canvas.width, 50, {isStatic: true});
    let options = {
      frictionAir: atmosphere
    };
    cradle = Composites.newtonsCradle(280, 0, 5, 30, 200, options);
    Body.translate(cradle.bodies[0], { x: -180, y: -100 });
    comp1 = Composites.softBody(650, 100, 5, 5, 0, 0, true, 18, options);
    comp2 =Composites.softBody(500, 300, 8, 3, 0, 0, true, 15, options);
    comp3 = Composites.softBody(550, 400, 4, 4, 0, 0, true, 15, options);
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
    World.add(world, [ground, cradle, comp1, comp2, comp3]);
    run();
  } else if(currentWorld === "high"){
    engine = Engine.create(), world = engine.world;
    ground = Bodies.rectangle(599, canvas.height, canvas.width, 50, {isStatic: true});
    let options = {
      frictionAir: atmosphere
    };
    cradle = Composites.newtonsCradle(280, 0, 5, 30, 200, options);
    Body.translate(cradle.bodies[0], { x: -180, y: -100 });
    comp1 = Composites.softBody(650, 100, 5, 5, 0, 0, true, 18, options);
    comp2 =Composites.softBody(500, 300, 8, 3, 0, 0, true, 15, options);
    comp3 = Composites.softBody(550, 400, 4, 4, 0, 0, true, 15, options);
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
    World.add(world, [ground, cradle, comp1, comp2, comp3]);
    run();
  }
}

function changePendulumMass(){
  let newMass = document.getElementById('pendulum-mass').value;
  let atmosphere = document.getElementById("atmosphere").value;
  if(currentWorld === "earth"){
    document.getElementById('current-gravity').innerHTML = '1G';
    engine = Engine.create(), world = engine.world;
    ground = Bodies.rectangle(599, canvas.height, canvas.width, 50, {isStatic: true});
    let options = {
      frictionAir: atmosphere
    };
    cradle = Composites.newtonsCradle(280, 0, 5, 30, 200, options);
    Body.translate(cradle.bodies[0], { x: -180, y: -100 });
    comp1 = Composites.softBody(650, 100, 5, 5, 0, 0, true, 18);
    comp2 =Composites.softBody(500, 300, 8, 3, 0, 0, true, 15);
    comp3 = Composites.softBody(550, 400, 4, 4, 0, 0, true, 15);
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
    const mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
          mouse: mouse,
          constraint: {
              stiffness: 0.2,
              render: {
                  visible: false
              }
          }
      });
      render.mouse = mouse;
    world.gravity.y = 1;
    World.add(world, [ground, cradle, comp1, comp2, comp3]);
    run();
  } else if(currentWorld === "null") {
    engine = Engine.create(), world = engine.world;
    ground = Bodies.rectangle(599, canvas.height, canvas.width, 50, {isStatic: true});
    let options = {
      mass: newMass
    };
    cradle = Composites.newtonsCradle(280, 0, 5, 30, 200, options);
    Body.translate(cradle.bodies[0], { x: -180, y: -100 });
    comp1 = Composites.softBody(650, 100, 5, 5, 0, 0, true, 18);
    comp2 =Composites.softBody(500, 300, 8, 3, 0, 0, true, 15);
    comp3 = Composites.softBody(550, 400, 4, 4, 0, 0, true, 15);
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
    World.add(world, [ground, cradle, comp1, comp2, comp3]);
    run();
  } else if(currentWorld === "high"){
    engine = Engine.create(), world = engine.world;
    ground = Bodies.rectangle(599, canvas.height, canvas.width, 50, {isStatic: true});
    let options = {
      frictionAir: atmosphere
    };
    cradle = Composites.newtonsCradle(280, 0, 5, 30, 200, options);
    Body.translate(cradle.bodies[0], { x: -180, y: -100 });
    comp1 = Composites.softBody(650, 100, 5, 5, 0, 0, true, 18);
    comp2 =Composites.softBody(500, 300, 8, 3, 0, 0, true, 15);
    comp3 = Composites.softBody(550, 400, 4, 4, 0, 0, true, 15);
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
    World.add(world, [ground, cradle, comp1, comp2, comp3]);
    run();
  }
}

function changeBoxMass(){

  let newMass = document.getElementById('pendulum-mass').value;
  let atmosphere = document.getElementById("atmosphere").value;
  if(currentWorld === "earth"){
    document.getElementById('current-gravity').innerHTML = '1G';
    engine = Engine.create(), world = engine.world;
    ground = Bodies.rectangle(599, canvas.height, canvas.width, 50, {isStatic: true});
    let options = {
      frictionAir: atmosphere
    };
    cradle = Composites.newtonsCradle(280, 0, 5, 30, 200);
    Body.translate(cradle.bodies[0], { x: -180, y: -100 });
    comp1 = Composites.softBody(650, 100, 5, 5, 0, 0, true, 18, options);
    comp2 =Composites.softBody(500, 300, 8, 3, 0, 0, true, 15, options);
    comp3 = Composites.softBody(550, 400, 4, 4, 0, 0, true, 15, options);
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
    const mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
          mouse: mouse,
          constraint: {
              stiffness: 0.2,
              render: {
                  visible: false
              }
          }
      });
      render.mouse = mouse;
    world.gravity.y = 1;
    World.add(world, [ground, cradle, comp1, comp2, comp3]);
    run();
  } else if(currentWorld === "null") {
    engine = Engine.create(), world = engine.world;
    ground = Bodies.rectangle(599, canvas.height, canvas.width, 50, {isStatic: true});
    let options = {
      mass: newMass
    };
    cradle = Composites.newtonsCradle(280, 0, 5, 30, 200);
    Body.translate(cradle.bodies[0], { x: -180, y: -100 });
    comp1 = Composites.softBody(650, 100, 5, 5, 0, 0, true, 18, options);
    comp2 =Composites.softBody(500, 300, 8, 3, 0, 0, true, 15, options);
    comp3 = Composites.softBody(550, 400, 4, 4, 0, 0, true, 15, options);
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
    World.add(world, [ground, cradle, comp1, comp2, comp3]);
    run();
  } else if(currentWorld === "high"){
    engine = Engine.create(), world = engine.world;
    ground = Bodies.rectangle(599, canvas.height, canvas.width, 50, {isStatic: true});
    let options = {
      frictionAir: atmosphere
    };
    cradle = Composites.newtonsCradle(280, 0, 5, 30, 200);
    Body.translate(cradle.bodies[0], { x: -180, y: -100 });
    comp1 = Composites.softBody(650, 100, 5, 5, 0, 0, true, 18, options);
    comp2 =Composites.softBody(500, 300, 8, 3, 0, 0, true, 15, options);
    comp3 = Composites.softBody(550, 400, 4, 4, 0, 0, true, 15, options);
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
    World.add(world, [ground, cradle, comp1, comp2, comp3]);
    run();
  }
}


document.addEventListener("DOMContentLoaded", ()=>{

});
