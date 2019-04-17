const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/my-first-db", { useNewUrlParser: true });

const Cat = mongoose.model("Cat", { name: String });

const catNames = ["foo", "bar", "baz", "bill", "jim", "kim", "jane", "mina", "kitty"];
var index = 0;

function addACat(name) {
  const kitty = new Cat({ name });
  kitty.save(err => {
    if (err) console.log(err);
    else {
      console.log("meow");
      seeCats();
    }
  });
}

function seeCats() {
  console.log("All the CATS!");
  Cat.find({}, (err, cats) => {
    // cats is an array of Cat instances
    cats.forEach((cat, i) => {
      console.log(` --> cat ${i+1}: `, cat.name);
    });
  });
}

setInterval(() => {
  addACat(catNames[index]);
  console.log(index);
  index = index + 1 < catNames.length ? ++index : 0;
}, 5000);
