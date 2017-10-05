const Matter = require("../matter");

//High gravity planet/


//background: https://cdn.pixabay.com/photo/2017/05/12/19/50/lunar-landscape-2308000_1280.jpg

const World3 = function(){

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
      options: {
        height: window.innerHeight*0.8,
        width: window.innerWidth*0.8,
        wireframes: true,
        showAngleIndicator: false
      }
  });


  Render.run(render);

  const runner = Runner.create();

  Runner.run(runner, engine);

  const options = {
    friction: 0.05,
    frictionStatic: 1,
    render: {
      visible: true
    }
  };

  //Bodies.rectangle(x pos, y pos, width, height, options)

  let background = Bodies.rectangle(400, 300, 1, 1, {
    isStatic: true,
    render: {
      sprite:{
        texture: "https://cdn.pixabay.com/photo/2017/05/12/19/50/lunar-landscape-2308000_1280.jpg",
        xScale: 1,
        yScale: 1
      }
    },
    collisionFilter: {
      group: -1
    }
  });

  World.add(world, background);

  const floor = Bodies.rectangle(800, 600, 10000, 3, {isStatic: true});


  World.add(world, floor);

  //Composites.softBody(xx, yy, columns, rows, columnGap, rowGap, crossBrace, particleRadius, particleOptions, constraintOptions)
  //Composites.softBody(250, 100, 5, 5, 0, 0, true, 18, particleOptions)
  const softBody1 = Composites.softBody(250, 100, 5, 5, 0, 0, true, 10, options);
  const softBody2 = Composites.softBody(250, 300, 5, 5, 0, 0, true, 18, options);
  const softBody3 = Composites.softBody();
  const softBody4 = Composites.softBody();

  World.add(world, [softBody1, softBody2, softBody3, softBody4]);


  world.gravity.y = 3;




};
module.exports = World3;
