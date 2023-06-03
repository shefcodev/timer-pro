// Timer App

"use strict";

const durationInput = document.getElementById("duration");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const circle = document.getElementById("circle");

const perimeter = 2 * Math.PI * circle.getAttribute("r");
circle.setAttribute("stroke-dasharray", perimeter);
let currentOffset = 0;

const timer = new Timer(durationInput, startButton, pauseButton, {
        onStart() {
            console.log("Timer started");
        }, 
        onTick() {
            circle.setAttribute("stroke-dashoffset", currentOffset);
            currentOffset -= 50; 
        }, 
        onComplete() {
            console.log("Timer is completed");
        }
    }
);  

 