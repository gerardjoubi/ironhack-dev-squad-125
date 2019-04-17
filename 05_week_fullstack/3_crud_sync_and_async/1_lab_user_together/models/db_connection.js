const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb://localhost/crud-together", { useNewUrlParser: true });

mongoose.connection.on("connected", () => {
  console.log("yay mongodb connected :)");
});

mongoose.connection.on("error", () => {
  console.log("nay db error sorry :(");
});

module.exports = connection;

// just a reminder on evens  ... :) 
// btn.addEventListener("click", function() {

// })