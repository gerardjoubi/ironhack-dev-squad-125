// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

const nbList = [1, 2, 3, 4, 5];

const incrementedNumberList = nbList.map(el => el + 2);

console.log(incrementedNumberList);
console.log(incrementedNumberList === nbList);