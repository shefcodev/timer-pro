// Timer App

"use strict";

const durationInput = document.getElementById("duration");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
class Timer {
    constructor(durationInput, startButton, pauseButton) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        const {durationInput: duraInput, startButton: startBtn, pauseButton: pauseBtn} = this;
        startBtn.addEventListener("click", this.start);
        pauseBtn.addEventListener("click", this.pause);
    }

    start = () => {
        this.tick();
        this.timerID = setInterval(this.tick, 1000);
    }

    pause = () => {
        clearInterval(this.timerID);
    }

    tick = () => {
        console.log("tick");
    }
}

const timer = new Timer(durationInput, startButton, pauseButton);  


// this is another program!;



