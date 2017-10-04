const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');
// const img = new Image();
// img.onload = function(){
//   c.drawImage(img, 0, 0, canvas.width, canvas.height);
// };

//img.src="https://static.pexels.com/photos/531360/pexels-photo-531360.jpeg";

const World1 = require("./world1.js");

document.addEventListener("DOMContentLoaded", ()=>{
  window.addEventListener("resize", ()=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  //   img.onload = function(){
  //     c.drawImage(img, 0, 0, canvas.width, canvas.height);
  //   };
  //  img.src="https://static.pexels.com/photos/531360/pexels-photo-531360.jpeg";
  });

  new World1(canvas);
});
