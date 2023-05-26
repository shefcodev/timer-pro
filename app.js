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
        if (this.timeRemaining <= 0) {
            this.pause();
        } else {
            this.timeRemaining = this.timeRemaining - 1;
            console.log(this.timeRemaining);
        }
    }

    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time) {
        this.durationInput.value = time;
    }
}

const timer = new Timer(durationInput, startButton, pauseButton);  

