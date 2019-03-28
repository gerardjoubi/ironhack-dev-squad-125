class Arrows {
    constructor() {
        this.arrows = document.querySelectorAll(".icon");
        if (!this.arrows) throw new Error("No arrows element, did you defer or module your script tag ?");
        this.exec();
    }
    exec() {
        this.arrows.forEach(arrow => {
            arrow.onclick = this.logDirection.bind(this);
        }, this);
    }
    logDirection(evt) {
        const source = evt.target || evt.srcElement;
        this.currentDirection = source.getAttribute("data-direction");
        console.log(this.currentDirection);
    }

}