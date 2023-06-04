// Timer App

"use strict";

const durationInput = document.getElementById("duration");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const circle = document.getElementById("circle");

const circumference = 2 * Math.PI * circle.getAttribute("r");
circle.setAttribute("stroke-dasharray", circumference);
let duration;

const timer = new Timer(durationInput, startButton, pauseButton, {
        onStart(totalDuration) {
            duration = totalDuration;
        }, 
        onTick(timeRemaining) {
            circle.setAttribute("stroke-dashoffset", 
                circumference * timeRemaining / duration - circumference
            );
        }, 
        onComplete() {
            console.log("Timer is completed");
        }
    }
);  
 