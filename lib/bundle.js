/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Matter = window.Matter;
var Timer = window.Timer;

var currentWorld = undefined;
var Engine = Matter.Engine,
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

var engine = void 0;
var world = void 0;
var render = void 0;
var cradle = void 0,
    comp1 = void 0,
    comp2 = void 0,
    comp3 = void 0,
    ground = void 0;

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
var runner = Runner.create();
function run() {
  Engine.run(engine);
  Render.run(render);
  Runner.run(runner, engine);
}
var id = void 0;

function earthAge() {
  window.clearInterval(id);
  var seconds = 0;
  id = window.setInterval(function () {
    seconds += 1;
    document.getElementById('time').innerHTML = seconds + " seconds";
  }, 1000);
}

function highAge() {
  window.clearInterval(id);
  var seconds = 0;
  id = window.setInterval(function () {
    seconds += 1;
    document.getElementById('time').innerHTML = seconds + " seconds";
  }, 690);
}

function setToEarth() {
  reset();
  earthAge();
  currentWorld = "earth";
  document.getElementById('current-gravity').innerHTML = '1G';
  engine = Engine.create(), world = engine.world;
  ground = Bodies.rectangle(605, canvas.height, canvas.width * 2, 50, { isStatic: true });
  console.log(ground);
  cradle = Composites.newtonsCradle(280, 0, 5, 30, 200);
  Body.translate(cradle.bodies[0], { x: -180, y: -100 });
  comp1 = Composites.softBody(650, 100, 5, 5, 0, 0, true, 18);
  comp2 = Composites.softBody(500, 300, 8, 3, 0, 0, true, 15);
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
  var mouse = Mouse.create(render.canvas),
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

function setToNull() {
  earthAge();
  reset();
  currentWorld = "null";
  document.getElementById('current-gravity').innerHTML = '0G';
  engine = Engine.create(), world = engine.world;
  ground = Bodies.rectangle(599, canvas.height, canvas.width, 50, { isStatic: true });
  cradle = Composites.newtonsCradle(280, 0, 5, 30, 200);
  Body.translate(cradle.bodies[0], { x: -180, y: -100 });
  comp1 = Composites.softBody(650, 100, 5, 5, 0, 0, true, 18);
  comp2 = Composites.softBody(500, 300, 8, 3, 0, 0, true, 15);
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

function setToHigh() {
  highAge();
  reset();
  currentWorld = "high";
  document.getElementById('current-gravity').innerHTML = '5G';
  engine = Engine.create(), world = engine.world;
  ground = Bodies.rectangle(599, canvas.height, canvas.width, 50, { isStatic: true });
  cradle = Composites.newtonsCradle(280, 0, 5, 30, 200);
  Body.translate(cradle.bodies[0], { x: -180, y: -100 });
  comp1 = Composites.softBody(650, 100, 5, 5, 0, 0, true, 18);
  comp2 = Composites.softBody(500, 300, 8, 3, 0, 0, true, 15);
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

var canvas = document.querySelector("canvas");
canvas.style.width = "80%";
canvas.style.height = "500px";
var ctx = canvas.getContext('2d');

function off() {
  document.getElementById('initialize').style.display = "none";
}

var age = 0;
function setAge() {
  age = parseInt(document.getElementById('age-input').value);
  if (age) {
    document.getElementById('current-age').innerHTML = age + " years";
  } else {
    document.getElementById('current-age').innerHTML = 0 + " years";
  }

  off();
}

function reset() {
  document.getElementById("atmosphere").value = "0.01";
  document.getElementById("pendulum-mass").value = "1000";
  document.getElementById("box-mass").value = "1000";
}

function openUserControls() {
  document.getElementById("user-bar").style.width = "200px";
}

function closeUserControls() {
  document.getElementById("user-bar").style.width = "0";
}

function changeAtmosphere() {

  var atmosphere = document.getElementById("atmosphere").value;
  if (currentWorld === "earth") {
    document.getElementById('current-gravity').innerHTML = '1G';
    engine = Engine.create(), world = engine.world;
    ground = Bodies.rectangle(599, canvas.height, canvas.width, 50, { isStatic: true });
    var options = {
      frictionAir: atmosphere
    };
    cradle = Composites.newtonsCradle(280, 0, 5, 30, 200, options);
    Body.translate(cradle.bodies[0], { x: -180, y: -100 });
    comp1 = Composites.softBody(650, 100, 5, 5, 0, 0, true, 18, options);
    comp2 = Composites.softBody(500, 300, 8, 3, 0, 0, true, 15, options);
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
    var mouse = Mouse.create(render.canvas),
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
  } else if (currentWorld === "null") {
    engine = Engine.create(), world = engine.world;
    ground = Bodies.rectangle(599, canvas.height, canvas.width, 50, { isStatic: true });
    var _options = {
      frictionAir: atmosphere
    };
    cradle = Composites.newtonsCradle(280, 0, 5, 30, 200, _options);
    Body.translate(cradle.bodies[0], { x: -180, y: -100 });
    comp1 = Composites.softBody(650, 100, 5, 5, 0, 0, true, 18, _options);
    comp2 = Composites.softBody(500, 300, 8, 3, 0, 0, true, 15, _options);
    comp3 = Composites.softBody(550, 400, 4, 4, 0, 0, true, 15, _options);
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
  } else if (currentWorld === "high") {
    engine = Engine.create(), world = engine.world;
    ground = Bodies.rectangle(599, canvas.height, canvas.width, 50, { isStatic: true });
    var _options2 = {
      frictionAir: atmosphere
    };
    cradle = Composites.newtonsCradle(280, 0, 5, 30, 200, _options2);
    Body.translate(cradle.bodies[0], { x: -180, y: -100 });
    comp1 = Composites.softBody(650, 100, 5, 5, 0, 0, true, 18, _options2);
    comp2 = Composites.softBody(500, 300, 8, 3, 0, 0, true, 15, _options2);
    comp3 = Composites.softBody(550, 400, 4, 4, 0, 0, true, 15, _options2);
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

function changePendulumMass() {
  var newMass = document.getElementById('pendulum-mass').value;
  if (currentWorld === "earth") {
    document.getElementById('current-gravity').innerHTML = '1G';
    engine = Engine.create(), world = engine.world;
    ground = Bodies.rectangle(599, canvas.height, canvas.width, 50, { isStatic: true });
    var options = {
      mass: newMass
    };
    cradle = Composites.newtonsCradle(280, 0, 5, 30, 200, options);
    Body.translate(cradle.bodies[0], { x: -180, y: -100 });
    comp1 = Composites.softBody(650, 100, 5, 5, 0, 0, true, 18);
    comp2 = Composites.softBody(500, 300, 8, 3, 0, 0, true, 15);
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
    var mouse = Mouse.create(render.canvas),
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
  } else if (currentWorld === "null") {
    engine = Engine.create(), world = engine.world;
    ground = Bodies.rectangle(599, canvas.height, canvas.width, 50, { isStatic: true });
    var _options3 = {
      mass: newMass
    };
    cradle = Composites.newtonsCradle(280, 0, 5, 30, 200, _options3);
    Body.translate(cradle.bodies[0], { x: -180, y: -100 });
    comp1 = Composites.softBody(650, 100, 5, 5, 0, 0, true, 18);
    comp2 = Composites.softBody(500, 300, 8, 3, 0, 0, true, 15);
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
  } else if (currentWorld === "high") {
    engine = Engine.create(), world = engine.world;
    ground = Bodies.rectangle(599, canvas.height, canvas.width, 50, { isStatic: true });
    var _options4 = {
      mass: newMass
    };
    cradle = Composites.newtonsCradle(280, 0, 5, 30, 200, _options4);
    Body.translate(cradle.bodies[0], { x: -180, y: -100 });
    comp1 = Composites.softBody(650, 100, 5, 5, 0, 0, true, 18);
    comp2 = Composites.softBody(500, 300, 8, 3, 0, 0, true, 15);
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

function changeBoxMass() {

  var newMass = document.getElementById('box-mass').value;
  var atmosphere = document.getElementById("atmosphere").value;
  if (currentWorld === "earth") {
    document.getElementById('current-gravity').innerHTML = '1G';
    engine = Engine.create(), world = engine.world;
    ground = Bodies.rectangle(599, canvas.height, canvas.width, 50, { isStatic: true });
    var options = {
      mass: newMass
    };
    cradle = Composites.newtonsCradle(280, 0, 5, 30, 200);
    Body.translate(cradle.bodies[0], { x: -180, y: -100 });
    comp1 = Composites.softBody(650, 100, 5, 5, 0, 0, true, 18, options);
    comp2 = Composites.softBody(500, 300, 8, 3, 0, 0, true, 15, options);
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
    var mouse = Mouse.create(render.canvas),
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
  } else if (currentWorld === "null") {
    engine = Engine.create(), world = engine.world;
    ground = Bodies.rectangle(599, canvas.height, canvas.width, 50, { isStatic: true });
    var _options5 = {
      mass: newMass
    };
    cradle = Composites.newtonsCradle(280, 0, 5, 30, 200);
    Body.translate(cradle.bodies[0], { x: -180, y: -100 });
    comp1 = Composites.softBody(650, 100, 5, 5, 0, 0, true, 18, _options5);
    comp2 = Composites.softBody(500, 300, 8, 3, 0, 0, true, 15, _options5);
    comp3 = Composites.softBody(550, 400, 4, 4, 0, 0, true, 15, _options5);
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
  } else if (currentWorld === "high") {
    engine = Engine.create(), world = engine.world;
    ground = Bodies.rectangle(599, canvas.height, canvas.width, 50, { isStatic: true });
    var _options6 = {
      mass: newMass
    };
    cradle = Composites.newtonsCradle(280, 0, 5, 30, 200);
    Body.translate(cradle.bodies[0], { x: -180, y: -100 });
    comp1 = Composites.softBody(650, 100, 5, 5, 0, 0, true, 18, _options6);
    comp2 = Composites.softBody(500, 300, 8, 3, 0, 0, true, 15, _options6);
    comp3 = Composites.softBody(550, 400, 4, 4, 0, 0, true, 15, _options6);
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

function openHowTo() {
  document.getElementById('how-to-bar').style.display = "block";
}

function closeHowTo() {
  document.getElementById('how-to-bar').style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {});

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map