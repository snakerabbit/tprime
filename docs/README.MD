# TPrime

## Background
TPrime is a basic educational simulation game that allows users to interact with moving and static objects in varying degrees of gravitational pull and time dilation to demonstrate the theory of relativity.

Users will be able to traverse between different states of physical constants and see a visual representation of the differences in the behavior of the objects that can be interacted with.

## Functionality & MVPs
In TPrime, users will be able to:
* toggle between different physical states
* interact with moving/static objects
* toggle time-dilation

In addition, the project will include:
* a How To Play modal to describe how to interact with the simulation by keys/click

## Wireframes
This project will have a single screen with the display canvas, buttons to direct to different physical states, a toggle button for time-dilation, and nav links to my Github, Linkedin, and the How To Play modal.

![tprimewireframe](https://image.ibb.co/cqwwkb/Web_1920_1.png)

The How To Play and links to my pages will be buttons on top right of the page,  The How To Play modal will pop up upon first loading and will have a play button to start the simulation.  

The buttons to toggle for time-dilation and to change physical states will be on a left expandable menu, which will allow users to display different physical states and change the state to display time-dilation.

## Architecture and Technologies
This project will be implemented with the following technologies:


* Vanilla JavaScript and jquery for overall structure and game logic,
* Canvas for DOM manipulation and rendering,
* Matter.js for basic physics engine structure and manipulation,
* Webpack to bundle and serve up the various scripts.


In addition to the webpack entry file, there will be five scripts involved in this project:

* `tprime.js`: this script will handle the logic for creating and updating the necessary DOM elements.

* `world1.js`: this script will handle the physics logic and object creation for the first world, which has standard gravitational force.

* `world2.js`: this script will handle the physics logic and object creation for the second world, which will have low/null gravity.

* `world3.js`: this script will handle the physics logic and object creation for the third world, which will have high gravity.


## Implementation Timeline
* Over the Weekend
  * Started git repository and created the needed files for implementation
  * Researched Javascript physics engine libraries and did basic setup of Matter.js
  * Followed tutorials and demos on using physics engines to manipulate gravity, time scaling, and moving objects
* Day 1: Setup all necessary Node modules and get webpack up and running. Create webpack.config.js as well as package.json. Write the entry file and the bare bones of all the scripts.
  * Get webpack serving files and frame out index.html
  * Have Matter.js engine working
  * Create and render basic objects on Canvas
* Day 2: Manipulate the basic physics of `world1.js` and get the objects to render and move as expected
  * Complete `world1.js` (engine, rendering, etc)
  * Test the object rendering and physical movement
  * Setup user manipulation by keys
  * Basic Styling
* Day 3: Build `world2.js` and `world3.js1` and get the objects to render and move as expected
  * Complete `world2.js` and `world3.js`
  * Test the object rendering, physical movement, and user manipulation by keys
  *
* Day 4: Focus on styling and building `game.js`
  * Install user controls, links, and modals
  * Style `game.js` and the Canvas to look clean and professional

## Bonus features
To evolve this project, I would like to do the following:
* Make this app mobile-responsive with touch
* Create a physics engine from scratch in order to have more flexibility in physics manipulation, and to gain autonomy from using JS libraries.
* Create more physical states that the user can interact with
* Create mini games in each physical state that the user can play to make it more user-interactive
