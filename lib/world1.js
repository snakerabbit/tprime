







// const Matter = require("../matter");
//
// const World1 = function(){
//
//
//    const Engine = Matter.Engine,
//       Render = Matter.Render,
//       Runner = Matter.Runner,
//       World = Matter.World,
//       Mouse = Matter.Mouse,
//       Events = Matter.Events,
//       Constraint = Matter.Constraint,
//       MouseConstraint = Matter.MouseConstraint,
//       Composites = Matter.Composites,
//       Common = Matter.Common,
//       Bodies = Matter.Bodies,
//       Body = Matter.Body;
//
//     const engine = Engine.create(), world = engine.world;
//
//     const render = Render.create({
//         element: document.body,
//         engine: engine,
//         options: {
//           height: window.innerHeight,
//           width: window.innerWidth,
//           wireframes: true,
//           showAngleIndicator: false
//         }
//     });
//
//     window.addEventListener("resize", function(){
//       render.options.height = window.innerHeight*0.8;
//       render.options.width = window.innerWidth*0.8;
//     });
//
//     let background = Bodies.rectangle(0,0, 1, 1, {
//       isStatic: true,
//       render: {
//         sprite:{
//           texture: "https://static.pexels.com/photos/531360/pexels-photo-531360.jpeg",
//           xScale:0.5,
//           yScale: 0.5
//         }
//       },
//       collisionFilter: {
//         group: -1
//       }
//     });
//
//
//     World.add(world, background);
//
//     let ground = Bodies.rectangle(100, 700, 1, 1, {
//       isStatic: true,
//       collisionFilter: {
//         group: -3
//       }
//     }),
//             rockOptions = {
//               density: 0.004,
//               frictionAir: 0,
//               render:{
//                 sprite: {
//                   texture: "https://opengameart.org/sites/default/files/styles/medium/public/earththumb.png",
//                   xScale: 0.2,
//                   yScale: 0.2
//                 }
//               },
//               collisionFilter:{
//                 group: -1
//               }
//               },
//             rock = Bodies.polygon(170, 450, 5, 20, rockOptions),
//             anchor = { x: 170, y: 450 },
//             elastic = Constraint.create({
//                 pointA: anchor,
//                 bodyB: rock,
//                 stiffness: 0.08
//             });
//
//         const ground2 = Bodies.rectangle(850, 200, 300, 20, {
//           isStatic: true,
//           collisionFilter: {
//             group: -3
//           },
//           chamfer: {radius: 20},
//           render:{
//             sprite:{
//               texture: "https://opengameart.org/sites/default/files/styles/medium/public/rock_d01.jpg",
//               xScale:1,
//               yScale: 0.1
//             }
//           }
//         });
//
//         const pyramid = Composites.pyramid(725, 100, 5, 10, 0, 0, function(x, y) {
//             return Bodies.rectangle(x, y, 30, 30, {
//               render:{
//                 sprite:{
//                   texture: "https://opengameart.org/sites/default/files/styles/medium/public/mars_type_planet_0.png",
//                   xScale: 0.5,
//                   yScale: 0.5
//                 }
//               },
//               friction: 2,
//             });
//         });
//
//         World.add(engine.world, [ground, pyramid, ground2, rock, elastic]);
//
//         Events.on(engine, 'afterUpdate', function() {
//             if (mouseConstraint.mouse.button === -1 && (rock.position.x > 190 || rock.position.y < 430)) {
//                 rock = Bodies.polygon(170, 450, 7, 20, rockOptions);
//                 World.add(engine.world, rock);
//                 elastic.bodyB = rock;
//             }
//         });
//       const runner = Runner.create();
//       Runner.run(runner, engine);
//         // add mouse control
//         const mouse = Mouse.create(render.canvas),
//             mouseConstraint = MouseConstraint.create(engine, {
//                 mouse: mouse,
//                 constraint: {
//                     stiffness: 0.2,
//                     render: {
//                         visible: false
//                     }
//                 }
//             });
//
//         World.add(world, mouseConstraint);
//
//         const cradle = Composites.newtonsCradle(280, 0, 5, 30, 200);
//         World.add(world, cradle);
//         Body.translate(cradle.bodies[0], { x: -180, y: -100 });
//
//         render.mouse = mouse;
//
//
//     world.gravity.y = 1;
//     // run the engine
//     Engine.run(engine);
//
//     // run the renderer
//     Render.run(render);
//
//
//     document.addEventListener("DOMContentLoaded", ()=>{
//       const gravityButton = document.getElementById('gravity-button');
//
//       gravityButton.onclick = function(){
//         alert("this button works");
//       };
//     });
// };
//
//
//
//
//
//
// module.exports =  World1;
