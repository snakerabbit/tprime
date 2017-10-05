const Matter = require("../matter");

//Normal gravity planet
//pendulums
//soft bodies
//bridge

//Visuals:
  // background: https://static.pexels.com/photos/531360/pexels-photo-531360.jpeg
  // objects:
      //rain:https://pixabay.com/en/drop-raindrop-water-tear-teardrop-159527/
      //chains:
      //slingshot
      //boxes

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
      Common = Matter.Common,
      Bodies = Matter.Bodies,
      Body = Matter.Body;

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
    console.log(MouseConstraint);

    window.addEventListener("resize", function(){
      render.options.height = window.innerHeight*0.8;
      render.options.width = window.innerWidth*0.8;
    });

    let background = Bodies.rectangle(0,0, 1, 1, {
      isStatic: true,
      render: {
        sprite:{
          texture: "https://static.pexels.com/photos/531360/pexels-photo-531360.jpeg",
          xScale:0.5,
          yScale: 0.5
        }
      },
      collisionFilter: {
        group: -1
      }
    });


    World.add(world, background);

    let ground = Bodies.rectangle(100, 700, 1, 1, {
      isStatic: true,
      collisionFilter: {
        group: -3
      }
    }),
            rockOptions = {
              density: 0.004,
              frictionAir: 0,
              render:{
                sprite: {
                  texture: "https://opengameart.org/sites/default/files/styles/medium/public/earththumb.png",
                  xScale: 0.2,
                  yScale: 0.2
                }
              },
              collisionFilter:{
                group: -1
              }
              },
            rock = Bodies.polygon(170, 450, 5, 20, rockOptions),
            anchor = { x: 170, y: 450 },
            elastic = Constraint.create({
                pointA: anchor,
                bodyB: rock,
                stiffness: 0.08
            });

        const ground2 = Bodies.rectangle(850, 200, 300, 20, {
          isStatic: true,
          collisionFilter: {
            group: -3
          },
          chamfer: {radius: 20},
          render:{
            sprite:{
              texture: "https://opengameart.org/sites/default/files/styles/medium/public/rock_d01.jpg",
              xScale:1,
              yScale: 0.1
            }
          }
        });

        // const ground3 = Bodies.rectangle(500, 350, 300, 20, {
        //   isStatic: true,
        //   collisionFilter:{
        //     group: -3
        //   },
        //   chamfer: {radius: 20},
        //   render:{
        //     sprite:{
        //       texture: "https://opengameart.org/sites/default/files/styles/medium/public/rock_d01.jpg",
        //       xScale:1,
        //       yScale: 0.1
        //     }
        //   }
        // });

        const pyramid = Composites.pyramid(725, 100, 5, 10, 0, 0, function(x, y) {
            return Bodies.rectangle(x, y, 30, 30, {
              render:{
                sprite:{
                  texture: "https://opengameart.org/sites/default/files/styles/medium/public/mars_type_planet_0.png",
                  xScale: 0.5,
                  yScale: 0.5
                }
              },
              friction: 2,
            });
        });

        World.add(engine.world, [ground, pyramid, ground2, rock, elastic]);

        Events.on(engine, 'afterUpdate', function() {
            if (mouseConstraint.mouse.button === -1 && (rock.position.x > 190 || rock.position.y < 430)) {
                rock = Bodies.polygon(170, 450, 7, 20, rockOptions);
                World.add(engine.world, rock);
                elastic.bodyB = rock;
            }
        });

        // let interval;
        //
        // function makeItRain(){
        //   interval = setInterval(rain, 1000);
        // }
        // function makeItRain2(){
        //   interval = setInterval(rain2, 600);
        // }
        // function makeItRain3(){
        //   interval = setInterval(rain3, 2000);
        // }
        //
        // function makeItRain4(){
        //   interval = setInterval(rain3, 2800);
        // }
        //
        // let raindrop;
        // let raindrop2;
        //
        // const rainOptions ={
        //   frictionAir: 0.1,
        //   mass: 0.00001,
        //   collisionFilter: {
        //     group: -3
        //   },
        //   render:{
        //     sprite:{
        //       texture:"https://cdn.pixabay.com/photo/2013/07/13/12/16/drop-159527_1280.png",
        //       xScale: 0.01,
        //       yScale: 0.01
        //     }
        //   }
        // };
        //
        // function rain(){
        //   for (let i = 0; i<3; i++) {
        //       raindrop = Bodies.circle(Math.floor(Math.random()*1000), 0, 5, rainOptions);
        //       World.add(engine.world, raindrop);
        //   }
        // }
        //
        // function rain2(){
        //   for(let i =0; i<6; i++) {
        //     raindrop = Bodies.circle(Math.floor(Math.random()*1000), 0, 5, rainOptions);
        //     World.add(engine.world, raindrop);
        //   }
        // }
        //
        // function rain3(){
        //   for(let i =0; i<5; i++) {
        //     raindrop = Bodies.circle(Math.floor(Math.random()*1000), 0, 5, rainOptions);
        //     World.add(engine.world, raindrop);
        //   }
        // }
        //
        // makeItRain();
        // makeItRain2();
        // makeItRain3();
        // makeItRain4();
        // add Runner
      const runner = Runner.create();
      Runner.run(runner, engine);
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

        const cradle = Composites.newtonsCradle(280, 0, 5, 30, 200);
        World.add(world, cradle);
        Body.translate(cradle.bodies[0], { x: -180, y: -100 });

        render.mouse = mouse;


    world.gravity.y = 1;
    // world1.onclick = function() {
    //   let currentCanvas = document.querySelector("canvas");
    //   if(currentCanvas){
    //     currentCanvas.remove();
    //   }
    //   new World1();
    // };
    // run the engine
    Engine.run(engine);

    // run the renderer
    Render.run(render);


};




module.exports =  World1;
