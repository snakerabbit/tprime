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


const World2 = function(){
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

    let background = Bodies.rectangle(400, 300, 1, 1, {
      isStatic: true,
      render: {
        sprite:{
          texture: "https://cdn.pixabay.com/photo/2017/02/13/01/34/astronomy-2061576_1280.jpg",
          xScale: 1,
          yScale: 1
        }
      },
      collisionFilter: {
        group: -1
      }
    });

    let ground = Bodies.rectangle(500, 660, 959, 1, {
      isStatic: true
    });


    const rainOptions = {
      angle: Math.random()*3,
      frictionAir: 0.2,
      render: {
        sprite: {
          texture: "https://cdn.pixabay.com/photo/2012/04/13/00/48/flying-31425_1280.png",
          xScale: 0.02,
          yScale: 0.02
        }
      },
      collisionFilter: {
        group: -1
      }
    };

    const rainOptions2 = {
      angle: Math.random()*1.5,
      frictionAir: 0.2,
      render:{
        sprite:{
          texture: "https://cdn.pixabay.com/photo/2012/04/13/00/48/flying-31425_1280.png",
          xScale: 0.03,
          yScale: 0.03
        }
      },
      collisionFilter: {
        group: -1
      }
    };

    let interval;
    let raindrop;

    function makeItRain(){
      interval = setInterval(rain, 4000);
    }

    function makeItRain2(){
      interval = setInterval(rain2, 800);
    }

    function makeItRain3(){
      interval = setInterval(rain, 3000);
    }

    function rain(){
      for (let i = 0; i<3; i++) {
          raindrop = Bodies.circle(Math.floor(Math.random()*1000), 0, 5, rainOptions);
          World.add(engine.world, raindrop);
      }
    }

    function rain2(){
      for(let i =0; i<2; i++) {
        raindrop = Bodies.circle(Math.floor(Math.random()*1000), 0, 5, rainOptions2);
        World.add(engine.world, raindrop);
      }
    }

    makeItRain();
    makeItRain2();
    makeItRain3();

    World.add(world, [ground, background]);

    const plantOptions2 = {
        isStatic: true,
        friction: 0.05,
        frictionStatic: 1,
        render: {
          sprite:{
            texture: "https://cdn.pixabay.com/photo/2017/09/13/19/15/oak-tree-2746617_1280.png",
            xScale: 0.3,
            yScale: 0.3
          }
        }
      };
    // const softBody1 = Composites.softBody(250, 100, 5, 5, 0, 0, true, 10, softOptions1);
    // const softBody2 = Composites.softBody(250, 300, 5, 5, 0, 0, true, 18, softOptions2);

    // const plant1 = Bodies.rectangle(300, 300, 100, 100, plantOptions1);
    const plant2 = Bodies.polygon(700, 300, 5, 20, plantOptions2);

    World.add(world, plant2);

    const pendulum = Bodies.circle(600, 10, 5, {isStatic: true});



    World.add(world, pendulum);
    const runner = Runner.create();
    Runner.run(runner, engine);

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

    world.gravity.y = 0.2;

    Engine.run(engine);
    Render.run(render);
};


module.exports = World2;
