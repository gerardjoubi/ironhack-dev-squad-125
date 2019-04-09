import DOM from "./dom.js";
import Player from "./player.js";
import Pond from "./pond.js";

class Game {
  constructor() {
    this.dayLeft = 3;
    this.players = [];
    this.gameStep = 1;
    this.pond = new Pond();
    this.dom = new DOM();
  }

  start() {
    var count = Number(this.dom.setPlayerCount());
    while (count > 0) {
      this.players.push(
        new Player(this.dom.setPlayerName(), this.players.length)
      );
      count--;
    }
    console.log(this.players);
    this.doADay();
  }

  doADay() {
    console.log("it's a brand new day fellaz !!!");
    var total = 0;
    this.players.forEach(player => {
      let count = Number(this.dom.setFishRemovalAmount(this.gameStep));
      //   let count = Number(player.catchFishes());
      total += count;
    });
    this.pond.removeFishes(total);
    this.dayLeft--;
    this.gameStep++;
    console.log("total fishes taken", total);
    console.log("current pond's state", this.pond);
    if (this.dayLeft) this.doADay();
    else alert("end of the game !!!");
  }
}

new Game().start();
// g.start();
