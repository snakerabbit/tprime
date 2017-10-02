const Matter = require("../matter");


var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

// create an engine
var engine = Engine.create(), world = engine.world;
// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine
});

// create two boxes and a ground
//Bodies.rectangle(x-axis, y-axis, x-dimension, y-dimesions )

var boxA = Bodies.rectangle(425, 200, 80, 80);
var boxB = Bodies.rectangle(450, 100, 80, 80, {
  render:{
    sprite:{
      texture: './itemWeapon_SW.png'
    }
  }
});
var circleA = Bodies.circle(600, 100, 30);
var circleB = Bodies.circle(200, 100, 100, {
    render:{
      sprite:{
        texture: './itemWeapon_SW.png'
      }
    }
});

var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

// add all of the bodies to the world
World.add(engine.world, [boxA, boxB, ground, circleA, circleB]);
world.gravity.y = 1;
// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);
