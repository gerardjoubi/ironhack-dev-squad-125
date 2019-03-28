

function productRow(strings, personExp, ageExp) {
    var str0 = strings[0]; // "That "
    var str1 = strings[1]; // " is a "
    var ageStr;
    if (ageExp > 99) {
        ageStr = 'centenarian';
    } else {
        ageStr = 'youngster';
    }
    // We can even return a string built using a template literal
    return `<div></div>}`;
}

const product = "Banana";
const price = 1;
const output = productRow`a ${product} cost ${price}`;

console.log(output);