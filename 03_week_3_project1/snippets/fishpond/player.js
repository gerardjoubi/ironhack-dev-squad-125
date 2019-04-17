export default class Player {
    constructor(name, index) {
        this.name = name;
        this.money = 0;
        this.fishes = 0;
        this.health = 0;
        // this.createDOmElement();
        // this.input = document.querySelector(`.input:nth-child(${index})`);
        // this.input.oninput = setFishAmount.bind(this);
    }

    setFishAmount() {
        console.log(this)
    }

    catchFishes(nb) {
        this.input
        this.fishes += nb;
    }

    eat(nb) {
        this.health = 1;
    }

    starve(nb) {
        this.health = 0;
    }

    sell(amount) {
        this.money += amount * 1;
    }

    die(nb) {
        this.health = -1;
    }

    drawComBox() {

    }
}