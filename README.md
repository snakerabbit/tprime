# TPrime

[TPrime][TPrime] is a basic educational simulation game that allows users to interact with moving and static objects in varying degrees of gravitational pull and time dilation to demonstrate the theory of relativity.

Users are able to traverse between different states of physical constants and see a visual representation of the differences in the behavior of the objects that can be interacted with.

![tprimelanding](https://image.ibb.co/cCrCDw/Screen_Shot_2017_10_06_at_9_42_30_AM.png)

## Features
In TPrime, users are be able to:
* toggle between different physical states that differ in the strength of gravitational fields and time dilation
* Observe the changes in moving and static objects
* Input age and see the effects that gravity have one time
* Toggle the atmospheric gas levels to observe air friction
* Toggle the mass of pendulum objects and soft objects to observe the effect of mass on gravitational force.

![tprimeopen](https://image.ibb.co/jryymG/Screen_Shot_2017_10_06_at_9_49_28_AM.png)

The current age is input and the time following is added and displayed to demonstrate the effects of gravitational field on time using the [Schwarzschild Gravitational Time Dilation][Schwarzschild Gravitational Time Dilation] equation.


In addition, the project includes:
* a How To Play modal to describe how to interact with the simulation
![tprimemodal](https://image.ibb.co/hBgLYw/Screen_Shot_2017_10_06_at_9_57_57_AM.png)


## Architecture and Technologies
This project was implemented with the following technologies


* Vanilla JavaScript DOM for overall structure and game logic,
* Canvas for DOM manipulation and rendering,
* Matter.js for basic physics engine structure and manipulation,
* Webpack to bundle and serve up the various scripts.


## Future Direction
To evolve this project, I would like to do the following:
* Add more objects and add the functionality for users to interactive by mouse or touch
* Create a physics engine from scratch in order to have more flexibility in physics manipulation, and to gain autonomy from using JS libraries.
* Create more physical states that the user can interact with
* Allow users to render custom objects and have more user control of physical states


[TPrime]:https://snakerabbit.github.io/tprime/
[Schwarzschild Gravitational Time Dilation]:https://docs.google.com/viewer?url=http://gfm.cii.fc.ul.pt/events/lecture_series/general_relativity/gfm-general_relativity-lecture4.pdf
