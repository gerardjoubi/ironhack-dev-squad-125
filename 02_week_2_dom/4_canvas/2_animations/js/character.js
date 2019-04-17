class Character {
  constructor(imgSrc, ctx) {
    if (!imgSrc) throw new Error("Char needs an image !!!");
    this.id = "heroe_0ne";
    this.ctx = ctx;
    this.life = 100;
    this.metrics = {
      x: 120,
      y: 120,
      h: 100,
      w: 100,
    },
    this.img = new Image();
    this.img.src = imgSrc;
    this.img.onload = this.drawingLoop.bind(this);
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
}
