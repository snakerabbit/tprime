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
var p5 = window.p5;
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Render = Matter.Render,
    Composite = Matter.Composite;
var engine = void 0;
var world = void 0;
var ground = void 0;
var box = void 0;
var render = void 0;

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
function run() {
  Engine.run(engine);
  Render.run(render);
}

function setToEarth() {
  // alert("set to earth!");
  engine = Engine.create(), world = engine.world;
  ground = Bodies.rectangle(599, canvas.height, canvas.width, 50, { isStatic: true });
  box = Bodies.rectangle(200, 200, 50, 50);
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
  world.gravity.y = 1;
  World.add(world, [ground, box]);
  run();
}

function setToNull() {
  alert("set to null gravity!");
  engine = Engine.create(), world = engine.world;
  ground = Bodies.rectangle(599, canvas.height, canvas.width, 50, { isStatic: true });
  box = Bodies.rectangle(200, 200, 50, 50);
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
  World.add(world, [ground, box]);
  run();
}

function setToHigh() {
  alert("set to high gravity!");
  engine = Engine.create(), world = engine.world;
  ground = Bodies.rectangle(599, canvas.height, canvas.width, 50, { isStatic: true });
  box = Bodies.rectangle(200, 200, 50, 50);
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
  World.add(world, [ground, box]);
  run();
}

var canvas = document.querySelector("canvas");
canvas.style.width = "80%";
canvas.style.height = "500px";
var ctx = canvas.getContext('2d');

function off() {
  document.getElementById('initialize').style.display = "none";
}

var age = null;
function setAge() {
  age = parseInt(document.getElementById('age-input').value);
  off();
}

function openUserControls() {
  document.getElementById("user-bar").style.width = "200px";
}

function closeUserControls() {
  document.getElementById("user-bar").style.width = "0";
}

document.addEventListener("DOMContentLoaded", function () {});

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map