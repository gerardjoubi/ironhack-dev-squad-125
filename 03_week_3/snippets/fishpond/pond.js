export default class Pond {
  constructor(nb, ratio) {
    this.fishes = nb || 10;
    this.reproduce = ratio || 1.5;
  }
  removeFishes(nb) {
    this.fishes -= nb;
  }
  addFishes(nb) {
    this.fishes = Math.floor(this.fishes * this.reproduce);
  }
}