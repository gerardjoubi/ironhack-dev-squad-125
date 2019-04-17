/**
 * Let's use global scope for the moment, babel transpiler is still required to make true module isolation crossbrowser.
 */
class Game {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = null;
    this.chars = [];
    this.arrows = new Arrows();
    // this.listenKeyboard = listenKeyStrokes;
  }
  setCanvas() {
    this.canvas.width = canvas.scrollWidth; // get drawing surface width set in css
    this.canvas.height = canvas.scrollHeight; // same for height
    this.ctx = this.canvas.getContext("2d");
    this.chars.push(new Character("./../images/devil.png", this.ctx));
  }

  listenKeyboard() {
    document.addEventListener("keydown", evt => {
      // use fat arrow here to preserve "this" value
      const { ctx } = this; // using es6+ destructuring assignment utility syntax
      const { metrics } = this.chars[0]; // unpack metrics value out of this.chars[index:0] object
      return (function(evt) { //
        if (evt.key === "ArrowRight") {
          metrics.x = metrics.x + 1 <= ctx.canvas.width ? metrics.x + 10 : metrics.x;
        } else if (evt.key === "ArrowLeft") {
          metrics.x = metrics.x - 1 >= 0 ? metrics.x - 9 : 0;
        } else if (evt.key === "ArrowUp") {
          metrics.y = metrics.y + 1 >= 0 ? metrics.y - 5 : metrics.y;
        } else if (evt.key === "ArrowDown") {
          metrics.y = metrics.y + 1 <= ctx.canvas.height ? metrics.y + 10 : metrics.y;
        }
        // console.log("metrics", metrics);
      }(evt));
    });
  }
  start() {
    console.log("start game");
    this.setCanvas();
    this.listenKeyboard();
  }
}
