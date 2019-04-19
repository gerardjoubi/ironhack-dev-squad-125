const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  ref: {
    type: String,
    required: true,
    validate: [
      val => /^ref\d{6}([A-Z]{1})$/.test(val),
      "the provided reference is not valid"
    ]
  },
  price: {
    type: String,
    required: true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category" // tells Mongoose this ID connects to the "Author" model
  }
});

productSchema.index({ ref: 1 }, { unique: true }); // ensure unique ref
const productModel = mongoose.model("Product", productSchema);

module.exports = productModel;