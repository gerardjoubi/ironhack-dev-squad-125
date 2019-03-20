"use strict";

const log = (d) => console.log(d);

const timeTwo = (n) => n * 2;

const print = (nb) => {
    log(timeTwo(nb));
}

const nbs = [123, 66, 23, 10, 444];
nbs.forEach(print);