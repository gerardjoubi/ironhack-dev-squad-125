class Game {
    constructor(canvasId) {
        this.canvasId = canvasId;
        this.ctx = null;
        this.canvas = null;
        this.arrows = new Arrows();
        this.listenKeyboard = listenKeyStrokes;
    }
    setCanvas() {
        this.canvas = document.getElementById(this.canvasId);
        this.canvas.width = canvas.scrollWidth; // get drawing surface width set in css
        this.canvas.height = canvas.scrollHeight; // get
        this.ctx = this.canvas.getContext("2d");
    }
    start() {
        this.setCanvas();
        this.listenKeyboard();
    }
}
