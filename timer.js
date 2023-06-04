"use strict";

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
        this.timerID = setInterval(this.tick, 50);
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
            this.timeRemaining = this.timeRemaining - 0.05;
            if (this.onTick) {
                this.onTick();
            }
        }
    }

    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time) {
        this.durationInput.value = time.toFixed(2);
    }
}