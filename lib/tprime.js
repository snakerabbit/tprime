// const Game = require("./game");
//
//
// document.addEventListener("DOMContentLoaded", function(){
// });
const Matter = require("../matter");


 const Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Mouse = Matter.Mouse,
    Events = Matter.Events,
    Constraint = Matter.Constraint,
    MouseConstraint = Matter.MouseConstraint,
    Composites = Matter.Composites,
    Bodies = Matter.Bodies;

  // create an engine
  const engine = Engine.create(), world = engine.world;
  // create a renderer
  const render = Render.create({
      element: document.body,
      engine: engine,
      options: {
        width: 800,
        height: 800,
        wireframes: false,
        background: "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/images/376060main_PIA12161_full.jpg",
        showAngleIndicator: false
      }
  });

  //Bodies.rectangle(x-axis, y-axis, x-dimension, y-dimesions )

  // var boxA = Bodies.rectangle(425, 200, 80, 80);
  // var boxB = Bodies.rectangle(450, 100, 80, 80);
  // var circleA = Bodies.circle(600, 100, 30);
  // var circleB = Bodies.circle(200, 100, 100, {isStatic: true});
  //
  // var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

  let ground = Bodies.rectangle(285, 600, 815, 50, { isStatic: true }),
          rockOptions = { density: 0.004 },
          rock = Bodies.polygon(170, 450, 5, 20, rockOptions),
          anchor = { x: 170, y: 450 },
          elastic = Constraint.create({
              pointA: anchor,
              bodyB: rock,
              stiffness: 0.08
          });

      const pyramid = Composites.pyramid(300, 300, 5, 10, 0, 0, function(x, y) {
          return Bodies.circle(x, y, 25, {
            render:{
              sprite: {
                texture: "https://opengameart.org/sites/default/files/styles/medium/public/earththumb.png",
                xScale: 0.3,
                yScale: 0.3
              }
            }
          });
      });

      const ground2 = Bodies.rectangle(610, 250, 100, 20, { isStatic: true });

      const pyramid2 = Composites.pyramid(450, 0, 5, 10, 0, 0, function(x, y) {
          return Bodies.circle(x, y, 25, {
            render:{
              sprite:{
                texture: "https://opengameart.org/sites/default/files/styles/medium/public/mars_type_planet_0.png",
                xScale: 0.5,
                yScale: 0.5
              }
            }
          });
      });

      World.add(engine.world, [ground, pyramid, ground2, pyramid2, rock, elastic]);

      Events.on(engine, 'afterUpdate', function() {
          if (mouseConstraint.mouse.button === -1 && (rock.position.x > 190 || rock.position.y < 430)) {
              rock = Bodies.polygon(170, 450, 7, 20, rockOptions);
              World.add(engine.world, rock);
              elastic.bodyB = rock;
          }
      });

      // add mouse control
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

      World.add(world, mouseConstraint);

      // keep the mouse in sync with rendering
      render.mouse = mouse;

  // add all of the bodies to the world
  // World.add(engine.world, [boxA, boxB, ground, circleA, circleB]);
  world.gravity.y = 0;
  // run the engine
  Engine.run(engine);

  // run the renderer
  Render.run(render);
