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
var boxB = Bodies.rectangle(450, 100, 80, 80);
var circleA = Bodies.circle(600, 100, 30);
var circleB = Bodies.circle(200, 100, 100);

var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

// add all of the bodies to the world
World.add(engine.world, [boxA, boxB, ground, circleA, circleB]);
world.gravity.y = 0.1;
// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);






// var Engine = Matter.Engine,
//   Render = Matter.Render,
//   World = Matter.World,
//   Bodies = Matter.Bodies,
//   Body = Matter.Body;
//
// var engine = Engine.create();
//
// var render = Render.create({
//   element: document.body,
//   engine: engine,
//   options: {
//     width: 800,
//     height: 400,
//     wireframes: false
//   }
// });
//
// var topWall = Bodies.rectangle(400, 50, 720, 20, { isStatic: true });
// var leftWall = Bodies.rectangle(50, 210, 20, 300, { isStatic: true });
// var rightWall = Bodies.rectangle(750, 210, 20, 300, { isStatic: true });
// var bottomWall = Bodies.rectangle(400, 370, 720, 40, { isStatic: true });
//
// var ball1 = Bodies.circle(600, 180, 20, {
//   render: {
//     sprite: {
//       texture: "https://opengameart.org/sites/default/files/styles/medium/public/earththumb.png",
//       xScale: 0.4,
//       yScale: 0.4
//     }
//   }
// });
//
// var ball2 = Bodies.circle(600, 180, 20, {
//   render: {
//     sprite: {
//       texture: "https://opengameart.org/sites/default/files/styles/medium/public/earththumb.png",
//       xScale: 0.4,
//       yScale: 0.4
//     }
//   }
// });
//
// World.add(engine.world, [topWall, leftWall, rightWall, bottomWall, ball1, ball2]);
//
// Engine.run(engine);
//
// Render.run(render);
