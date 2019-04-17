class BadBot {

    constructor(ctx, heroePos, level) {
        this.level = level;
        this.ctx = ctx;
        this.pos = {
            x: null,
            y: null
        };
        this.heroePos = heroePos;
    }

    fillRectangle(coords, color) {
        const randX = null;
        const randY = null;
        ctx.fillStyle = "#B10DC9"; // choose a fill color
        ctx.fillRect(660, 460, 120, 120);// dra
    }

    drawingLoop = () => {
        // console.log("draw", this)
        // this.ctx.fillStyle = "transparent";
        this.ctx.beginPath();
        this.ctx.clearRect(this.metrics.x, this.metrics.y, this.metrics.w, this.metrics.h);

        this.ctx.drawImage(
            this.img,
            this.metrics.x,
            this.metrics.y,
            this.metrics.w,
            this.metrics.h
        );
        // this.drawingLoop.bind(this)
        window.requestAnimationFrame(this.drawingLoop);
    };

    move() {

    }
}