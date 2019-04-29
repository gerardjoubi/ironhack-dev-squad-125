import isAdidas, { countLetters } from "./utils.js";

class Product {
  constructor(props) {
    this.price = props.price;
    this.ref = props.ref;
  }
}

class Sneaker extends Product {
  constructor(props) {
    super(props);
    this.name = props.name;
    this.brand = props.brand;
    this.color = props.color;
    this.size = props.size;
  }

  getPrice() {
    return this.price;
  }

  setPrice(newPrice) {
    this.price = newPrice;
    return this.price;
  }

  giveMeThis() {
    return this;
  }

  looseThis() {
    setTimeout(function() {
      // JAVA GUYS + PHP + C# GUYS ... nose bleed
      // classic functions redefine their own value of this
      console.log("Oh no ! Where is my this ??! ", this);
      // global object
    }, 1000);

    setTimeout(() => {
      // fat arrow functions use the parent scope's value of this
      console.log("Congratulations ! You got it back ! ", this);
    }, 3000);

    return "";
  }
}

const superstars = new Sneaker({
  brand: "Adidas",
  color: "white and black",
  name: "superstar",
  ref: "ref_123456A",
  price: 60,
  size: 11
});

console.log("print instanciated object \n");
console.log(superstars);
console.log("print sneaker's price  \n");
console.log(`${superstars.getPrice()} euros`);
console.log("set sneaker's price and print new price  \n");
console.log("Discount : " + superstars.setPrice(55) + " euros");
console.log("get the value of this \n");
console.log(superstars.giveMeThis());
console.log("how to loose this... and how to fix it \n");
console.log(superstars.looseThis());

// Objet destructuring
const { name, brand, price: currentPrice } = superstars;
console.log(`Destructured values : ${name} - ${brand} (${currentPrice} euros)`);

// using imported functions
console.log(`I love my ${isAdidas(superstars.brand) ? "Adidas" : "sneakers"}`);
console.log(`the ref counts ${countLetters(superstars.ref)} letters`);