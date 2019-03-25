function HoverCraft(p) {
    if (!(this instanceof HoverCraft)) throw new Error("Please call HoverCraft as a constructor");
    this.name = p.name;
    this.captain = p.captain;
    this.crewCount = p.crewCount;
    this.coreTechno = p.coreTechno;
}

HoverCraft.prototype.start = function() {
    return `${this.name} is starting`;
};

HoverCraft.prototype.landing = function() {
    return `${this.name} is landing`;
};

HoverCraft.prototype.getCrewCount = function() {
    return this.crewCount;
};

const blankShip = new HoverCraft({});
console.log(blankShip); // {}
console.log(Object.getPrototypeOf(blankShip)); // Object
//  console.log(blankShip.choobidoo); // undefined

var ship;
try {
    ship = new HoverCraft({
        name: "Nebuchadnezzar",
        captain: "Morpheus",
        crewCount: 9,
        coreTechno: "atomic"
    });
} catch (err) {
    console.warn(err);
}
console.log(ship);

