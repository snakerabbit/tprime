const Matter = require("../matter");
//low gravity planet
//pendulums
//soft bodies
//explosions
//rain/avalanche

//Visuals:
  // background: https://cdn.pixabay.com/photo/2017/02/13/01/34/astronomy-2061576_1280.jpg
  //
  // objects: dandelion seeds, plants


const World2 = function(canvas){
  const Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    World = Matter.World,
    Mouse = Matter.Mouse,
    Events = Matter.Events,
    Constraint = Matter.Constraint,
    MouseConstraint = Matter.MouseConstraint,
    Composites = Matter.Composites,
    Common = Matter.Common,
    Bodies = Matter.Bodies;

    const engine = Engine.create(), world = engine.world;

    const render = Render.create({
      element: document.body,
      engine: engine,
      canvas:canvas
    });


    const runner = Runner.create();
    Runner.run(runner, engine);

    const mouse = Mouse.create(canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false
          }
        }
      });


    
};


module.exports = World2;
