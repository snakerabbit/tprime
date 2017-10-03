const Matter = require("../matter");

//Normal gravity planet
//pendulums
//soft bodies
//bridge

//Visuals:
  // background: city
  // objects: car, wrecking ball, bridge


const World1 = function(){


   const Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
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

    let ground = Bodies.rectangle(285, 700, 815, 50, { isStatic: true }),
            rockOptions = {
              density: 0.004,
              frictionAir: 0,
              render:{
                sprite: {
                  texture: "https://opengameart.org/sites/default/files/styles/medium/public/earththumb.png",
                  xScale: 0.2,
                  yScale: 0.2
                }
              }
              },
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
              },
              frictionAir: 0
            });
        });

        const ground2 = Bodies.rectangle(610, 200, 100, 20, {
          isStatic: true,
          chamfer: {radius: 20},
          render:{
            sprite:{
              texture: "https://opengameart.org/sites/default/files/styles/medium/public/rock_d01.jpg",
              xScale:0.5,
              yScale: 0.1
            }
          }
        });

        const pyramid2 = Composites.pyramid(450, 0, 5, 10, 0, 0, function(x, y) {
            return Bodies.circle(x, y, 25, {
              render:{
                sprite:{
                  texture: "https://opengameart.org/sites/default/files/styles/medium/public/mars_type_planet_0.png",
                  xScale: 0.5,
                  yScale: 0.5
                }
              },
              frictionAir: 0
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

};




module.exports =  World1;


// const Engine = Matter.Engine,
//   Render = Matter.Render,
//   World = Matter.World,
//   Bodies = Matter.Bodies,
//   Body = Matter.Body;
//
// const engine = Engine.create(), world = engine.world;
// world.gravity.y = 0.1;
// const render = Render.create({
//   element: document.body,
//   engine: engine,
//   options: {
//     width: 800,
//     height: 400,
//     wireframes: false
//   }
// });
//
// const topWall = Bodies.rectangle(400, 50, 720, 20, { isStatic: true });
// const leftWall = Bodies.rectangle(50, 210, 20, 300, { isStatic: true });
// const rightWall = Bodies.rectangle(750, 210, 20, 300, { isStatic: true });
// const bottomWall = Bodies.rectangle(400, 370, 720, 40, { isStatic: true });
//
// const ball1 = Bodies.circle(600, 180, 20, {
//   render: {
//     sprite: {
//       texture: "https://opengameart.org/sites/default/files/styles/medium/public/earththumb.png",
//       xScale: 0.4,
//       yScale: 0.4
//     }
//   }
// });
//
// const ball2 = Bodies.circle(600, 180, 20, {
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
