// switch ... i prefer my nintendo

// do ... while
// is like... eat your soup first !!!

var soup = 0, limit = 1;

do {
    soup += 1;
    console.log(`fair enough, you ate => ${soup} soup (no need to break ;)`);

} while(soup < limit);


/* FOR LOOP REVIEW */ 
console.log("=======fruit-loop!!!======");
var fruits = ["peach", "mango", "lime", "tomato"];
// BREAK only if you want to stop iteration
// Use case : you found what you where searching in this array ...
// No need to go further, 
const me = {
    favoriteFruit: "mango"
};

for (let i = 0; i < fruits.length; i++) {
    // use let to scope i to this specific for statement (for === block)
    console.log(fruits[i]);
    if (fruits[i] === me.favoriteFruit) {
        console.log("Break it, no need to go further because " + fruits[i] + " is my favorite");
        break;
    }
}

