function HoverCraft(p) {
  if (!(this instanceof HoverCraft)) throw new Error("Please call HoverCraft as a constructor");
  this.name = p.name;
  this.reactorCount = p.reactorCount;
  this.captain = p.captain || "default captain";
  this.crewCount = p.crewCount || 0;
  this.coreTechno = p.coreTechno;
  // return this; // in constructor, you don't have to return thios, cause it's default behaviour
}

HoverCraft.prototype.land = function() {
    return "SWWOOOOOOSH " + this.name + " is landing !!!";
};

HoverCraft.prototype.start = function() {
  return "VROOOOM " + this.name + " is starting up !!!!";
};

var ship, falcon;

try {
  ship = new HoverCraft({
    name: "Nebuchadnezzar",
    captain: "Morpheus",
    crewCount: 9,
    coreTechno: "atomic"
  });
  falcon = new HoverCraft({
    name: "Millennium Falcon",
    captain: "Han Solo",
    crewCount: 5,
    coreTechno: null,
    toto: true
  });
} catch (err) {
  console.warn("we catched errors", err);
}

console.log("time to start the engines ====>");
console.log(ship.start());
console.log(falcon.start());

// console.log("1 ship ====>");
// console.log(ship);
// console.log("2 falcon ====>");
// console.log(falcon);

// HoverCraft.prototype.start = function() {
//     return `${this.name} is starting`;
// };

// HoverCraft.prototype.landing = function() {
//     return `${this.name} is landing`;
// };

// HoverCraft.prototype.getCrewCount = function() {
//     return this.crewCount;
// };
