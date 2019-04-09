export default class Word {
    constructor(level) {
        this.timerId = null;
        this.countDown = 5 / level;
        this.startCountDown();
    }
    startCountDown() {
        this.timerId = setInterval(() => {
          this.countDown--;
          console.log(this.countDown);
          if (this.countDown <= 0) clearInterval(this.timerId);
        }, 1000);
    }
    // startCountDown() {
    //     var time = null;
    //     const startClock = (now) => {
    //         // if (!time) time = now;
    //         time += 1;
    //         if (now - time >= 1000) this.countDown--;
    //         console.log(this.countDown)
    //         if (this.countDown <= 0) {
    //             this.countDown = 0;
    //             return window.cancelAnimationFrame(this.requestId);
    //         } else 
    //         window.requestAnimationFrame(startClock);
    //     };
    //     this.requestId = window.requestAnimationFrame(startClock)
    // }
}