// Timer App

"use strict";

const durationInput = document.getElementById("duration");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        if (callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }

        const {durationInput: duraInput, startButton: startBtn, pauseButton: pauseBtn} = this;
        startBtn.addEventListener("click", this.start);
        duraInput.addEventListener("change", this.start);
        pauseBtn.addEventListener("click", this.pause);
    }

    start = () => {
        if (this.onStart) {
            this.onStart();
        }
        this.tick();
        this.timerID = setInterval(this.tick, 1000);
    }

    pause = () => {
        clearInterval(this.timerID);
    } 

    tick = () => {
        if (this.timeRemaining <= 0) {
            this.pause();
            if (this.onComplete) {
                this.onComplete();
            }
        } else {
            this.timeRemaining = this.timeRemaining - 1;
            if (this.onTick) {
                this.onTick();
            }
        }
    }

    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time) {
        this.durationInput.value = time;
    }
}

const timer = new Timer(durationInput, startButton, pauseButton, {
        onStart() {
            console.log("Timer started");
        }, 
        onTick() {
            console.log("Timer just ticked down");
        }, 
        onComplete() {
            console.log("Timer is completed");
        }
    }
);  

