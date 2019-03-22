const solve = function (input) {
    "use strict";
    const res = [];

    const calcVal = v => v % 2 === 0 ? v / 2 : (v * 3) + 1;

    /** recursive functions are calling themselves */
    const doRecursion = (inpt) => {
      res.push(inpt);
      if (inpt != 1) return doRecursion(calcVal(inpt));
      else return res.length;
    };

    return doRecursion(input);
}

console.log("conjecture solving count :", solve(150));
