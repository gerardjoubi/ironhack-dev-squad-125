const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productsPackSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
      }
    }
  ]
});

const productsPackModel = mongoose.model("ProductPack", productsPackSchema);

module.exports = productsPackModel;