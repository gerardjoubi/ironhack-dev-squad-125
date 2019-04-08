// function Drill() {
//     this.brand = "Bosch";
//     this.motorPower = "5000w";
//     this.price = 400;
//     this.isUsefull = true;
// }

// Drill.prototype.start = function () {
//     return `i'm a drill from ${this.brand} and i just starded`;
// };

// Drill.prototype.stop = function () {
//     return `i'm a drill from ${this.brand} and i just stopped`;
// };

class Drill {
  constructor(brand, power, price, sCSS) {
    this.brand = brand;
    this.motorPower = power;
    this.price = price;
    this.isUsefull = true;
    this.wrapper = document.querySelector(sCSS);
    this.btn = this.createButton();
    // this.btn.onclick = this.displayInfos;
    this.btn.addEventListener("click", this.displayInfos);
  }
  createButton() {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.textContent = "display drill infos";
    return this.wrapper.appendChild(btn);
  }

  displayInfos = () => {
    console.log("meeeeh", this);
    this.wrapper.innerHTML += `this is a ${this.brand} drill that costs ${this.price}`;
  }

//   displayInfos() {
//     console.log("meeeeh", this);
//     this.wrapper.innerHTML += `this is a ${this.brand} drill that costs ${this.price}`;
//   }

  start() {
    return `i'm a drill from ${this.brand} and i just starded`;
  }

  stop() {
    return `i'm a drill from ${this.brand} and i just stopped`;
  }
}

// var res1 = foo();
var constructed = new Drill("Bosch", "400w", 123, "#drill_infos");
console.log(constructed.start());