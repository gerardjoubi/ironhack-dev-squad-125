class Vehicle {
    constructor(nbOfWheels, doors) {
        this.nbOfWheels = nbOfWheels;
    }
    getAmountOfWheel() {
        return this.nbOfWheels;
    }
}
class Car extends Vehicle {
    constructor(brand, model, price, nbOfDoors) {
        super(4, nbOfDoors || 4);
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.nbOfDoors = nbOfDoors || 4;
    }
    start() {
        return `VROOOM !!! ${this.brand} ${this.brand} is starting`;
    }
    getPrice() {
        return `You know, !!! ${this.brand} car costs ${this.price}`;
    }
}
// const badCar = Car("bad construct call"); // error thrown since no new keyword
const audi1 = new Car("audi", "a3", 30000, );
const audi2 = new Car("audi", "a5", 40000);
const bmw1 = new Car("bmw", "m4", 40000);
console.log(audi1.start());
console.log(bmw1.getPrice());
console.log("nbre of wheels", bmw1.getAmountOfWheel());


/* Want some more ??? */
class Animal {
  constructor(species) {
    this.species = species;
  }
  getSpecies() {
    return this.species;
  }
  move() {
    return "I'm an animal, therefore I can move";
  }
}
class Fish extends Animal {
  constructor(species) {
    super(species);
    this.naturalHabitat = "ocean";
  }
  swim() {
    return `${this.species} can swim`;
  }
}

console.log("--------------------------\n");
const dog = new Animal("french bulldog");
console.log(dog);
console.log(dog.getSpecies());
console.log("--------------------------\n");
const shark = new Fish("hammer head");
console.log(shark);
console.log(shark.move());
console.log(shark.swim());
console.log(shark.getSpecies());