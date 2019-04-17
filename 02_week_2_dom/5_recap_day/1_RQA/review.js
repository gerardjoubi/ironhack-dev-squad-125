function Bike(b) {
  this.brand = b;
}

Test.prototype.getBrand = function() {
  return this.brand;
};

Test.prototype.drive = function() {
  console.log("time to roll !");
};

class Skate {
  constructor(brd) {
    this.brand = brd;
  }
  getBrand() {
    return this.brand;
  }
  drive() {
    console.log("time to roll !");
  }
}

/* Instances of ... */
const myBike = new Bike("Gitane");
const yourBike = new Bike("Peugeot");

const mySkate = new Skate("Zero");
const youtSkate = new Skate("Toy machine");
