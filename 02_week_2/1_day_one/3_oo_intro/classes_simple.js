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
const audi1 = new Car("audi", "a3", 30000, );
const audi2 = new Car("audi", "a5", 40000);
const bima1 = new Car("bmw", "m4", 40000);
// const badCar = Car("bad"); // error thrown 
console.log(audi1.start());
console.log(bima1.getPrice());
console.log("nbre of wheels", bima1.getAmountOfWheel());

// WRITE AN Array of object and loop through it