console.log("====== LOOPS ======");

var fruits = ["banana", "apple", "mango", "peach", "water melon"];
console.log("=== direct access to array values ===");
console.log(fruits[0]); // banana
console.log(fruits[1]); // apple
console.log(fruits[2]); // mango
console.log(fruits[3]); // peach
console.log(fruits[4]); // water melon
console.log(fruits[5]); // undefined
console.log("=====================");
console.log("===for loop starts===");
console.log("=====================");
// BEHOLD THE FOR LOOP !
for (let i = 0; i < fruits.length; i += 1) {
    console.log("index => " + i);
    console.log(fruits[i]);
}
console.log("=====================");
console.log("====for loop ends====");
console.log("=====================\n");
// we could do the same with a while loop... but it's more risky (infinite loop)

let j = 1, // j is our increment,
  limit = 10; // we'll stop the loop at 10...

// let's use a while loop first with this simple example dealing with numbers

console.log("=====================");
console.log("==while loop starts==");
console.log("=====================");
while (j <= limit) { // note the <= sign
    console.log(j);
    j += 1; // don't forget to increment j, infinite loop otherwise
}

console.log("=====================");
console.log("===while loop ends===");
console.log("=====================\n");

// then, use a while loop to parse our fruits array
j = 0; // set j value to zero, matching the first fruits array index
console.log("=====================");
console.log("==while loop starts==");
console.log("=====================");

while (j < fruits.length) { // note the < sign
  console.log(j+  1 + " => ", fruits[j]);
  j += 1;
}

console.log("=====================");
console.log("while loop ends");
console.log("=====================\n");